import { CategorySlug, Team, TeamsByCategory } from "../types";

const rawData = [
  {
    "id": 1,
    "points": 1,
    "season_id": 2023,
    "team_unit_id": 641,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 1,
    "name": "Alojzov",
    "slug": "alojzov",
    "district": "pv",
    "allPoints": [
      1
    ],
    "best_time": 28.01
  },
  {
    "id": 3,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 6,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 3,
    "name": "Bílovice",
    "slug": "bilovice",
    "district": "pv",
    "allPoints": [
      0,
      0,
      0,
      0
    ],
    "best_time": 19.01
  },
  {
    "id": 3,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 71,
    "category": "starsi-zaci",
    "group": "b",
    "team_id": 3,
    "name": "Bílovice",
    "slug": "bilovice",
    "district": "pv",
    "allPoints": [
      0,
      0
    ],
    "best_time": 17.45
  },
  {
    "id": 3,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 75,
    "category": "mladsi-zaci",
    "group": "b",
    "team_id": 3,
    "name": "Bílovice",
    "slug": "bilovice",
    "district": "pv",
    "allPoints": [
      0,
      0,
      0,
      0
    ],
    "best_time": 17.97
  },
  {
    "id": 3,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 78,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 3,
    "name": "Bílovice",
    "slug": "bilovice",
    "district": "pv",
    "allPoints": [
      0,
      0,
      0,
      0,
      0
    ],
    "best_time": 15.41
  },
  {
    "id": 3,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 85,
    "category": "dorostenci",
    "group": "a",
    "team_id": 3,
    "name": "Bílovice",
    "slug": "bilovice",
    "district": "pv",
    "allPoints": [
      0,
      0,
      0,
      0
    ],
    "best_time": 12.74
  },
  {
    "id": 3,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 132,
    "category": "mladsi-zaci",
    "group": "c",
    "team_id": 3,
    "name": "Bílovice",
    "slug": "bilovice",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 39.32
  },
  {
    "id": 6,
    "points": 70,
    "season_id": 2023,
    "team_unit_id": 105,
    "category": "dorostenci",
    "group": "a",
    "team_id": 6,
    "name": "Bousín",
    "slug": "bousin",
    "district": "pv",
    "allPoints": [
      1,
      10,
      15,
      3,
      8,
      1,
      8,
      5,
      2,
      7,
      10
    ],
    "best_time": 12.78
  },
  {
    "id": 6,
    "points": 94,
    "season_id": 2023,
    "team_unit_id": 129,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 6,
    "name": "Bousín",
    "slug": "bousin",
    "district": "pv",
    "allPoints": [
      7,
      8,
      10,
      12,
      5,
      7,
      1,
      12,
      10,
      10,
      12
    ],
    "best_time": 14.83
  },
  {
    "id": 7,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 673,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 7,
    "name": "Brodek u Konice",
    "slug": "brodek-u-konice",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 52.28
  },
  {
    "id": 11,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 662,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 11,
    "name": "Buková",
    "slug": "bukova",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 31.08
  },
  {
    "id": 11,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 671,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 11,
    "name": "Buková",
    "slug": "bukova",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 77.65
  },
  {
    "id": 19,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 651,
    "category": "mladsi-zaci",
    "group": "b",
    "team_id": 19,
    "name": "Doloplazy",
    "slug": "doloplazy",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 28.66
  },
  {
    "id": 19,
    "points": 1,
    "season_id": 2023,
    "team_unit_id": 677,
    "category": "starsi-zaci",
    "group": "b",
    "team_id": 19,
    "name": "Doloplazy",
    "slug": "doloplazy",
    "district": "pv",
    "allPoints": [
      1
    ],
    "best_time": 30.96
  },
  {
    "id": 19,
    "points": 12,
    "season_id": 2023,
    "team_unit_id": 57,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 19,
    "name": "Doloplazy",
    "slug": "doloplazy",
    "district": "pv",
    "allPoints": [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1
    ],
    "best_time": 16.33
  },
  {
    "id": 19,
    "points": 39,
    "season_id": 2023,
    "team_unit_id": 48,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 19,
    "name": "Doloplazy",
    "slug": "doloplazy",
    "district": "pv",
    "allPoints": [
      1,
      4,
      5,
      3,
      4,
      1,
      8,
      6,
      3,
      4
    ],
    "best_time": 15.37
  },
  {
    "id": 19,
    "points": 62,
    "season_id": 2023,
    "team_unit_id": 139,
    "category": "dorostenci",
    "group": "a",
    "team_id": 19,
    "name": "Doloplazy",
    "slug": "doloplazy",
    "district": "pv",
    "allPoints": [
      8,
      5,
      10,
      2,
      6,
      3,
      4,
      10,
      6,
      1,
      7
    ],
    "best_time": 13.21
  },
  {
    "id": 20,
    "points": 13,
    "season_id": 2023,
    "team_unit_id": 112,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 20,
    "name": "Drahany",
    "slug": "drahany",
    "district": "pv",
    "allPoints": [
      1,
      1,
      1,
      1,
      5,
      2,
      1,
      1
    ],
    "best_time": 15.8
  },
  {
    "id": 20,
    "points": 28,
    "season_id": 2023,
    "team_unit_id": 122,
    "category": "dorostenci",
    "group": "a",
    "team_id": 20,
    "name": "Drahany",
    "slug": "drahany",
    "district": "pv",
    "allPoints": [
      1,
      2,
      1,
      4,
      7,
      10,
      3
    ],
    "best_time": 13.56
  },
  {
    "id": 20,
    "points": 82,
    "season_id": 2023,
    "team_unit_id": 143,
    "category": "dorostenci",
    "group": "b",
    "team_id": 20,
    "name": "Drahany",
    "slug": "drahany",
    "district": "pv",
    "allPoints": [
      6,
      2,
      15,
      12,
      10,
      1,
      1,
      12,
      1,
      12,
      10
    ],
    "best_time": 12.9
  },
  {
    "id": 22,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 149,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 22,
    "name": "Dřevnovice",
    "slug": "drevnovice",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 23.75
  },
  {
    "id": 41,
    "points": 25,
    "season_id": 2023,
    "team_unit_id": 670,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 41,
    "name": "Krumsín",
    "slug": "krumsin",
    "district": "pv",
    "allPoints": [
      8,
      1,
      7,
      1,
      1,
      1,
      4,
      1,
      1
    ],
    "best_time": 14.91
  },
  {
    "id": 41,
    "points": 113,
    "season_id": 2023,
    "team_unit_id": 638,
    "category": "mladsi-zaci",
    "group": "b",
    "team_id": 41,
    "name": "Krumsín",
    "slug": "krumsin",
    "district": "pv",
    "allPoints": [
      10,
      1,
      12,
      12,
      15,
      15,
      2,
      1,
      15,
      15,
      15
    ],
    "best_time": 14.22
  },
  {
    "id": 41,
    "points": 123,
    "season_id": 2023,
    "team_unit_id": 126,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 41,
    "name": "Krumsín",
    "slug": "krumsin",
    "district": "pv",
    "allPoints": [
      15,
      15,
      15,
      12,
      10,
      1,
      10,
      15,
      15,
      15
    ],
    "best_time": 13.58
  },
  {
    "id": 44,
    "points": 21,
    "season_id": 2023,
    "team_unit_id": 28,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 44,
    "name": "Lipová",
    "slug": "lipova",
    "district": "pv",
    "allPoints": [
      6,
      2,
      1,
      2,
      3,
      1,
      1,
      4,
      1
    ],
    "best_time": 19.43
  },
  {
    "id": 44,
    "points": 24,
    "season_id": 2023,
    "team_unit_id": 24,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 44,
    "name": "Lipová",
    "slug": "lipova",
    "district": "pv",
    "allPoints": [
      7,
      2,
      1,
      6,
      2,
      3,
      1,
      1,
      1
    ],
    "best_time": 15.45
  },
  {
    "id": 44,
    "points": 88,
    "season_id": 2023,
    "team_unit_id": 635,
    "category": "dorostenci",
    "group": "a",
    "team_id": 44,
    "name": "Lipová",
    "slug": "lipova",
    "district": "pv",
    "allPoints": [
      10,
      5,
      15,
      3,
      3,
      3,
      1,
      12,
      15,
      15,
      6
    ],
    "best_time": 12.75
  },
  {
    "id": 46,
    "points": 42,
    "season_id": 2023,
    "team_unit_id": 672,
    "category": "dorostenci",
    "group": "a",
    "team_id": 46,
    "name": "Malé Hradisko",
    "slug": "male-hradisko",
    "district": "pv",
    "allPoints": [
      3,
      1,
      1,
      10,
      1,
      4,
      15,
      3,
      2,
      2
    ],
    "best_time": 13.18
  },
  {
    "id": 48,
    "points": 29,
    "season_id": 2023,
    "team_unit_id": 29,
    "category": "mladsi-zaci",
    "group": "b",
    "team_id": 48,
    "name": "Mostkovice",
    "slug": "mostkovice",
    "district": "pv",
    "allPoints": [
      2,
      3,
      6,
      2,
      3,
      1,
      1,
      7,
      4
    ],
    "best_time": 17.64
  },
  {
    "id": 48,
    "points": 35,
    "season_id": 2023,
    "team_unit_id": 26,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 48,
    "name": "Mostkovice",
    "slug": "mostkovice",
    "district": "pv",
    "allPoints": [
      0,
      7,
      7,
      5,
      1,
      8,
      0,
      1,
      1,
      5
    ],
    "best_time": 15.05
  },
  {
    "id": 48,
    "points": 53,
    "season_id": 2023,
    "team_unit_id": 4,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 48,
    "name": "Mostkovice",
    "slug": "mostkovice",
    "district": "pv",
    "allPoints": [
      2,
      5,
      7,
      6,
      8,
      5,
      1,
      7,
      8,
      4
    ],
    "best_time": 15.74
  },
  {
    "id": 48,
    "points": 89,
    "season_id": 2023,
    "team_unit_id": 62,
    "category": "starsi-zaci",
    "group": "b",
    "team_id": 48,
    "name": "Mostkovice",
    "slug": "mostkovice",
    "district": "pv",
    "allPoints": [
      6,
      12,
      1,
      12,
      7,
      15,
      1,
      10,
      10,
      15
    ],
    "best_time": 13.13
  },
  {
    "id": 48,
    "points": 90,
    "season_id": 2023,
    "team_unit_id": 83,
    "category": "dorostenci",
    "group": "a",
    "team_id": 48,
    "name": "Mostkovice",
    "slug": "mostkovice",
    "district": "pv",
    "allPoints": [
      3,
      12,
      1,
      3,
      12,
      12,
      5,
      15,
      15,
      12
    ],
    "best_time": 12.38
  },
  {
    "id": 52,
    "points": 18,
    "season_id": 2023,
    "team_unit_id": 639,
    "category": "dorostenci",
    "group": "a",
    "team_id": 52,
    "name": "Niva",
    "slug": "niva",
    "district": "pv",
    "allPoints": [
      1,
      1,
      4,
      1,
      1,
      2,
      6,
      1,
      1
    ],
    "best_time": 15.39
  },
  {
    "id": 56,
    "points": 30,
    "season_id": 2023,
    "team_unit_id": 669,
    "category": "dorostenci",
    "group": "a",
    "team_id": 56,
    "name": "Olšany u Prostějova",
    "slug": "olsany-u-prostejova",
    "district": "pv",
    "allPoints": [
      1,
      3,
      4,
      1,
      8,
      0,
      1,
      1,
      2,
      4,
      5
    ],
    "best_time": 13.94
  },
  {
    "id": 59,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 634,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 59,
    "name": "Otinoves",
    "slug": "otinoves",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 25.58
  },
  {
    "id": 59,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 674,
    "category": "mladsi-zaci",
    "group": "b",
    "team_id": 59,
    "name": "Otinoves",
    "slug": "otinoves",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 24.49
  },
  {
    "id": 61,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 63,
    "category": "mladsi-zaci",
    "group": "b",
    "team_id": 61,
    "name": "Pěnčín",
    "slug": "pencin",
    "district": "pv",
    "allPoints": [
      0,
      0,
      0
    ],
    "best_time": 18.15
  },
  {
    "id": 61,
    "points": 7,
    "season_id": 2023,
    "team_unit_id": 42,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 61,
    "name": "Pěnčín",
    "slug": "pencin",
    "district": "pv",
    "allPoints": [
      1,
      5,
      1,
      0
    ],
    "best_time": 17.84
  },
  {
    "id": 61,
    "points": 10,
    "season_id": 2023,
    "team_unit_id": 61,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 61,
    "name": "Pěnčín",
    "slug": "pencin",
    "district": "pv",
    "allPoints": [
      6,
      3,
      0,
      1
    ],
    "best_time": 15.33
  },
  {
    "id": 69,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 20,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 69,
    "name": "Ptení",
    "slug": "pteni",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 25.08
  },
  {
    "id": 69,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 65,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 69,
    "name": "Ptení",
    "slug": "pteni",
    "district": "pv",
    "allPoints": [
      0,
      0,
      0,
      0
    ],
    "best_time": 19.66
  },
  {
    "id": 72,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 679,
    "category": "starsi-zaci",
    "group": "b",
    "team_id": 72,
    "name": "Rozstání",
    "slug": "rozstani",
    "district": "pv",
    "allPoints": [
      0,
      0,
      0,
      0,
      0
    ],
    "best_time": 15.56
  },
  {
    "id": 72,
    "points": 35,
    "season_id": 2023,
    "team_unit_id": 119,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 72,
    "name": "Rozstání",
    "slug": "rozstani",
    "district": "pv",
    "allPoints": [
      2,
      5,
      1,
      5,
      8,
      3,
      6,
      1,
      0,
      1,
      3
    ],
    "best_time": 18.51
  },
  {
    "id": 72,
    "points": 63,
    "season_id": 2023,
    "team_unit_id": 120,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 72,
    "name": "Rozstání",
    "slug": "rozstani",
    "district": "pv",
    "allPoints": [
      1,
      15,
      6,
      8,
      1,
      2,
      1,
      6,
      12,
      3,
      8
    ],
    "best_time": 13.86
  },
  {
    "id": 73,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 95,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 73,
    "name": "Seloutky",
    "slug": "seloutky",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 29.48
  },
  {
    "id": 73,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 124,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 73,
    "name": "Seloutky",
    "slug": "seloutky",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 28.86
  },
  {
    "id": 73,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 676,
    "category": "mladsi-zaci",
    "group": "b",
    "team_id": 73,
    "name": "Seloutky",
    "slug": "seloutky",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 38.63
  },
  {
    "id": 77,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 98,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 77,
    "name": "Smržice",
    "slug": "smrzice",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 21.37
  },
  {
    "id": 77,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 115,
    "category": "dorostenci",
    "group": "a",
    "team_id": 77,
    "name": "Smržice",
    "slug": "smrzice",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 17.96
  },
  {
    "id": 77,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 682,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 77,
    "name": "Smržice",
    "slug": "smrzice",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 23.96
  },
  {
    "id": 88,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 7,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 88,
    "name": "Vícov",
    "slug": "vicov",
    "district": "pv",
    "allPoints": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "best_time": 16.76
  },
  {
    "id": 88,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 14,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 88,
    "name": "Vícov",
    "slug": "vicov",
    "district": "pv",
    "allPoints": [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "best_time": 14.43
  },
  {
    "id": 88,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 72,
    "category": "starsi-zaci",
    "group": "b",
    "team_id": 88,
    "name": "Vícov",
    "slug": "vicov",
    "district": "pv",
    "allPoints": [
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "best_time": 16.01
  },
  {
    "id": 88,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 114,
    "category": "dorostenci",
    "group": "a",
    "team_id": 88,
    "name": "Vícov",
    "slug": "vicov",
    "district": "pv",
    "allPoints": [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "best_time": 14.06
  },
  {
    "id": 97,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 74,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 97,
    "name": "Želeč",
    "slug": "zelec",
    "district": "pv",
    "allPoints": [
      0
    ],
    "best_time": 21.56
  },
  {
    "id": 98,
    "points": 2,
    "season_id": 2023,
    "team_unit_id": 3,
    "category": "mladsi-zaci",
    "group": "b",
    "team_id": 98,
    "name": "Krasice",
    "slug": "krasice",
    "district": "pv",
    "allPoints": [
      0,
      0,
      1,
      1,
      0,
      0,
      0
    ],
    "best_time": 19.28
  },
  {
    "id": 98,
    "points": 62,
    "season_id": 2023,
    "team_unit_id": 82,
    "category": "dorostenci",
    "group": "a",
    "team_id": 98,
    "name": "Krasice",
    "slug": "krasice",
    "district": "pv",
    "allPoints": [
      1,
      10,
      7,
      5,
      8,
      4,
      7,
      10,
      2,
      7,
      1
    ],
    "best_time": 13.3
  },
  {
    "id": 98,
    "points": 89,
    "season_id": 2023,
    "team_unit_id": 1,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 98,
    "name": "Krasice",
    "slug": "krasice",
    "district": "pv",
    "allPoints": [
      10,
      7,
      12,
      6,
      8,
      10,
      12,
      1,
      6,
      7,
      10
    ],
    "best_time": 14.66
  },
  {
    "id": 98,
    "points": 92,
    "season_id": 2023,
    "team_unit_id": 22,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 98,
    "name": "Krasice",
    "slug": "krasice",
    "district": "pv",
    "allPoints": [
      15,
      12,
      1,
      10,
      1,
      12,
      7,
      15,
      3,
      8,
      8
    ],
    "best_time": 13.05
  },
  {
    "id": 99,
    "points": 22,
    "season_id": 2023,
    "team_unit_id": 13,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 99,
    "name": "Domamyslice",
    "slug": "domamyslice",
    "district": "pv",
    "allPoints": [
      1,
      1,
      3,
      1,
      2,
      6,
      3,
      4,
      1
    ],
    "best_time": 15.21
  },
  {
    "id": 99,
    "points": 37,
    "season_id": 2023,
    "team_unit_id": 10,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 99,
    "name": "Domamyslice",
    "slug": "domamyslice",
    "district": "pv",
    "allPoints": [
      4,
      3,
      6,
      4,
      2,
      2,
      4,
      5,
      2,
      1,
      4
    ],
    "best_time": 18.28
  },
  {
    "id": 99,
    "points": 70,
    "season_id": 2023,
    "team_unit_id": 106,
    "category": "dorostenci",
    "group": "a",
    "team_id": 99,
    "name": "Domamyslice",
    "slug": "domamyslice",
    "district": "pv",
    "allPoints": [
      8,
      1,
      7,
      15,
      2,
      7,
      7,
      1,
      7,
      15
    ],
    "best_time": 12.71
  },
  {
    "id": 102,
    "points": 44,
    "season_id": 2023,
    "team_unit_id": 33,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 102,
    "name": "Kobeřice",
    "slug": "koberice",
    "district": "pv",
    "allPoints": [
      7,
      3,
      4,
      1,
      2,
      5,
      4,
      8,
      1,
      4,
      5
    ],
    "best_time": 14.83
  },
  {
    "id": 102,
    "points": 54,
    "season_id": 2023,
    "team_unit_id": 27,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 102,
    "name": "Kobeřice",
    "slug": "koberice",
    "district": "pv",
    "allPoints": [
      8,
      5,
      1,
      3,
      1,
      8,
      7,
      2,
      6,
      5,
      8
    ],
    "best_time": 16.1
  },
  {
    "id": 102,
    "points": 81,
    "season_id": 2023,
    "team_unit_id": 81,
    "category": "dorostenci",
    "group": "a",
    "team_id": 102,
    "name": "Kobeřice",
    "slug": "koberice",
    "district": "pv",
    "allPoints": [
      8,
      8,
      5,
      6,
      8,
      2,
      12,
      12,
      12,
      0,
      8
    ],
    "best_time": 13.27
  },
  {
    "id": 104,
    "points": 12,
    "season_id": 2023,
    "team_unit_id": 5,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 104,
    "name": "Hrochov",
    "slug": "hrochov",
    "district": "pv",
    "allPoints": [
      1,
      1,
      1,
      6,
      1,
      1,
      1
    ],
    "best_time": 18.62
  },
  {
    "id": 104,
    "points": 54,
    "season_id": 2023,
    "team_unit_id": 110,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 104,
    "name": "Hrochov",
    "slug": "hrochov",
    "district": "pv",
    "allPoints": [
      5,
      10,
      4,
      5,
      8,
      5,
      6,
      4,
      6,
      1
    ],
    "best_time": 14.89
  },
  {
    "id": 104,
    "points": 67,
    "season_id": 2023,
    "team_unit_id": 121,
    "category": "starsi-zaci",
    "group": "b",
    "team_id": 104,
    "name": "Hrochov",
    "slug": "hrochov",
    "district": "pv",
    "allPoints": [
      7,
      10,
      6,
      10,
      6,
      10,
      3,
      5,
      8,
      2
    ],
    "best_time": 14.68
  },
  {
    "id": 110,
    "points": 20,
    "season_id": 2023,
    "team_unit_id": 80,
    "category": "starsi-zaci",
    "group": "c",
    "team_id": 110,
    "name": "Soběsuky",
    "slug": "sobesuky",
    "district": "pv",
    "allPoints": [
      1,
      1,
      4,
      4,
      1,
      1,
      1,
      1,
      1,
      5
    ],
    "best_time": 16.52
  },
  {
    "id": 110,
    "points": 21,
    "season_id": 2023,
    "team_unit_id": 8,
    "category": "mladsi-zaci",
    "group": "b",
    "team_id": 110,
    "name": "Soběsuky",
    "slug": "sobesuky",
    "district": "pv",
    "allPoints": [
      6,
      1,
      1,
      4,
      3,
      1,
      3,
      1,
      1
    ],
    "best_time": 18.4
  },
  {
    "id": 110,
    "points": 50,
    "season_id": 2023,
    "team_unit_id": 103,
    "category": "dorostenci",
    "group": "a",
    "team_id": 110,
    "name": "Soběsuky",
    "slug": "sobesuky",
    "district": "pv",
    "allPoints": [
      5,
      6,
      4,
      6,
      1,
      5,
      6,
      8,
      1,
      1,
      7
    ],
    "best_time": 13.73
  },
  {
    "id": 110,
    "points": 51,
    "season_id": 2023,
    "team_unit_id": 140,
    "category": "dorostenci",
    "group": "b",
    "team_id": 110,
    "name": "Soběsuky",
    "slug": "sobesuky",
    "district": "pv",
    "allPoints": [
      1,
      4,
      4,
      4,
      5,
      6,
      5,
      1,
      6,
      15
    ],
    "best_time": 13.51
  },
  {
    "id": 110,
    "points": 82,
    "season_id": 2023,
    "team_unit_id": 32,
    "category": "starsi-zaci",
    "group": "b",
    "team_id": 110,
    "name": "Soběsuky",
    "slug": "sobesuky",
    "district": "pv",
    "allPoints": [
      5,
      10,
      6,
      12,
      10,
      12,
      10,
      12,
      4,
      1
    ],
    "best_time": 13.64
  },
  {
    "id": 110,
    "points": 92,
    "season_id": 2023,
    "team_unit_id": 2,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 110,
    "name": "Soběsuky",
    "slug": "sobesuky",
    "district": "pv",
    "allPoints": [
      8,
      10,
      10,
      7,
      12,
      1,
      12,
      12,
      7,
      5,
      8
    ],
    "best_time": 15.15
  },
  {
    "id": 110,
    "points": 97,
    "season_id": 2023,
    "team_unit_id": 16,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 110,
    "name": "Soběsuky",
    "slug": "sobesuky",
    "district": "pv",
    "allPoints": [
      3,
      15,
      8,
      3,
      15,
      8,
      12,
      15,
      10,
      7,
      1
    ],
    "best_time": 13.75
  },
  {
    "id": 479,
    "points": 8,
    "season_id": 2023,
    "team_unit_id": 99,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 479,
    "name": "Senetářov",
    "slug": "senetarov",
    "district": "bk",
    "allPoints": [
      1,
      7
    ],
    "best_time": 16.34
  },
  {
    "id": 479,
    "points": 18,
    "season_id": 2023,
    "team_unit_id": 134,
    "category": "starsi-zaci",
    "group": "b",
    "team_id": 479,
    "name": "Senetářov",
    "slug": "senetarov",
    "district": "bk",
    "allPoints": [
      4,
      7,
      4,
      2,
      1
    ],
    "best_time": 14.94
  },
  {
    "id": 479,
    "points": 82,
    "season_id": 2023,
    "team_unit_id": 101,
    "category": "starsi-zaci",
    "group": "a",
    "team_id": 479,
    "name": "Senetářov",
    "slug": "senetarov",
    "district": "bk",
    "allPoints": [
      1,
      15,
      15,
      4,
      1,
      12,
      7,
      15,
      12
    ],
    "best_time": 13
  },
  {
    "id": 782,
    "points": 0,
    "season_id": 2023,
    "team_unit_id": 663,
    "category": "mladsi-zaci",
    "group": "a",
    "team_id": 782,
    "name": "Seč",
    "slug": "sec",
    "district": "pv",
    "allPoints": [
      0,
      0,
      0,
      0
    ],
    "best_time": 23.98
  }
];

function processData() {
  const groupedByCategories: TeamsByCategory = {
    dorostenci: [],
    "starsi-zaci": [],
    "mladsi-zaci": [],
  };

  for (const rawTeam of rawData) {
    // count each value
    const countedValues = {} as Record<number, number>;
    for (const value of rawTeam.allPoints) {
      if (countedValues[value]) {
        countedValues[value]++;
      } else {
        countedValues[value] = 1;
      }
    }

    const bestTimeInMs = Math.floor(rawTeam.best_time * 1000);

    const team: Team = {
      teamId: rawTeam.team_id,
      teamUnitId: rawTeam.team_unit_id,
      name: rawTeam.name,
      slug: rawTeam.slug,
      group: rawTeam.group,
      district: rawTeam.district,
      sumOfPoints: rawTeam.allPoints.reduce((a, b) => a + b, 0),
      points: rawTeam.allPoints,
      countedValues: countedValues,
      bestTime: bestTimeInMs,
      positionInSeason: 0,
      timeFromEvent: {
        left: 0,
        right: 0,
      },
    };

    groupedByCategories[rawTeam.category as CategorySlug].push(team);
  }

  /* order each category */
  for (const key of Object.keys(groupedByCategories)) {
    const category = groupedByCategories[key as CategorySlug];

    category.sort((a, b) => {
      if (a.sumOfPoints > b.sumOfPoints) {
        return -1;
      } else if (a.sumOfPoints < b.sumOfPoints) {
        return 1;
      }

      // if points are equal, compare countedValues
      const aKeys = Object.keys(a.countedValues);
      const bKeys = Object.keys(b.countedValues);
      const minLength = Math.min(aKeys.length, bKeys.length);
      for (let i = 0; i < minLength; i++) {
        const aKey = aKeys[i];
        const bKey = bKeys[i];

        const aCount = a.countedValues[parseInt(aKey)];
        const bCount = b.countedValues[parseInt(bKey)];

        if (aCount > bCount) {
          return -1;
        } else if (aCount < bCount) {
          return 1;
        }
      }

      // if countedValues are equal, compare bestTime
      if (a.bestTime < b.bestTime) {
        return -1;
      } else if (a.bestTime > b.bestTime) {
        return 1;
      }

      return 0;
    });

    // set positionInSeason
    for (let i = 0; i < category.length; i++) {
      category[i].positionInSeason = i + 1;
    }

    groupedByCategories[key as CategorySlug] = category;
  }

  return groupedByCategories;
}

export const TeamData = processData();
