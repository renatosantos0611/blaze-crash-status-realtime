export interface BlazeCrashProps {
  id: string;
  status: string;
  created_at: Date;
  crash_point: number;
  server_seed: string;
}

export class BlazeCrashBulder {
  id: string;
  status: string;
  created_at: Date;
  crash_point: number;
  server_seed: string;

  constructor(records){
    this.id = records.id;
    this.status = records.status;
    this.created_at = new Date(records.created_at);
    this.crash_point = Number(records.crash_point);
    this.server_seed = records.server_seed;
  }

  getObject(){
    return {
      id: this.id,
      status: this.status,
      created_at: this.created_at,
      crash_point: this.crash_point,
      server_seed: this.server_seed,
    };
  }
}

