import api from "@/lib/axios";

class FlightService {
  static async getAirports(params: Record<string, number>) {
    try {
      const response = api.get("/flights/getNearByAirports", { params });
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default FlightService;
