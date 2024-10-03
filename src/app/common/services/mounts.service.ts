import { Injectable } from "@angular/core";
import { Mounts } from "src/app/wow/interfaces/mounts.interface";

@Injectable({ providedIn: "root" })
export class MountsService {
  private mount!: Mounts;

  setMount(mount: Mounts) {
    this.mount = mount;
  }

  getMount() {
    return this.mount;
  }
}
