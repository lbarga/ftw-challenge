import { ServiceModel } from "@/models/service-model";
import MockJson from "../jsons/mock.json";

const getServices = (): ServiceModel[] => {
  return MockJson as ServiceModel[];
};

export const servicesService = {
  getServices,
};
