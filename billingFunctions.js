// billingFunctions.js

export const billingFunctions = {
  // Bihar
  'Bihar Urban=EC+FC+Duty': (units) => {
    if (units <= 100) {
      let a = (7.57 * units) + 160;
      let b = (0.06 * a) + a;
      return b;
    } else {
      let c = (7.57 * 100) + 160 + (9.1 * (units - 100));
      let d = (0.06 * c) + c;
      return d;
    }
  },
  'Bihar Urban subsidized': (units) => {
    if (units <= 100) {
      let a = (4.27 * units) + 160;
      let b = (0.06 * a) + a;
      return b;
    } else {
      let c = (4.27 * 100) + 160 + (5.67 * (units - 100));
      let d = (0.06 * c) + c;
      return d;
    }
  },
  'Bihar Rural subsidized': (units) => {
    if (units <= 50) {
      let a = (2.6 * units) + 80;
      let b = (0.06 * a) + a;
      return b;
    } else {
      let b = units - 50;
      let c = (2.6 * 50) + 80 + (3 * b);
      let d = (0.06 * c) + c;
      return d;
    }
  },

  // Puducherry
  'Puducherry': (units) => {
    if (units <= 100) {
      return (2.25 * units) + 60;
    } else if (units > 100 && units <= 200) {
      let b = units - 100;
      return (3.25 * b) + (2.25 * 100) + 60;
    } else if (units > 200 && units <= 300) {
      let b = units - 200;
      return (5.4 * b) + (2.25 * 100) + 60 + (3.25 * 100);
    } else {
      let b = units - 300;
      return (5.4 * 100) + (2.25 * 100) + 60 + (3.25 * 100) + (6.8 * b);
    }
  },

  // Uttarakhand
  'Uttarakhand': (units) => {
    if (units <= 100) {
      return (3.15 * units) + 140 + (units * 0.15);
    } else if (units > 100 && units <= 200) {
      let b = units - 100;
      return (4.6 * b) + (3.15 * 100) + 140 + (units * 0.15);
    } else if (units > 200 && units <= 400) {
      let b = units - 200;
      return (6.3 * b) + (4.6 * 100) + (3.15 * 100) + 140 + (units * 0.15);
    } else {
      let b = units - 400;
      return (b * 6.95) + (6.3 * 200) + (4.6 * 100) + (3.15 * 100) + 140 + (units * 0.15);
    }
  },

  // Punjab
  'Punjab': (units) => {
    if (units <= 100) {
      let a = (4.19 * units) + 100 + units * 0.1;
      let b = a + (a * 0.078);
      return b;
    } else if (units > 100 && units <= 300) {
      let b = units - 100;
      let a = (4.19 * 100) + 100 + units * 0.1 + (6.64 * b);
      let c = a + (a * 0.078);
      return c;
    } else {
      let b = units - 300;
      let a = (4.19 * 100) + 100 + units * 0.1 + (6.64 * 200) + (7.75 * b);
      let c = a + (a * 0.078);
      return c;
    }
  },

  // Jammu & Kashmir
  'Jammu & Kashmir': (units) => {
    if (units <= 200) {
      return (2.3 * units) + 16 + (units * 0.15);
    } else if (units > 200 && units <= 400) {
      let b = units - 200;
      return (2.3 * 200) + 16 + (units * 0.15) + (4 * b);
    } else {
      let b = units - 400;
      return (2.3 * 200) + 16 + (units * 0.15) + (4 * 200) + (4.35 * b);
    }
  },

  // Ladakh
  'Ladakh': (units) => {
    if (units <= 200) {
      return (2.1 * units) + 18 + (units * 0.15);
    } else if (units > 200 && units <= 400) {
      let b = units - 200;
      return (2.1 * 200) + 18 + (units * 0.15) + (3.65 * b);
    } else {
      let b = units - 400;
      return (2.1 * 200) + 18 + (units * 0.15) + (3.65 * 200) + (4 * b);
    }
  },

  // Himachal Pradesh
  'Himachal Pradesh': (units) => {
    if (units <= 125) {
      let a = (4.15 * units) + 85;
      let b = (a * 0.03) + a;
      return b;
    } else if (units > 125 && units <= 300) {
      let b = units - 125;
      let a = (4.15 * 125) + 85 + (b * 5.05);
      let c = a + (a * 0.03);
      return c;
    } else {
      let b = units - 300;
      let a = (4.15 * 125) + 85 + (4.15 * 175) + (b * 5.65);
      let c = a + (a * 0.03);
      return c;
    }
  },
  'Himachal Pradesh subsidized': (units) => {
    if (units <= 125) {
      return 0;
    } else if (units > 125 && units <= 300) {
      let b = units - 125;
      let a = (1.85 * 125) + 85 + (b * 3.95);
      let c = a + (a * 0.03);
      return c;
    } else {
      let b = units - 300;
      let a = (1.85 * 125) + 85 + (3.95 * 175) + (b * 5);
      let c = a + (a * 0.03);
      return c;
    }
  },

  // Meghalaya
  'Meghalaya': (units) => {
    if (units <= 100) {
      return (4.5 * units) + 160 + (units * 0.05);
    } else if (units > 100 && units <= 200) {
      let b = units - 100;
      return (4.5 * 100) + 160 + (units * 0.05) + (5 * b);
    } else {
      let b = units - 200;
      return (4.5 * 100) + 160 + (units * 0.05) + (5 * 100) + (6.7 * b);
    }
  },

  // Manipur
  'Manipur': (units) => {
    if (units <= 100) {
      return (6.35 * units) + 130 + (units * 0.05);
    } else if (units > 100 && units <= 200) {
      let b = units - 100;
      return (6.35 * 100) + 130 + (units * 0.05) + (7.41 * b);
    } else {
      let b = units - 200;
      return (6.35 * 100) + 130 + (units * 0.05) + (7.41 * 100) + (8.4 * b);
    }
  },
  'Manipur subsidy': (units) => {
    if (units <= 100) {
      return (5.1 * units) + 130 + (units * 0.05);
    } else if (units > 100 && units <= 200) {
      let b = units - 100;
      return (5.1 * 100) + 130 + (units * 0.05) + (5.95 * b);
    } else {
      let b = units - 200;
      return (5.1 * 100) + 130 + (units * 0.05) + (5.95 * 100) + (6.75 * b);
    }
  },

  // Mizoram
  'Mizoram': (units) => {
    if (units <= 100) {
      return (8.29 * units) + 100;
    } else if (units > 100 && units <= 200) {
      let b = units - 100;
      return (8.29 * 100) + 100 + (9.61 * b);
    } else {
      let b = units - 200;
      return (8.29 * 100) + 100 + (9.61 * 100) + (10.17 * b);
    }
  },
  'Mizoram subsidy': (units) => {
    if (units <= 100) {
      return (4.9 * units) + 100;
    } else if (units > 100 && units <= 200) {
      let b = units - 100;
      return (4.9 * 100) + 100 + (7.9 * b);
    } else {
      let b = units - 200;
      return (4.9 * 100) + 100 + (7.9 * 100) + (8.2 * b);
    }
  },

  // Nagaland
  'Nagaland': (units) => {
    if (units <= 30) {
      return (8 * units) + 20;
    } else if (units > 30 && units <= 100) {
      let b = units - 30;
      return (10.8 * b) + (8 * 30) + 20;
    } else if (units > 100 && units <= 250) {
      let b = units - 100;
      return (11 * b) + (70 * 10.8) + (30 * 8) + 20;
    } else {
      let b = units - 250;
      return (b * 11.3) + (30 * 8) + (70 * 10.8) + (11 * 150) + 20;
    }
  },
  'Nagaland subsidy': (units) => {
    if (units <= 30) {
      return (5.35 * units) + 20;
    } else if (units > 30 && units <= 100) {
      let b = units - 30;
      return (5.8 * b) + (5.35 * 30) + 20;
    } else if (units > 100 && units <= 250) {
      let b = units - 100;
      return (6.5 * b) + (70 * 5.8) + (30 * 5.35) + 20;
    } else {
      let b = units - 250;
      return (b * 7.1) + (30 * 5.35) + (70 * 5.8) + (6.5 * 150) + 20;
    }
  },

  // Tripura
  'Tripura urban': (units) => {
    if (units <= 50) {
      return (5.08 * units) + 30 + 10;
    } else if (units > 50 && units <= 150) {
      let b = units - 50;
      return (6.4 * b) + (5.08 * 50) + 30 + 10;
    } else if (units > 150 && units <= 300) {
      let b = units - 150;
      return (6.59 * b) + (6.4 * 100) + (5.08 * 50) + 30 + 10;
    } else {
      let b = units - 300;
      return (b * 7.7) + (50 * 5.08) + (100 * 6.4) + (150 * 6.59) + 30 + 10;
    }
  },
  'Tripura urban subsidized': (units) => {
    if (units <= 50) {
      return (4.41 * units) + 30 + 10;
    } else if (units > 50 && units <= 150) {
      let b = units - 50;
      return (5.88 * b) + (4.41 * 50) + 30 + 10;
    } else if (units > 150 && units <= 300) {
      let b = units - 150;
      return (6.59 * b) + (5.88 * 100) + (4.41 * 50) + 30 + 10;
    } else {
      let b = units - 300;
      return (b * 7.7) + (50 * 4.41) + (100 * 5.88) + (150 * 6.59) + 30 + 10;
    }
  },
  'Tripura rural': (units) => {
    if (units <= 50) {
      return (4.23 * units) + 30 + 10;
    }
    return null;
  },
  'Tripura rural subsidized': (units) => {
    if (units <= 50) {
      return (3.54 * units) + 30 + 10;
    }
    return null;
  },

  // Arunachal Pradesh
  'Arunachal Pradesh': (units) => {
    return 4 * units;
  },

  // Jharkhand
  'Jharkhand rural': (units) => {
    if (units <= 250) {
      return (6.3 * units) + 75 + (0.2 * units);
    } else {
      return (6.3 * units) + 75 + (0.24 * units);
    }
  },
  'Jharkhand urban': (units) => {
    if (units <= 250) {
      return (6.65 * units) + 100 + (0.2 * units);
    } else {
      return (6.65 * units) + 100 + (0.24 * units);
    }
  },

  // Daman & Diu and Dadra & Nagar Haveli
  ' Daman & Diu and Dadra & Nagar Haveli': (units) => {
    if (units <= 100) {
      return (1.6 * units) + 20 + 10;
    } else if (units > 100 && units <= 200) {
      let b = units - 100;
      return (2.3 * b) + (1.6 * 100) + 20 + 10;
    } else if (units > 200 && units <= 400) {
      let b = units - 200;
      return (2.8 * b) + (2.3 * 100) + (1.6 * 100) + 20 + 10;
    } else {
      let b = units - 400;
      return (3.4 * b) + (2.8 * 200) + (2.3 * 100) + (1.6 * 100) + 20 + 10;
    }
  },

  // Ladhak (special)
  'Ladhak': (units) => {
    if (units <= 100) {
      return (1.75 * units) + 40 + 10;
    } else if (units > 100 && units <= 200) {
      let b = units - 100;
      return (3.75 * b) + (1.75 * 100) + 40 + 10;
    } else if (units > 200 && units <= 300) {
      let b = units - 200;
      return (6.25 * b) + (3.75 * 100) + (1.75 * 100) + 40 + 10;
    } else {
      let b = units - 300;
      return (7.75 * b) + (6.25 * 100) + (3.75 * 100) + (1.75 * 100) + 40 + 10;
    }
  },

  // Andaman and Nicobar
  'Andaman and Nicobar': (units) => {
    if (units <= 100) {
      return (2.75 * units) + 40 + 15;
    } else if (units > 100 && units <= 200) {
      let b = units - 100;
      return (6 * b) + (2.75 * 100) + 40 + 15;
    } else if (units > 200 && units <= 500) {
      let b = units - 200;
      return (8.5 * b) + (6 * 100) + (2.75 * 100) + 40 + 15;
    } else {
      let b = units - 500;
      return (10.25 * b) + (8.5 * 300) + (6 * 100) + (2.75 * 100) + 40 + 15;
    }
  },

  // Chandigarh
  'Chandigarh': (units) => {
    if (units <= 150) {
      return (2.75 * units) + (0.09 * units) + 30;
    } else if (units > 150 && units <= 400) {
      let b = units - 150;
      return (4.25 * b) + (2.75 * 150) + (0.09 * units) + 30;
    } else {
      let b = units - 400;
      return (4.65 * b) + (4.25 * 250) + (2.75 * 150) + (0.09 * units) + 30;
    }
  },

  // Goa
  'Goa': (units) => {
    if (units <= 100) {
      return (1.75 * units) + 40 + (0.2 * units) + 15;
    } else if (units > 100 && units <= 200) {
      let b = units - 100;
      return (2.6 * b) + (1.75 * 100) + (0.2 * units) + 15;
    } else if (units > 200 && units <= 300) {
      let b = units - 200;
      return (3.3 * b) + (2.6 * 100) + (1.75 * 100) + (0.2 * units) + 15;
    } else if (units > 300 && units <= 400) {
      let b = units - 300;
      return (4.4 * b) + (3.3 * 100) + (2.6 * 100) + (1.75 * 100) + (0.2 * units) + 15;
    } else {
      let b = units - 400;
      return (5.1 * b) + (4.4 * 100) + (3.3 * 100) + (2.6 * 100) + (1.75 * 100) + (0.2 * units) + 15;
    }
  },

  // Andhra Pradesh
  'Andhra Pradesh': (units) => {
    if (units <= 30) {
      return (1.9 * units) + 20 + (0.06 * units);
    } else if (units > 30 && units <= 75) {
      let b = units - 30;
      return (3 * b) + (1.9 * 30) + (0.06 * units) + 20;
    } else if (units > 75 && units <= 125) {
      let b = units - 75;
      return (4.5 * b) + (3 * 45) + (1.9 * 30) + (0.06 * units) + 20;
    } else if (units > 125 && units <= 225) {
      let b = units - 125;
      return (6 * b) + (4.5 * 50) + (3 * 45) + (1.9 * 30) + (0.06 * units) + 20;
    } else if (units > 225 && units <= 400) {
      let b = units - 225;
      return (8.75 * b) + (6 * 100) + (4.5 * 50) + (3 * 45) + (1.9 * 30) + (0.06 * units) + 20;
    } else {
      let b = units - 400;
      return (9.75 * b) + (8.75 * 175) + (6 * 100) + (4.5 * 50) + (3 * 45) + (1.9 * 30) + (0.06 * units) + 20;
    }
  },

  // West Bengal
  'West Bengal-rural': (units) => {
    if (units <= 102) {
      return (5 * units) + 30;
    } else if (units > 102 && units <= 180) {
      let b = units - 102;
      return (6.24 * b) + (5 * 102) + 30;
    } else if (units > 180 && units <= 300) {
      let b = units - 180;
      return (6.89 * b) + (6.24 * 78) + (5 * 102) + 30;
    } else if (units > 300 && units <= 600) {
      let b = units - 300;
      let a = (7.44 * b) + (6.89 * 120) + (6.24 * 78) + (5 * 102) + 30;
      return a + (a * 0.1);
    } else if (units > 600 && units <= 900) {
      let b = units - 600;
      let a = (7.43 * b) + (7.44 * 300) + (6.89 * 120) + (6.24 * 78) + (5 * 102) + 30;
      return a + (a * 0.1);
    } else {
      let b = units - 900;
      let a = (9.22 * b) + (7.43 * 300) + (7.44 * 300) + (6.89 * 120) + (6.24 * 78) + (5 * 102) + 30;
      return a + (a * 0.1);
    }
  },
  'West Bengal-rural subsidized': (units) => {
    if (units <= 102) {
      return (4.1 * units) + 30;
    } else if (units > 102 && units <= 180) {
      let b = units - 102;
      return (5.34 * b) + (4.1 * 102) + 30;
    } else if (units > 180 && units <= 300) {
      let b = units - 180;
      return (6.51 * b) + (5.34 * 78) + (4.1 * 102) + 30;
    } else if (units > 300 && units <= 600) {
      let b = units - 300;
      let a = (6.65 * b) + (6.51 * 120) + (5.34 * 78) + (4.1 * 102) + 30;
      return a + (a * 0.1);
    } else if (units > 600 && units <= 900) {
      let b = units - 600;
      let a = (6.63 * b) + (6.65 * 300) + (6.51 * 120) + (5.34 * 78) + (4.1 * 102) + 30;
      return a + (a * 0.1);
    } else {
      let b = units - 900;
      let a = (9.22 * b) + (6.63 * 300) + (6.65 * 300) + (6.51 * 120) + (5.34 * 78) + (4.1 * 102) + 30;
      return a + (a * 0.1);
    }
  },
  'West Bengal urban': (units) => {
    if (units <= 102) {
      return (5.04 * units) + 30;
    } else if (units > 102 && units <= 180) {
      let b = units - 102;
      return (6.33 * b) + (5.04 * 102) + 30;
    } else if (units > 180 && units <= 300) {
      let b = units - 180;
      return (7.12 * b) + (6.33 * 78) + (5.04 * 102) + 30;
    } else if (units > 300 && units <= 600) {
      let b = units - 300;
      let a = (7.52 * b) + (7.12 * 120) + (6.33 * 78) + (5.04 * 102) + 30;
      return a + (a * 0.1);
    } else if (units > 600 && units <= 900) {
      let b = units - 600;
      let a = (7.69 * b) + (7.52 * 300) + (7.12 * 120) + (6.33 * 78) + (5.04 * 102) + 30;
      return a + (a * 0.1);
    } else {
      let b = units - 900;
      let a = (9.22 * b) + (7.69 * 300) + (7.52 * 300) + (7.12 * 120) + (6.33 * 78) + (5.04 * 102) + 30;
      return a + (a * 0.1);
    }
  },
  'West Bengal urban-subsidized': (units) => {
    if (units <= 102) {
      return (4.15 * units) + 30;
    } else if (units > 102 && units <= 180) {
      let b = units - 102;
      return (5.37 * b) + (4.15 * 102) + 30;
    } else if (units > 180 && units <= 300) {
      let b = units - 180;
      return (6.38 * b) + (5.37 * 78) + (4.15 * 102) + 30;
    } else if (units > 300 && units <= 600) {
      let b = units - 300;
      let a = (6.73 * b) + (6.38 * 120) + (5.37 * 78) + (4.15 * 102) + 30;
      return a + (a * 0.1);
    } else if (units > 600 && units <= 900) {
      let b = units - 600;
      let a = (6.89 * b) + (6.73 * 300) + (6.38 * 120) + (5.37 * 78) + (4.15 * 102) + 30;
      return a + (a * 0.1);
    } else {
      let b = units - 900;
      let a = (9.22 * b) + (6.89 * 300) + (6.73 * 300) + (6.38 * 120) + (5.37 * 78) + (4.15 * 102) + 30;
      return a + (a * 0.1);
    }
  },

  // Gujarat
  'Gujarat urban': (units) => {
    if (units <= 50) {
      let a = (3.05 * units) + 15;
      let b = a + (a * 0.15);
      return b;
    } else if (units > 50 && units <= 100) {
      let b = units - 50;
      let a = (3.5 * b) + (3.05 * 50) + 15;
      let c = a + (a * 0.15);
      return c;
    } else if (units > 100 && units <= 250) {
      let b = units - 100;
      let a = (4.15 * b) + (3.5 * 50) + (3.05 * 50) + 15;
      let c = a + (a * 0.15);
      return c;
    } else {
      let b = units - 250;
      let c = (5.2 * b) + (4.15 * 150) + (3.5 * 50) + (3.05 * 50) + 15;
      let d = c + (c * 0.15);
      return d;
    }
  },
  'Gujarat rural': (units) => {
    if (units <= 50) {
      let a = (2.65 * units) + 15;
      let b = a + (a * 0.075);
      return b;
    } else if (units > 50 && units <= 100) {
      let b = units - 50;
      let a = (3.1 * b) + (2.65 * 50) + 15;
      let c = a + (a * 0.075);
      return c;
    } else if (units > 100 && units <= 250) {
      let b = units - 100;
      let a = (3.75 * b) + (3.1 * 50) + (2.65 * 50) + 15;
      let c = a + (a * 0.075);
      return c;
    } else {
      let b = units - 250;
      let c = (4.9 * b) + (3.75 * 150) + (3.1 * 50) + (2.65 * 50) + 15;
      let d = c + (c * 0.075);
      return d;
    }
  },

  // Kerala
  'Kerala=EC+FC+Duty': (units) => {
    if (units <= 250) {
      if (units <= 50) {
        let a = (4.05 * units);
        let b = a + (a * 0.1) + 65;
        return b;
      } else if (units > 50 && units <= 100) {
        let b = units - 50;
        let a = (5.1 * b) + (4.05 * 50);
        let c = a + (a * 0.01) + 85;
        return c;
      } else if (units > 100 && units <= 200) {
        let b = units - 100;
        let a = (6.95 * b) + (5.1 * 50) + (4.05 * 50);
        let c = a + (a * 0.01) + 120;
        return c;
      } else {
        let b = units - 200;
        let a = (8.2 * b) + (6.95 * 100) + (5.1 * 50) + (4.05 * 50);
        let c = a + (a * 0.01) + 130;
        return c;
      }
    } else if (units > 250 && units <= 300) {
      let a = (6.4 * units);
      let c = a + (a * 0.1) + 150;
      return c;
    } else if (units > 300 && units <= 350) {
      let a = (7.25 * units);
      let c = a + (a * 0.1) + 175;
      return c;
    } else if (units > 350 && units <= 400) {
      let a = (7.6 * units);
      let c = a + (a * 0.1) + 200;
      return c;
    } else if (units > 400 && units <= 500) {
      let a = (7.9 * units);
      let c = a + (a * 0.1) + 230;
      return c;
    } else {
      let a = (8.8 * units);
      let c = a + (a * 0.1) + 260;
      return c;
    }
  },

  // Maharashtra
  'Maharashtra=EC+FC+WH+duty': (units) => {
    if (units <= 100) {
      let a = (4.41 * units) + 116 + (1.17 * units);
      let b = a + (a * 0.16);
      return b;
    } else if (units > 100 && units <= 300) {
      let b = units - 100;
      let a = (9.64 * b) + (4.41 * 100) + 116 + (1.17 * units);
      let c = a + (a * 0.16);
      return c;
    } else if (units > 300 && units <= 500) {
      let b = units - 300;
      let a = (13.61 * b) + (9.64 * 200) + (4.41 * 100) + 116 + (1.17 * units);
      let c = a + (a * 0.16);
      return c;
    } else {
      let b = units - 500;
      let c = (15.57 * b) + (13.61 * 200) + (9.64 * 200) + (4.41 * 100) + 116 + (1.17 * units);
      let d = c + (c * 0.16);
      return d;
    }
  },

  // Haryana
  'Haryana-EC+FC+Duty(10%units)': (units) => {
    if (units <= 100) {
      if (units <= 50) {
        return (2 * units) + 115 + (0.1 * units);
      } else {
        let b = units - 50;
        return (2.5 * b) + (2 * 50) + 115 + (0.1 * units);
      }
    } else if (units > 100 && units <= 800) {
      if (units <= 150) {
        return (2.75 * units) + 125 + (0.1 * units);
      } else if (units > 150 && units <= 250) {
        let b = units - 150;
        return (5.25 * b) + (2.75 * 150) + 125 + (0.1 * units);
      } else if (units > 250 && units <= 500) {
        let b = units - 250;
        return (6.3 * b) + (5.25 * 100) + (2.75 * 150) + 125 + (0.1 * units);
      } else {
        let b = units - 500;
        return (7.1 * 300) + (6.3 * 250) + (5.25 * 100) + (2.75 * 150) + 125 + (0.1 * units);
      }
    } else {
      return units * 7.1 + 125 + (0.1 * units);
    }
  },

  // Delhi
  'Delhi': (units) => {
    if (units <= 200) {
      let a = (3 * units) + 40;
      let b = (a * 0.2708);
      let c = a * 0.08;
      let d = a * 0.07;
      let e = (3 * units);
      let f = e * 0.2708;
      let g = 0.08 * e;
      let h = 0.05 * (e + f + g);
      let i = a + b + c + d + h;
      return i;
    } else if (units > 200 && units <= 400) {
      let b = units - 200;
      let a = (4.5 * b) + (3 * 200) + 40;
      let b1 = (a * 0.2708);
      let c = a * 0.08;
      let d = a * 0.07;
      let e = (4.5 * b) + (3 * 200);
      let f = e * 0.2708;
      let g = 0.08 * e;
      let h = 0.05 * (e + f + g);
      let i = a + b1 + c + d + h;
      return i;
    } else if (units > 400 && units <= 800) {
      let b = units - 400;
      let a = (6.5 * b) + (4.5 * 200) + (3 * 200) + 40;
      let b1 = (a * 0.2708);
      let c = a * 0.08;
      let d = a * 0.07;
      let e = (6.5 * b) + (4.5 * 200) + (3 * 200);
      let f = e * 0.2708;
      let g = 0.08 * e;
      let h = 0.05 * (e + f + g);
      let i = a + b1 + c + d + h;
      return i;
    } else if (units > 800 && units <= 1200) {
      let b = units - 800;
      let a = (7 * b) + (6.5 * 400) + (4.5 * 200) + (3 * 200) + 40;
      let b1 = (a * 0.2708);
      let c = a * 0.08;
      let d = a * 0.07;
      let e = (7 * b) + (6.5 * 400) + (4.5 * 200) + (3 * 200);
      let f = e * 0.2708;
      let g = 0.08 * e;
      let h = 0.05 * (e + f + g);
      let i = a + b1 + c + d + h;
      return i;
    } else {
      let b = units - 800;
      let a = (8 * b) + (7 * 400) + (6.8 * 400) + (5.8 * 200) + (3.9 * 200) + 40;
      let b1 = (a * 0.2708);
      let c = a * 0.08;
      let d = a * 0.07;
      let e = (8 * b) + (7 * 400) + (6.8 * 400) + (5.8 * 200) + (3.9 * 200);
      let f = e * 0.2708;
      let g = 0.08 * e;
      let h = 0.05 * (e + f + g);
      let i = a + b1 + c + d + h;
      return i;
    }
  },

  // Sikkim
  'Sikkim=EC+FC+Meter rent(20)': (units) => {
    if (units <= 50) {
      return (1.1 * units) + 50 + 20;
    } else if (units > 50 && units <= 100) {
      let b = units - 50;
      return (2.1 * b) + (1.1 * 50) + 50 + 20;
    } else if (units > 100 && units <= 200) {
      let b = units - 100;
      return (3.1 * b) + (2.1 * 50) + (1.1 * 50) + 50 + 20;
    } else if (units > 200 && units <= 400) {
      let b = units - 200;
      return (3.6 * b) + (3.1 * 100) + (2.1 * 50) + (1.1 * 50) + 50 + 20;
    } else {
      let b = units - 400;
      return (7.75 * b) + (3.6 * 200) + (3.1 * 100) + (2.1 * 50) + (1.1 * 50) + 50 + 20;
    }
  },

  // Assam
  'Assam': (units) => {
    if (units <= 120) {
      let a = (5.7 * units) + 140;
      let b = a + (a * 0.05);
      return b;
    } else if (units > 120 && units <= 240) {
      let b = units - 120;
      let a = (7 * b) + (5.7 * 120) + 140;
      let c = a + (a * 0.05);
      return c;
    } else {
      let b = units - 240;
      let c = (7.9 * b) + (7 * 120) + (5.7 * 120) + 140;
      let d = c + (c * 0.09);
      return d;
    }
  },

  // Karnataka
  'Karnataka Rural': (units) => {
    if (units <= 50) {
      let a = (4 * units);
      let b = a + (a * 0.09) + 185;
      return b;
    } else if (units > 50 && units <= 100) {
      let b = units - 50;
      let a = (5.3 * b) + (4 * 50);
      let c = a + (a * 0.09) + 185;
      return c;
    } else if (units > 100 && units <= 200) {
      let b = units - 100;
      let a = (6.85 * b) + (5.3 * 50) + (4 * 50);
      let c = a + (a * 0.09) + 185;
      return c;
    } else {
      let b = units - 200;
      let a = (7.7 * b) + (6.85 * 100) + (5.3 * 50) + (4 * 50);
      let c = a + (a * 0.09) + 185;
      return c;
    }
  },

  // Uttar Pradesh
  'Uttar Pradesh without subsidy': (units) => {
    if (units > 0) {
      let a = (6.5 * units) + 180;
      let b = a + (a * 0.05);
      return b;
    }
    return null;
  },
  'Uttar Pradesh with subsidy rural': (units) => {
    if (units <= 100) {
      let a = (3.35 * units) + 180;
      let b = a + (a * 0.05);
      return b;
    } else if (units > 100 && units <= 150) {
      let b = units - 100;
      let a = (3.85 * b) + (3.35 * 100) + 180;
      let c = a + (a * 0.05);
      return c;
    } else if (units > 150 && units <= 300) {
      let b = units - 150;
      let a = (5 * b) + (3.85 * 50) + (3.35 * 100) + 180;
      let c = a + (a * 0.05);
      return c;
    } else {
      let b = units - 300;
      let a = (5.5 * b) + (5 * 150) + (3.85 * 50) + (3.35 * 100) + 180;
      let c = a + (a * 0.05);
      return c;
    }
  },
  'Uttar Pradesh with subsidy urban': (units) => {
    if (units <= 150) {
      let a = (5.5 * units) + 220;
      let b = a + (a * 0.05);
      return b;
    } else if (units > 150 && units <= 300) {
      let b = units - 150;
      let a = (6 * b) + (5.5 * 150) + 220;
      let c = a + (a * 0.05);
      return c;
    } else {
      let b = units - 300;
      let a = (6.5 * b) + (6 * 150) + (5.5 * 150) + 180;
      let c = a + (a * 0.05);
      return c;
    }
  },
  'Uttar Pradesh without subsidy rural': (units) => {
    if (units > 0) {
      let a = (6.5 * units) + 180;
      let b = a + (a * 0.05);
      return b;
    }
    return null;
  },
  'UP without subsidy urban': (units) => {
    if (units > 0) {
      let a = (6.5 * units) + 220;
      let b = a + (a * 0.05);
      return b;
    }
    return null;
  },

  // Tamil Nadu
  'Tamil Nadu': (units) => {
    if (units <= 250) {
      if (units <= 50) {
        return 0;
      } else if (units > 50 && units <= 100) {
        let b = units - 50;
        return (2 * b) + 10;
      } else {
        let b = units - 100;
        return (3 * b) + (2 * 50) + 15;
      }
    }
    if (units > 250) {
      let b = units - 250;
      return (6.6 * b) + (4.6 * 150) + (3.5 * 50) + 25;
    }
    return null;
  },

  // Haryana (variant)
  'Haryana-EC+FC+Duty(10%units)-variant': (units) => {
    if (units <= 100) {
      if (units <= 50) {
        return (2.7 * units) + 115 + (0.1 * units);
      } else {
        let b = units - 50;
        return (4.5 * b) + (2.7 * 50) + 115 + (0.1 * units);
      }
    } else if (units > 100 && units <= 800) {
      if (units <= 150) {
        return (4.5 * units) + 115 + (0.1 * units);
      } else if (units > 150 && units <= 250) {
        let b = units - 150;
        return (5 * b) + (4.5 * 150) + 115 + (0.1 * units);
      } else if (units > 250 && units <= 500) {
        let b = units - 250;
        return (6.05 * b) + (5 * 100) + (4.5 * 150) + 115 + (0.1 * units);
      } else {
        let b = units - 500;
        return (6.75 * 300) + (6.05 * 250) + (5 * 100) + (4.5 * 150) + 115 + (0.1 * units);
      }
    } else {
      return (units * 6.75) + 115 + (0.1 * units);
    }
  },

  // Madhya Pradesh
  'Madhya Pradesh Urban': (units) => {
    if (units <= 50) {
      let a = (4.27 * units) + 71;
      let b = a + (a * 0.09);
      return b;
    } else if (units > 50 && units <= 150) {
      let b = units - 50;
      let a = (5.23 * b) + (4.27 * 50) + 124;
      let c = a + (a * 0.09);
      return c;
    } else if (units > 150 && units <= 300) {
      let b = units - 150;
      let a = (6.61 * b) + (5.23 * 50) + (4.27 * 50) + 540;
      let c = a + (a * 0.09);
      return c;
    } else {
      let b = units - 300;
      let a = (6.8 * b) + (6.61 * 100) + (5.23 * 50) + (4.27 * 50) + 540;
      let c = a + (a * 0.09);
      return c;
    }
  },
  'Madhya Pradesh Rural': (units) => {
    if (units <= 50) {
      let a = (4.27 * units) + 57;
      let b = a + (a * 0.09);
      return b;
    } else if (units > 50 && units <= 150) {
      let b = units - 50;
      let a = (5.23 * b) + (4.27 * 50) + 101;
      let c = a + (a * 0.09);
      return c;
    } else if (units > 150 && units <= 300) {
      let b = units - 150;
      let a = (6.61 * b) + (5.23 * 50) + (4.27 * 50) + 480;
      let c = a + (a * 0.09);
      return c;
    } else {
      let b = units - 300;
      let a = (6.8 * b) + (6.61 * 100) + (5.23 * 50) + (4.27 * 50) + 480;
      let c = a + (a * 0.09);
      return c;
    }
  }
  // Add more states if present in the notebook.
};
