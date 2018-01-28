export interface Parts {
    components:[{
        partID: number;
        name: string;
        coats: [{
            id: number;
            name: string;
        }];    
    }]    
  };