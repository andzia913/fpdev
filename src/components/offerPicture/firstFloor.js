import generateAreaProperties from '../../utils/statusOfFlat';


const firstFloor = {
  name: 'firstFloor',
  key: 'firstFloor',
  src: 'flats/pierwsze-piętro_Kaktusowa.png',
  areas: [
    {
      id: 'M12A',
      title: 'M12A',
      shape: 'rect',
      name: '12',
      href: 'flats/M12A_Kaktusowa.pdf',
      ...await generateAreaProperties('M12A'),
      strokeColor: 'rgba(0, 0, 0, 0)',
      coords: [674, 378, 881, 40],
    },
    {
      id: 'M13A',
      title: 'M13A',
      shape: 'poly',
      name: '13',
      href: 'flats/M13A_Kaktusowa.pdf',
      ...await generateAreaProperties('M13A'),
      strokeColor: 'rgba(0, 0, 0, 0)',
      coords: [874, 443, 1170, 443, 1168, 706, 1020, 706, 1020, 640, 876, 639],
    },
    {
      id: 'M14A',
      title: 'M14A',
      shape: 'poly',
      name: '14',
      href: 'flats/M14A_Kaktusowa.pdf',
      ...await generateAreaProperties('M14A'),
      strokeColor: 'rgba(0, 0, 0, 0)',
      coords: [1168, 443, 1205, 443, 1207, 372, 1296, 372, 1297, 441, 1376, 443, 1373, 372, 1509, 374, 1509, 641, 1308, 636, 1309, 705, 1166, 705],
    },
    {
      id: 'M15A',
      title: 'M15A',
      shape: 'poly',
      name: '15',
      href: 'flats/M15A_Kaktusowa.pdf',
      ...await generateAreaProperties('M15A'),
      strokeColor: 'rgba(0, 0, 0, 0)',
      coords: [1161, 379, 1163, 315, 1289, 316, 1287, 39, 1417, 40, 1415, 103, 1511, 103, 1509, 377, 1378, 377, 1380, 449, 1287, 449, 1289, 378, 1212, 378],
    },
    {
      id: 'M16A',
      title: 'M16A',
      shape: 'poly',
      name: '16',
      href: 'flats/M16A_Kaktusowa.pdf',
      ...await generateAreaProperties('M16A'),
      strokeColor: 'rgba(0, 0, 0, 0)',
      coords: [1069, 380, 1168, 378, 1166, 322, 1296, 324, 1296, 41, 1071, 41],
    },
    {
      id: 'M17A',
      title: 'M17A',
      shape: 'rect',
      name: '17',
      href: 'flats/M17A_Kaktusowa.pdf',
      ...await generateAreaProperties('M17A'),
      strokeColor: 'rgba(0, 0, 0, 0)',
      coords: [881, 380, 1077, 41],
    },
    {
      id: 'M18A',
      title: 'M18A',
      shape: 'rect',
      name: '18',
      href: 'flats/M18A_Kaktusowa.pdf',
      ...await generateAreaProperties('M18A'),
      strokeColor: 'rgba(0, 0, 0, 0)',
      coords: [476, 40, 677, 378],
    },
    {
      id: 'M19A',
      title: 'M19A',
      shape: 'poly',
      name: '19',
      href: 'flats/M19A_Kaktusowa.pdf',
      ...await generateAreaProperties('M19A'),
      strokeColor: 'rgba(0, 0, 0, 0)',
      coords: [482, 378, 484, 42, 255, 42, 257, 325, 383, 323, 387, 380],
    },
    {
      id: 'M20A',
      title: 'M20A',
      shape: 'poly',
      name: '20',
      href: 'flats/M20A_Kaktusowa.pdf',
      ...await generateAreaProperties('M20A'),
      strokeColor: 'rgba(0, 0, 0, 0)',
      coords: [390, 380, 392, 316, 262, 316, 262, 42, 138, 40, 138, 104, 44, 104, 44, 380, 173, 378, 173, 449, 264, 451, 262, 378],
    },
    {
      id: 'M21A',
      title: 'M21A',
      shape: 'poly',
      name: '21',
      href: 'flats/M21A_Kaktusowa.pdf',
      ...await generateAreaProperties('M21A'),
      strokeColor: 'rgba(0, 0, 0, 0)',
      coords: [346, 444, 346, 372, 257, 372, 257, 442, 182, 442, 180, 372, 44, 372, 44, 641, 244, 639, 245, 705, 392, 706, 390, 442],
    },
    {
      id: 'M22A',
      title: 'M22A',
      shape: 'poly',
      name: '22',
      href: 'flats/M22A_Kaktusowa.pdf',
      ...await generateAreaProperties('M22A'),
      strokeColor: 'rgba(0, 0, 0, 0)',
      coords: [387, 443, 674, 443, 679, 641, 533, 639, 533, 705, 387, 705],
    },
  ] };

export default firstFloor;
