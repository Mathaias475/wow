export interface Characters {
  className: string;
  classIcon: string;
  specializations: [
    {
      name: string;
      icon: string;
      description: string;
      habilities: [
        {
          icon: string;
          name: string;
        }
      ];
    }
  ];
}
