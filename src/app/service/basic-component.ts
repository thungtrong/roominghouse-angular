import { Location } from "@angular/common";

export class BasicCommponent {
    constructor(protected location: Location)
    {}
    goBack(): void
    {
        this.location.back();
    }
}