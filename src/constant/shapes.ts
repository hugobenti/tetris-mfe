export interface shape {
    value: number[][][];
    color: number | string;
  }
  
  export const newRow:number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  
  export const newField:number[][] =
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  export const shape1: shape = {
    value: [
      [
        [0, 1],
        [1, 1],
        [1, 0],
      ],
  
      [
        [1, 1, 0],
        [0, 1, 1],
      ],
      [
        [0, 1],
        [1, 1],
        [1, 0],
      ],
  
      [
        [1, 1, 0],
        [0, 1, 1],
      ],
    ],
    color: 1,
  };
  
  export const shape2: shape = {
    value: [
      [
        [1, 0],
        [1, 1],
        [0, 1],
      ],
  
      [
        [0, 1, 1],
        [1, 1, 0],
      ],
      [
        [1, 0],
        [1, 1],
        [0, 1],
      ],
  
      [
        [0, 1, 1],
        [1, 1, 0],
      ],
    ],
    color: 2,
  };
  
  export const shape3: shape = {
    value: [
      [
        [0, 1, 0],
        [1, 1, 1],
      ],
  
      [
        [0, 1],
        [1, 1],
        [0, 1],
      ],
  
      [
        [1, 1, 1],
        [0, 1, 0],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 0],
      ],
    ],
    color: 3,
  };
  
  export const shape4: shape = {
    value: [
      [
        [1, 1],
        [1, 1],
      ],
      [
        [1, 1],
        [1, 1],
      ],
      [
        [1, 1],
        [1, 1],
      ],
      [
        [1, 1],
        [1, 1],
      ],
    ],
    color: 4,
  };
  
  export const shape5: shape = {
    value: [
      [[1, 1, 1, 1]],
      [[1], [1], [1], [1]],
      [[1, 1, 1, 1]],
      [[1], [1], [1], [1]],
    ],
    color: 5,
  };
  
  export const shape6: shape = {
    value: [
      [
        [1, 1, 1],
        [0, 0, 1],
      ],
      [
        [0, 1],
        [0, 1],
        [1, 1],
      ],
      [
        [1, 0, 0],
        [1, 1, 1],
      ],
      [
        [1, 1],
        [1, 0],
        [1, 0],
      ],
    ],
    color: 6,
  };
  
  export const shape7: shape = {
    value: [
      [
        [1, 1, 1],
        [1, 0, 0],
      ],
      [
        [1, 1],
        [0, 1],
        [0, 1],
      ],
      [
        [0, 0, 1],
        [1, 1, 1],
      ],
      [
        [1, 0],
        [1, 0],
        [1, 1],
      ],
    ],
    color: 7,
  };
  
  