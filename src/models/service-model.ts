export enum ServiceStatus {
  UP = "up",
  WARNING = "warning",
  ERROR = "error",
}

export interface ServiceModel {
  id: number;
  service: string;
  status: ServiceStatus;
}
