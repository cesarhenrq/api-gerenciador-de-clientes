import DeliveryRepository from "../repositories/delivery.repository";

import Point from "../../../utils/point";

export default class DeliveryService {
  constructor(private repository: DeliveryRepository) {}

  async calculateRoute() {
    try {
      const result = await this.repository.findAll();

      const points: Point[] = result.rows.map((row) => ({
        id: row.id,
        name: row.name,
        pos_x: Number(row.pos_x),
        pos_y: Number(row.pos_y),
      }));

      const startTime = new Date().getTime();
      const allRoutes = this.permute(points);
      const allRoutesWithStartAndEnd = allRoutes.map((route) => [
        { pos_x: 0, pos_y: 0, name: "Origem" },
        ...route,
        { pos_x: 0, pos_y: 0, name: "Destino" },
      ]);
      const shortestRoute = this.findShortestRoute(allRoutesWithStartAndEnd);
      const endTime = new Date().getTime();
      const time = endTime - startTime;
      console.log("Tempo de execução: ", time);

      return {
        status: 200,
        message: "Rota calculada com sucesso",
        data: shortestRoute,
      };
    } catch (error) {
      return {
        status: 500,
        message: "Erro ao calcular rota",
        data: error,
      };
    }
  }

  private permute(points: Point[]): Point[][] {
    const result: Point[][] = [];

    const permuteHelper = (arr: Point[], start: number) => {
      if (start === arr.length - 1) {
        result.push([...arr]);
        return;
      }

      for (let i = start; i < arr.length; i++) {
        [arr[start], arr[i]] = [arr[i], arr[start]];
        permuteHelper(arr, start + 1);
        [arr[start], arr[i]] = [arr[i], arr[start]];
      }
    };

    permuteHelper(points, 0);
    return result;
  }

  private findShortestRoute(routes: Point[][]): Point[] {
    let shortestRoute: Point[] = [];
    let shortestDistance = Number.MAX_SAFE_INTEGER;

    for (const route of routes) {
      const currentDistance = this.calculateRouteDistance(route);
      if (currentDistance < shortestDistance) {
        shortestDistance = currentDistance;
        shortestRoute = route;
      }
    }

    return shortestRoute;
  }

  private calculateRouteDistance(route: Point[]): number {
    let distance = 0;

    for (let i = 0; i < route.length - 1; i++) {
      distance += this.calculateDistance(route[i], route[i + 1]);
    }

    return distance;
  }

  private calculateDistance(point1: Point, point2: Point): number {
    const deltaX = point1.pos_x - point2.pos_x;
    const deltaY = point1.pos_y - point2.pos_y;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  }
}
