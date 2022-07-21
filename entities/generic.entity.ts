export abstract class GenericEntity {
  
    constructor(id?: number) {
      this.id = id;
    }
    
    id: number | undefined;
    
    createdAt: Date;
    
    updatedAt: Date;
    
    createdBy: number;
    
    updatedBy: number;
    
    state: number;
  
    version: number;
  
    toPayload(): any {
      return this;
    }

  
  }