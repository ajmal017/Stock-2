const stocks = [
    {
        "symbol": "KMI",
        "name": "Kinder Morgan Inc.",
        "price": 22.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GE",
        "name": "General Electric Company",
        "price": 12.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BAC",
        "name": "Bank of America Corporation",
        "price": 34.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HPQ",
        "name": "HP Inc.",
        "price": 22.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CX",
        "name": "Cemex S.A.B. de C.V. Sponsored ADR",
        "price": 3.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "F",
        "name": "Ford Motor Company",
        "price": 8.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SNAP",
        "name": "Snap Inc. Class A",
        "price": 16.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WFC",
        "name": "Wells Fargo & Company",
        "price": 47.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AIG",
        "name": "American International Group Inc.",
        "price": 49.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "T",
        "name": "AT&T Inc.",
        "price": 38.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "C",
        "name": "Citigroup Inc.",
        "price": 78.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VALE",
        "name": "VALE S.A. American Depositary Shares Each Representing one",
        "price": 11.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MS",
        "name": "Morgan Stanley",
        "price": 53.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AKS",
        "name": "AK Steel Holding Corporation",
        "price": 2.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JPM",
        "name": "JP Morgan Chase & Co.",
        "price": 137.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ORCL",
        "name": "Oracle Corporation",
        "price": 55.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NKE",
        "name": "Nike Inc.",
        "price": 102.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PG",
        "name": "Procter & Gamble Company (The)",
        "price": 126.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HK",
        "name": "Halcon Resources Corporation",
        "price": 0.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BBD",
        "name": "Banco Bradesco Sa American Depositary Shares",
        "price": 7.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PFE",
        "name": "Pfizer Inc.",
        "price": 35.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NOK",
        "name": "Nokia Corporation Sponsored American Depositary Shares",
        "price": 4.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TWTR",
        "name": "Twitter Inc.",
        "price": 39.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WFT",
        "name": "Weatherford International plc (Ireland)",
        "price": 0.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DWDP",
        "name": "DowDuPont Inc.",
        "price": 30.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "XOM",
        "name": "Exxon Mobil Corporation",
        "price": 59.86,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VIPS",
        "name": "Vipshop Holdings Limited American Depositary Shares each representing two",
        "price": 13.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AXP",
        "name": "American Express Company",
        "price": 136.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BMY",
        "name": "Bristol-Myers Squibb Company",
        "price": 65.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "V",
        "name": "Visa Inc.",
        "price": 211.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WP",
        "name": "Worldpay Inc. Class A",
        "price": 124.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KEY",
        "name": "KeyCorp",
        "price": 20.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RF",
        "name": "Regions Financial Corporation",
        "price": 16.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KR",
        "name": "Kroger Company (The)",
        "price": 29.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HAL",
        "name": "Halliburton Company",
        "price": 21.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BABA",
        "name": "Alibaba Group Holding Limited",
        "price": 218.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MRO",
        "name": "Marathon Oil Corporation",
        "price": 10.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CLNS",
        "name": "Colony NorthStar Inc.",
        "price": 6.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GM",
        "name": "General Motors Company",
        "price": 35.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FCX",
        "name": "Freeport-McMoRan Inc.",
        "price": 12.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CRM",
        "name": "Salesforce.com Inc",
        "price": 193.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SQ",
        "name": "Square Inc. Class A",
        "price": 85.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "P",
        "name": "Pandora Media Inc.",
        "price": 8.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TWX",
        "name": "Time Warner Inc.",
        "price": 98.91,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NUE",
        "name": "Nucor Corporation",
        "price": 47.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SWN",
        "name": "Southwestern Energy Company",
        "price": 1.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LOW",
        "name": "Lowe's Companies Inc.",
        "price": 126.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RAD",
        "name": "Rite Aid Corporation",
        "price": 15.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "APC",
        "name": "Anadarko Petroleum Corporation",
        "price": 69.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ESV",
        "name": "Ensco plc Class A",
        "price": 7.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SLB",
        "name": "Schlumberger N.V.",
        "price": 33.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ABBV",
        "name": "AbbVie Inc.",
        "price": 94.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GIS",
        "name": "General Mills Inc.",
        "price": 54.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VZ",
        "name": "Verizon Communications Inc.",
        "price": 58.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "XRX",
        "name": "Xerox Corporation",
        "price": 36.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "X",
        "name": "United States Steel Corporation",
        "price": 9.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CTL",
        "name": "CenturyLink Inc.",
        "price": 13.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DVN",
        "name": "Devon Energy Corporation",
        "price": 22.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IBN",
        "name": "ICICI Bank Limited",
        "price": 15.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MPC",
        "name": "Marathon Petroleum Corporation",
        "price": 60.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PM",
        "name": "Philip Morris International Inc",
        "price": 87.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MSCI",
        "name": "MSCI Inc",
        "price": 321.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RDN",
        "name": "Radian Group Inc.",
        "price": 24.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KO",
        "name": "Coca-Cola Company (The)",
        "price": 59.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SRC",
        "name": "Spirit Realty Capital Inc.",
        "price": 54.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NFX",
        "name": "Newfield Exploration Company",
        "price": 17.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "COP",
        "name": "ConocoPhillips",
        "price": 58.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CHK",
        "name": "Chesapeake Energy Corporation",
        "price": 0.4786,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DIS",
        "name": "The Walt Disney Company",
        "price": 140.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LEN",
        "name": "Lennar Corporation Class A",
        "price": 71.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CVX",
        "name": "Chevron Corporation",
        "price": 109.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AUY",
        "name": "Yamana Gold Inc. (Canada)",
        "price": 4.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WMT",
        "name": "Walmart Inc.",
        "price": 117.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CLF",
        "name": "Cleveland-Cliffs Inc.",
        "price": 7.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MRK",
        "name": "Merck & Company Inc. (new)",
        "price": 82.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RSPP",
        "name": "RSP Permian Inc.",
        "price": 47.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GG",
        "name": "Goldcorp Inc.",
        "price": 11.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MGM",
        "name": "MGM Resorts International",
        "price": 32.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GFI",
        "name": "Gold Fields Limited American Depositary Shares",
        "price": 6.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KGC",
        "name": "Kinross Gold Corporation",
        "price": 5.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SCHW",
        "name": "Charles Schwab Corporation (The)",
        "price": 48.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NBR",
        "name": "Nabors Industries Ltd.",
        "price": 2.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JAG",
        "name": "Jagged Peak Energy Inc.",
        "price": 8.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JNJ",
        "name": "Johnson & Johnson",
        "price": 148.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BSX",
        "name": "Boston Scientific Corporation",
        "price": 42.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STI",
        "name": "SunTrust Banks Inc.",
        "price": 70.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ITUB",
        "name": "Itau Unibanco Banco Holding SA American Depositary Shares (Each repstg 500 Preferred shares)",
        "price": 7.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BK",
        "name": "Bank of New York Mellon Corporation (The)",
        "price": 45.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HMY",
        "name": "Harmony Gold Mining Company Limited",
        "price": 3.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "APA",
        "name": "Apache Corporation",
        "price": 28.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HOME",
        "name": "At Home Group Inc.",
        "price": 7.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KOS",
        "name": "Kosmos Energy Ltd.",
        "price": 5.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DAL",
        "name": "Delta Air Lines Inc.",
        "price": 58.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "INFY",
        "name": "Infosys Limited American Depositary Shares",
        "price": 11.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CCL",
        "name": "Carnival Corporation",
        "price": 42.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BHGE",
        "name": "Baker Hughes a GE company Class A",
        "price": 25.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MFGP",
        "name": "Micro Focus Intl PLC ADS each representing One Ord Sh",
        "price": 10.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PBR",
        "name": "Petroleo Brasileiro S.A.- Petrobras",
        "price": 14.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LPI",
        "name": "Laredo Petroleum Inc.",
        "price": 1.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ABT",
        "name": "Abbott Laboratories",
        "price": 88.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "USB",
        "name": "U.S. Bancorp",
        "price": 54.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BA",
        "name": "The Boeing Company",
        "price": 336.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GGB",
        "name": "Gerdau S.A.",
        "price": 4.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "QEP",
        "name": "QEP Resources Inc.",
        "price": 2.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DB",
        "name": "Deutsche Bank AG",
        "price": 10.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ABX",
        "name": "Barrick Gold Corporation",
        "price": 13.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ETP",
        "name": "Energy Transfer Partners L.P. representing limited partner interests",
        "price": 21.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KNX",
        "name": "Knight-Swift Transportation Holdings Inc.",
        "price": 39.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KBH",
        "name": "KB Home",
        "price": 40.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PGR",
        "name": "Progressive Corporation (The)",
        "price": 80.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MO",
        "name": "Altria Group Inc.",
        "price": 45.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MDT",
        "name": "Medtronic plc.",
        "price": 113.86,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RIG",
        "name": "Transocean Ltd (Switzerland)",
        "price": 4.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BCS",
        "name": "Barclays PLC",
        "price": 9.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DNR",
        "name": "Denbury Resources Inc.",
        "price": 0.9542,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EOG",
        "name": "EOG Resources Inc.",
        "price": 75.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HPE",
        "name": "Hewlett Packard Enterprise Company",
        "price": 14.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OAS",
        "name": "Oasis Petroleum Inc.",
        "price": 2.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OKE",
        "name": "ONEOK Inc.",
        "price": 77.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CVS",
        "name": "CVS Health Corporation",
        "price": 71.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HES",
        "name": "Hess Corporation",
        "price": 64.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GDDY",
        "name": "GoDaddy Inc. Class A",
        "price": 77.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BX",
        "name": "The Blackstone Group L.P. Representing Limited Partnership Interests",
        "price": 62.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NLSN",
        "name": "Nielsen N.V.",
        "price": 22.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TS",
        "name": "Tenaris S.A. American Depositary Shares",
        "price": 21.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BOX",
        "name": "Box Inc. Class A",
        "price": 16.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OXY",
        "name": "Occidental Petroleum Corporation",
        "price": 42.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CVE",
        "name": "Cenovus Energy Inc",
        "price": 9.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SYF",
        "name": "Synchrony Financial",
        "price": 33.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MTG",
        "name": "MGIC Investment Corporation",
        "price": 13.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LUV",
        "name": "Southwest Airlines Company",
        "price": 56.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FTI",
        "name": "TechnipFMC plc",
        "price": 17.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AA",
        "name": "Alcoa Corporation",
        "price": 16.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ABEV",
        "name": "Ambev S.A. American Depositary Shares (Each representing 1)",
        "price": 3.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EQR",
        "name": "Equity Residential of Beneficial Interest",
        "price": 86.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MDR",
        "name": "McDermott International Inc.",
        "price": 0.7032,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ANDV",
        "name": "Andeavor",
        "price": 152.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TAL",
        "name": "TAL Education Group American Depositary Shares",
        "price": 58.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UNH",
        "name": "UnitedHealth Group Incorporated (DE)",
        "price": 302.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ECA",
        "name": "Encana Corporation",
        "price": 3.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GES",
        "name": "Guess? Inc.",
        "price": 21.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CNC",
        "name": "Centene Corporation",
        "price": 65.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CLDR",
        "name": "Cloudera Inc.",
        "price": 11.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RES",
        "name": "RPC Inc.",
        "price": 4.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CI",
        "name": "Cigna Corporation",
        "price": 220.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WMB",
        "name": "Williams Companies Inc. (The)",
        "price": 22.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HBI",
        "name": "Hanesbrands Inc.",
        "price": 14.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BBT",
        "name": "BB&T Corporation",
        "price": 54.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "XL",
        "name": "XL Group Ltd.",
        "price": 57.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "D",
        "name": "Dominion Energy Inc.",
        "price": 89.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CHS",
        "name": "Chico's FAS Inc.",
        "price": 4.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CFG",
        "name": "Citizens Financial Group Inc.",
        "price": 38.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SU",
        "name": "Suncor Energy Inc.",
        "price": 30.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MMM",
        "name": "3M Company",
        "price": 158.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JBL",
        "name": "Jabil Inc.",
        "price": 38.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ACN",
        "name": "Accenture plc Class A (Ireland)",
        "price": 213.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NTR",
        "name": "Nutrien Ltd.",
        "price": 43.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PAH",
        "name": "Platform Specialty Products Corporation",
        "price": 11.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BRFS",
        "name": "BRF S.A.",
        "price": 6.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PE",
        "name": "Parsley Energy Inc. Class A",
        "price": 17.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LVS",
        "name": "Las Vegas Sands Corp.",
        "price": 67.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EGO",
        "name": "Eldorado Gold Corporation",
        "price": 7.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GSK",
        "name": "GlaxoSmithKline PLC",
        "price": 42.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TEVA",
        "name": "Teva Pharmaceutical Industries Limited American Depositary Shares",
        "price": 13.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PAA",
        "name": "Plains All American Pipeline L.P.",
        "price": 16.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VLO",
        "name": "Valero Energy Corporation",
        "price": 84.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CSRA",
        "name": "CSRA Inc.",
        "price": 41.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IMAX",
        "name": "Imax Corporation",
        "price": 17.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FNB",
        "name": "F.N.B. Corporation",
        "price": 11.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HD",
        "name": "Home Depot Inc. (The)",
        "price": 247.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AR",
        "name": "Antero Resources Corporation",
        "price": 1.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ARNC",
        "name": "Arconic Inc.",
        "price": 33.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VOYA",
        "name": "Voya Financial Inc.",
        "price": 63.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SM",
        "name": "SM Energy Company",
        "price": 8.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DHI",
        "name": "D.R. Horton Inc.",
        "price": 62.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UAL",
        "name": "United Continental Holdings",
        "price": 79.91,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HRB",
        "name": "H&R Block Inc.",
        "price": 23.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BTU",
        "name": "Peabody Energy Corporation",
        "price": 7.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JBGS",
        "name": "JBG SMITH Properties",
        "price": 42.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IPG",
        "name": "Interpublic Group of Companies Inc. (The)",
        "price": 24.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DE",
        "name": "Deere & Company",
        "price": 165.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "COG",
        "name": "Cabot Oil & Gas Corporation",
        "price": 15.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IBM",
        "name": "International Business Machines Corporation",
        "price": 151.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WTW",
        "name": "Weight Watchers International Inc",
        "price": 19.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NYT",
        "name": "New York Times Company (The)",
        "price": 39.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OLN",
        "name": "Olin Corporation",
        "price": 18.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JCI",
        "name": "Johnson Controls International plc",
        "price": 42.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VICI",
        "name": "VICI Properties Inc.",
        "price": 28.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VST",
        "name": "Vistra Energy Corp.",
        "price": 22.91,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NWL",
        "name": "Newell Brands Inc.",
        "price": 19.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EPD",
        "name": "Enterprise Products Partners L.P.",
        "price": 26.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KMB",
        "name": "Kimberly-Clark Corporation",
        "price": 142.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AEP",
        "name": "American Electric Power Company Inc.",
        "price": 102.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IT",
        "name": "Gartner Inc.",
        "price": 154.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CAT",
        "name": "Caterpillar Inc.",
        "price": 136.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AU",
        "name": "AngloGold Ashanti Limited",
        "price": 20.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KKR",
        "name": "KKR & Co. L.P. Representing Limited Partnership Interest",
        "price": 33.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CMC",
        "name": "Commercial Metals Company",
        "price": 20.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JCP",
        "name": "J.C. Penney Company Inc. Holding Company",
        "price": 0.7693,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RMP",
        "name": "Rice Midstream Partners LP representing limited partner interests",
        "price": 18.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NRG",
        "name": "NRG Energy Inc.",
        "price": 39.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CPB",
        "name": "Campbell Soup Company",
        "price": 47.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ATHM",
        "name": "Autohome Inc. American Depositary Shares each representing one class A.",
        "price": 85.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WRB",
        "name": "W.R. Berkley Corporation",
        "price": 78.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TGT",
        "name": "Target Corporation",
        "price": 118.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TV",
        "name": "Grupo Televisa S.A.",
        "price": 11.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GLW",
        "name": "Corning Incorporated",
        "price": 28.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MAS",
        "name": "Masco Corporation",
        "price": 45.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DOV",
        "name": "Dover Corporation",
        "price": 119.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HRL",
        "name": "Hormel Foods Corporation",
        "price": 45.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "S",
        "name": "Sprint Corporation",
        "price": 9.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TECK",
        "name": "Teck Resources Ltd",
        "price": 12.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AES",
        "name": "The AES Corporation",
        "price": 20.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PPL",
        "name": "PPL Corporation",
        "price": 35.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SEE",
        "name": "Sealed Air Corporation",
        "price": 34.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NLY",
        "name": "Annaly Capital Management Inc",
        "price": 10.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FRC",
        "name": "FIRST REPUBLIC BANK",
        "price": 117.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "K",
        "name": "Kellogg Company",
        "price": 65.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RTN",
        "name": "Raytheon Company",
        "price": 220.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "M",
        "name": "Macy's Inc",
        "price": 16.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TSM",
        "name": "Taiwan Semiconductor Manufacturing Company Ltd.",
        "price": 56.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STL",
        "name": "Sterling Bancorp",
        "price": 19.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NYCB",
        "name": "New York Community Bancorp Inc.",
        "price": 11.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TRQ",
        "name": "Turquoise Hill Resources Ltd.",
        "price": 0.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NBL",
        "name": "Noble Energy Inc.",
        "price": 18.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FDC",
        "name": "First Data Corporation Class A",
        "price": 26.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BAH",
        "name": "Booz Allen Hamilton Holding Corporation",
        "price": 74.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ARI",
        "name": "Apollo Commercial Real Estate Finance Inc",
        "price": 18.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MET",
        "name": "MetLife Inc.",
        "price": 52.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AFL",
        "name": "AFLAC Incorporated",
        "price": 51.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TPR",
        "name": "Tapestry Inc.",
        "price": 28.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WPM",
        "name": "Wheaton Precious Metals Corp (Canada)",
        "price": 32.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LNT",
        "name": "Alliant Energy Corporation",
        "price": 59.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UTX",
        "name": "United Technologies Corporation",
        "price": 149.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WLL",
        "name": "Whiting Petroleum Corporation",
        "price": 2.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PCG",
        "name": "Pacific Gas & Electric Co.",
        "price": 17.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CLR",
        "name": "Continental Resources Inc.",
        "price": 25.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FCAU",
        "name": "Fiat Chrysler Automobiles N.V.",
        "price": 13.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HL",
        "name": "Hecla Mining Company",
        "price": 3.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UAA",
        "name": "Under Armour Inc. Class A",
        "price": 16.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CAG",
        "name": "ConAgra Brands Inc.",
        "price": 29.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SO",
        "name": "Southern Company (The)",
        "price": 69.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ETE",
        "name": "Energy Transfer Equity L.P. representing Limited Partnership interests",
        "price": 16.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GKOS",
        "name": "Glaukos Corporation",
        "price": 65.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CCI",
        "name": "Crown Castle International Corp. (REIT)",
        "price": 166.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ZTO",
        "name": "ZTO Express (Cayman) Inc. American Depositary Shares each representing one Class A.",
        "price": 25.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GS",
        "name": "Goldman Sachs Group Inc. (The)",
        "price": 232.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ZAYO",
        "name": "Zayo Group Holdings Inc.",
        "price": 35.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ADT",
        "name": "ADT Inc.",
        "price": 7.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GGP",
        "name": "GGP Inc.",
        "price": 22.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EMR",
        "name": "Emerson Electric Company",
        "price": 72.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CNP",
        "name": "CenterPoint Energy Inc (Holding Co)",
        "price": 25.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "COTY",
        "name": "Coty Inc. Class A",
        "price": 11.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MA",
        "name": "Mastercard Incorporated",
        "price": 344.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AWI",
        "name": "Armstrong World Industries Inc",
        "price": 106.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MULE",
        "name": "MuleSoft Inc. Class A",
        "price": 44.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BBVA",
        "name": "Banco Bilbao Vizcaya Argentaria S.A.",
        "price": 5.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AER",
        "name": "Aercap Holdings N.V.",
        "price": 62.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GTN",
        "name": "Gray Communications Systems Inc.",
        "price": 21.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CDE",
        "name": "Coeur Mining Inc.",
        "price": 6.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NCR",
        "name": "NCR Corporation",
        "price": 31.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AMT",
        "name": "American Tower Corporation (REIT)",
        "price": 247.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PSTG",
        "name": "Pure Storage Inc. Class A",
        "price": 18.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VRX",
        "name": "Valeant Pharmaceuticals International Inc.",
        "price": 23.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SJM",
        "name": "J.M. Smucker Company (The)",
        "price": 110.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ETN",
        "name": "Eaton Corporation PLC",
        "price": 105.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DUK",
        "name": "Duke Energy Corporation (Holding Company)",
        "price": 101.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CL",
        "name": "Colgate-Palmolive Company",
        "price": 75.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KAR",
        "name": "KAR Auction Services Inc",
        "price": 23.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NEE",
        "name": "NextEra Energy Inc.",
        "price": 277.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PXD",
        "name": "Pioneer Natural Resources Company",
        "price": 142.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WPX",
        "name": "WPX Energy Inc.",
        "price": 12.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ADM",
        "name": "Archer-Daniels-Midland Company",
        "price": 44.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VTR",
        "name": "Ventas Inc.",
        "price": 62.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VMW",
        "name": "Vmware Inc. Class A",
        "price": 162.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DKS",
        "name": "Dick's Sporting Goods Inc",
        "price": 43.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FG",
        "name": "FGL Holdings",
        "price": 12.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WTI",
        "name": "W&T Offshore Inc.",
        "price": 3.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CE",
        "name": "Celanese Corporation Series A",
        "price": 108.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HUN",
        "name": "Huntsman Corporation",
        "price": 21.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CSTM",
        "name": "Constellium N.V.",
        "price": 14.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VER",
        "name": "VEREIT Inc.",
        "price": 10.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GPK",
        "name": "Graphic Packaging Holding Company",
        "price": 15.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WELL",
        "name": "Welltower Inc.",
        "price": 88.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TJX",
        "name": "TJX Companies Inc. (The)",
        "price": 63.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PLD",
        "name": "ProLogis Inc.",
        "price": 98.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KSS",
        "name": "Kohl's Corporation",
        "price": 44.77,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "XEC",
        "name": "Cimarex Energy Co",
        "price": 43.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DRI",
        "name": "Darden Restaurants Inc.",
        "price": 120.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ATI",
        "name": "Allegheny Technologies Incorporated",
        "price": 20.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IAG",
        "name": "Iamgold Corporation",
        "price": 2.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VFC",
        "name": "V.F. Corporation",
        "price": 83.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BDN",
        "name": "Brandywine Realty Trust",
        "price": 15.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HON",
        "name": "Honeywell International Inc.",
        "price": 180.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "USG",
        "name": "USG Corporation",
        "price": 43.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ICE",
        "name": "Intercontinental Exchange Inc.",
        "price": 95.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WY",
        "name": "Weyerhaeuser Company",
        "price": 30.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BLL",
        "name": "Ball Corporation",
        "price": 76.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IVZ",
        "name": "Invesco Ltd",
        "price": 18.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DG",
        "name": "Dollar General Corporation",
        "price": 165.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SID",
        "name": "Companhia Siderurgica Nacional S.A.",
        "price": 2.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SLCA",
        "name": "U.S. Silica Holdings Inc.",
        "price": 6.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HCP",
        "name": "HCP Inc.",
        "price": 31.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PF",
        "name": "Pinnacle Foods Inc.",
        "price": 66.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SGU",
        "name": "Star Group L.P.",
        "price": 8.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PK",
        "name": "Park Hotels & Resorts Inc.",
        "price": 23.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TOL",
        "name": "Toll Brothers Inc.",
        "price": 48.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BCO",
        "name": "Brinks Company (The)",
        "price": 84.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BKD",
        "name": "Brookdale Senior Living Inc.",
        "price": 8.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JMEI",
        "name": "Jumei International Holding Limited American Depositary Shares each representing one Class A",
        "price": 16.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AIV",
        "name": "Apartment Investment and Management Company",
        "price": 55.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DPS",
        "name": "Dr Pepper Snapple Group Inc",
        "price": 123.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EXC",
        "name": "Exelon Corporation",
        "price": 49.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TAP",
        "name": "Molson Coors Brewing Company Class B",
        "price": 55.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MON",
        "name": "Monsanto Company",
        "price": 127.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UNP",
        "name": "Union Pacific Corporation",
        "price": 183.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BDX",
        "name": "Becton Dickinson and Company",
        "price": 253.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GME",
        "name": "Gamestop Corporation",
        "price": 4.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MX",
        "name": "MagnaChip Semiconductor Corporation",
        "price": 15.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RLJ",
        "name": "RLJ Lodging Trust of Beneficial Interest $0.01 par value",
        "price": 16.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LB",
        "name": "L Brands Inc.",
        "price": 23.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TIF",
        "name": "Tiffany & Co.",
        "price": 134.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DLPH",
        "name": "Delphi Technologies PLC",
        "price": 15.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NCLH",
        "name": "Norwegian Cruise Line Holdings Ltd.",
        "price": 48.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NOV",
        "name": "National Oilwell Varco Inc.",
        "price": 23.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CNDT",
        "name": "Conduent Incorporated",
        "price": 4.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LMT",
        "name": "Lockheed Martin Corporation",
        "price": 425.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MTZ",
        "name": "MasTec Inc.",
        "price": 61.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GPS",
        "name": "Gap Inc. (The)",
        "price": 17.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SYY",
        "name": "Sysco Corporation",
        "price": 76.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WDR",
        "name": "Waddell & Reed Financial Inc.",
        "price": 16.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FTV",
        "name": "Fortive Corporation",
        "price": 76.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BKI",
        "name": "Black Knight Inc.",
        "price": 75.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EIX",
        "name": "Edison International",
        "price": 77.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CPE",
        "name": "Callon Petroleum Company",
        "price": 3.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CF",
        "name": "CF Industries Holdings Inc.",
        "price": 39.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PNC",
        "name": "PNC Financial Services Group Inc. (The)",
        "price": 154.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WIT",
        "name": "Wipro Limited",
        "price": 3.82,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LYB",
        "name": "LyondellBasell Industries NV Class A (Netherlands)",
        "price": 83.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NE",
        "name": "Noble Corporation (UK)",
        "price": 0.9044,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MGA",
        "name": "Magna International Inc.",
        "price": 52.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AEO",
        "name": "American Eagle Outfitters Inc.",
        "price": 14.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BP",
        "name": "BP p.l.c.",
        "price": 35.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VVV",
        "name": "Valvoline Inc.",
        "price": 22.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DDR",
        "name": "DDR Corp.",
        "price": 11.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UPS",
        "name": "United Parcel Service Inc.",
        "price": 106.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MUR",
        "name": "Murphy Oil Corporation",
        "price": 22.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OMAM",
        "name": "OM Asset Management plc",
        "price": 15.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VMC",
        "name": "Vulcan Materials Company (Holding Company)",
        "price": 135.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NOMD",
        "name": "Nomad Foods Limited",
        "price": 20.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ANTM",
        "name": "Anthem Inc.",
        "price": 293.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PAY",
        "name": "Verifone Systems Inc.",
        "price": 23.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CCE",
        "name": "Coca-Cola European Partners plc",
        "price": 46.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GD",
        "name": "General Dynamics Corporation",
        "price": 185.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KIM",
        "name": "Kimco Realty Corporation",
        "price": 18.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FNF",
        "name": "FNF Group of Fidelity National Financial Inc.",
        "price": 44.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BXMT",
        "name": "Blackstone Mortgage Trust Inc.",
        "price": 40.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CHD",
        "name": "Church & Dwight Company Inc.",
        "price": 76.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DLR",
        "name": "Digital Realty Trust Inc.",
        "price": 136.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IP",
        "name": "International Paper Company",
        "price": 42.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CLI",
        "name": "Mack-Cali Realty Corporation",
        "price": 21.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SE",
        "name": "Sea Limited American Depositary Shares each representing one Class A",
        "price": 52.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CC",
        "name": "Chemours Company (The)",
        "price": 19.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DAN",
        "name": "Dana Incorporated",
        "price": 17.77,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ZBH",
        "name": "Zimmer Biomet Holdings Inc.",
        "price": 158.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LPX",
        "name": "Louisiana-Pacific Corporation",
        "price": 33.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BBY",
        "name": "Best Buy Co. Inc.",
        "price": 91.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GRUB",
        "name": "GrubHub Inc.",
        "price": 58.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BG",
        "name": "Bunge Limited",
        "price": 53.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LC",
        "name": "LendingClub Corporation",
        "price": 13.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PWR",
        "name": "Quanta Services Inc.",
        "price": 39.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RDC",
        "name": "Rowan Companies plc Class A",
        "price": 10.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NEM",
        "name": "Newmont Mining Corporation",
        "price": 48.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BEN",
        "name": "Franklin Resources Inc.",
        "price": 25.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LUK",
        "name": "Leucadia National Corporation",
        "price": 23.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SHLX",
        "name": "Shell Midstream Partners L.P. representing Limited Partner Interests",
        "price": 18.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CIVI",
        "name": "Civitas Solutions Inc.",
        "price": 17.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AET",
        "name": "Aetna Inc.",
        "price": 212.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PBH",
        "name": "Prestige Brand Holdings Inc.",
        "price": 42.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SBH",
        "name": "Sally Beauty Holdings Inc. (Name to be changed from Holdings Inc.)",
        "price": 13.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SEP",
        "name": "Spectra Energy Partners LP representing Limited Partner Interests",
        "price": 35.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NI",
        "name": "NiSource Inc",
        "price": 30.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LLY",
        "name": "Eli Lilly and Company",
        "price": 142.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STNG",
        "name": "Scorpio Tankers Inc.",
        "price": 21.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LADR",
        "name": "Ladder Capital Corp Class A",
        "price": 18.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FHN",
        "name": "First Horizon National Corporation",
        "price": 16.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DVMT",
        "name": "Dell Technologies Inc. Class V",
        "price": 79.77,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CXO",
        "name": "Concho Resources Inc.",
        "price": 81.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HLX",
        "name": "Helix Energy Solutions Group Inc.",
        "price": 8.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RSG",
        "name": "Republic Services Inc.",
        "price": 99.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BIG",
        "name": "Big Lots Inc.",
        "price": 25.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CYH",
        "name": "Community Health Systems Inc.",
        "price": 6.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PAYC",
        "name": "Paycom Software Inc.",
        "price": 310.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GCP",
        "name": "GCP Applied Technologies Inc.",
        "price": 22.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "YUM",
        "name": "Yum! Brands Inc.",
        "price": 103.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STZ",
        "name": "Constellation Brands Inc.",
        "price": 208.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LYG",
        "name": "Lloyds Banking Group Plc American Depositary Shares",
        "price": 2.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "USFD",
        "name": "US Foods Holding Corp.",
        "price": 39.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "THC",
        "name": "Tenet Healthcare Corporation",
        "price": 32.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DOC",
        "name": "Physicians Realty Trust of Beneficial Interest",
        "price": 20.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ALLY",
        "name": "Ally Financial Inc.",
        "price": 29.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AVP",
        "name": "Avon Products Inc.",
        "price": 5.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EVR",
        "name": "Evercore Inc. Class A",
        "price": 81.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CMS",
        "name": "CMS Energy Corporation",
        "price": 68.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RIO",
        "name": "Rio Tinto Plc",
        "price": 54.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PDM",
        "name": "Piedmont Office Realty Trust Inc. Class A",
        "price": 24.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KMT",
        "name": "Kennametal Inc.",
        "price": 31.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HP",
        "name": "Helmerich & Payne Inc.",
        "price": 45.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FLR",
        "name": "Fluor Corporation",
        "price": 14.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BFR",
        "name": "BBVA Banco Frances S.A.",
        "price": 11.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JHG",
        "name": "Janus Henderson Group plc",
        "price": 26.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FDX",
        "name": "FedEx Corporation",
        "price": 164.91,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EMN",
        "name": "Eastman Chemical Company",
        "price": 74.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WU",
        "name": "Western Union Company (The)",
        "price": 26.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BAX",
        "name": "Baxter International Inc.",
        "price": 93.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CARS",
        "name": "Cars.com Inc.",
        "price": 11.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TEL",
        "name": "TE Connectivity Ltd. New Switzerland Registered Shares",
        "price": 92.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MLM",
        "name": "Martin Marietta Materials Inc.",
        "price": 258.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GWW",
        "name": "W.W. Grainger Inc.",
        "price": 310.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PBF",
        "name": "PBF Energy Inc. Class A",
        "price": 28.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AGN",
        "name": "Allergan plc",
        "price": 198.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BW",
        "name": "Babcock & Wilcox Enterprises Inc.",
        "price": 4.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CMI",
        "name": "Cummins Inc.",
        "price": 167.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CNQ",
        "name": "Canadian Natural Resources Limited",
        "price": 30.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HCA",
        "name": "HCA Healthcare Inc.",
        "price": 148.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "INXN",
        "name": "InterXion Holding N.V. (0.01 nominal value)",
        "price": 95.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "QTS",
        "name": "QTS Realty Trust Inc. Class A",
        "price": 63.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SAN",
        "name": "Banco Santander S.A. Sponsored ADR (Spain)",
        "price": 4.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CNHI",
        "name": "CNH Industrial N.V.",
        "price": 9.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CNX",
        "name": "CNX Resources Corporation",
        "price": 6.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ES",
        "name": "Eversource Energy (D\/B\/A)",
        "price": 95.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ARMK",
        "name": "Aramark",
        "price": 42.86,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OII",
        "name": "Oceaneering International Inc.",
        "price": 13.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NOW",
        "name": "ServiceNow Inc.",
        "price": 352.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "APTV",
        "name": "Aptiv PLC",
        "price": 91.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "QD",
        "name": "Qudian Inc. American Depositary Shares each representing one Class A",
        "price": 2.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NSC",
        "name": "Norfolk Southern Corporation",
        "price": 210.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PSX",
        "name": "Phillips 66",
        "price": 90.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GAB",
        "name": "Gabelli Equity Trust Inc. (The)",
        "price": 6.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CS",
        "name": "Credit Suisse Group American Depositary Shares",
        "price": 13.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PNW",
        "name": "Pinnacle West Capital Corporation",
        "price": 101.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AMH",
        "name": "American Homes 4 Rent of Beneficial Interest",
        "price": 29.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FOE",
        "name": "Ferro Corporation",
        "price": 14.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "A",
        "name": "Agilent Technologies Inc.",
        "price": 84.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MOS",
        "name": "Mosaic Company (The)",
        "price": 18.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CTB",
        "name": "Cooper Tire & Rubber Company",
        "price": 27.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LPL",
        "name": "LG Display Co Ltd AMERICAN DEPOSITORY SHARES",
        "price": 6.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SKX",
        "name": "Skechers U.S.A. Inc.",
        "price": 38.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HST",
        "name": "Host Hotels & Resorts Inc.",
        "price": 17.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UE",
        "name": "Urban Edge Properties of Beneficial Interest",
        "price": 18.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PHM",
        "name": "PulteGroup Inc.",
        "price": 46.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MT",
        "name": "Arcelor Mittal NY Registry Shares NEW",
        "price": 16.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CAAP",
        "name": "Corporacion America Airports SA",
        "price": 5.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WRE",
        "name": "Washington Real Estate Investment Trust",
        "price": 31.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RRC",
        "name": "Range Resources Corporation",
        "price": 3.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FL",
        "name": "Foot Locker Inc.",
        "price": 40.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AGO",
        "name": "Assured Guaranty Ltd.",
        "price": 46.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DRE",
        "name": "Duke Realty Corporation",
        "price": 38.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CCJ",
        "name": "Cameco Corporation",
        "price": 9.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AXTA",
        "name": "Axalta Coating Systems Ltd.",
        "price": 29.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AEM",
        "name": "Agnico Eagle Mines Limited",
        "price": 51.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BB",
        "name": "BlackBerry Limited",
        "price": 6.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CB",
        "name": "Chubb Limited",
        "price": 163.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PRU",
        "name": "Prudential Financial Inc.",
        "price": 93.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MNK",
        "name": "Mallinckrodt plc",
        "price": 5.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PVG",
        "name": "Pretium Resources Inc. (Canada)",
        "price": 7.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AVYA",
        "name": "Avaya Holdings Corp.",
        "price": 14.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SC",
        "name": "Santander Consumer USA Holdings Inc.",
        "price": 26.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ANF",
        "name": "Abercrombie & Fitch Company",
        "price": 17.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HIG",
        "name": "Hartford Financial Services Group Inc. (The)",
        "price": 58.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ITW",
        "name": "Illinois Tool Works Inc.",
        "price": 190.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AZN",
        "name": "Astrazeneca PLC",
        "price": 48.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "YELP",
        "name": "Yelp Inc.",
        "price": 34.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MTOR",
        "name": "Meritor Inc.",
        "price": 25.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EVC",
        "name": "Entravision Communications Corporation",
        "price": 2.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IRM",
        "name": "Iron Mountain Incorporated (Delaware)Common Stock REIT",
        "price": 34.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NWY",
        "name": "New York & Company Inc.",
        "price": 3.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "POST",
        "name": "Post Holdings Inc.",
        "price": 105.91,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EL",
        "name": "Estee Lauder Companies Inc. (The)",
        "price": 211.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ING",
        "name": "ING Group N.V.",
        "price": 10.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UBS",
        "name": "UBS Group AG Registered",
        "price": 13.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KRG",
        "name": "Kite Realty Group Trust",
        "price": 17.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VSH",
        "name": "Vishay Intertechnology Inc.",
        "price": 20.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TER",
        "name": "Teradyne Inc.",
        "price": 67.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LHO",
        "name": "LaSalle Hotel Properties",
        "price": 32.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TWLO",
        "name": "Twilio Inc. Class A",
        "price": 126.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RLGY",
        "name": "Realogy Holdings Corp.",
        "price": 13.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HPP",
        "name": "Hudson Pacific Properties Inc.",
        "price": 38.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CNO",
        "name": "CNO Financial Group Inc.",
        "price": 19.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JNPR",
        "name": "Juniper Networks Inc.",
        "price": 24.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FEDU",
        "name": "Four Seasons Education (Cayman) Inc. American Depositary Shares each two ADSs representing one",
        "price": 1.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ETM",
        "name": "Entercom Communications Corporation",
        "price": 4.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BANC",
        "name": "Banc of California Inc.",
        "price": 17.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "INVH",
        "name": "Invitation Homes Inc.",
        "price": 31.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OMF",
        "name": "OneMain Holdings Inc.",
        "price": 48.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LW",
        "name": "Lamb Weston Holdings Inc.",
        "price": 94.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NHI",
        "name": "National Health Investors Inc.",
        "price": 90.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CBL",
        "name": "CBL & Associates Properties Inc.",
        "price": 0.5468,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FE",
        "name": "FirstEnergy Corporation",
        "price": 51.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NOC",
        "name": "Northrop Grumman Corporation",
        "price": 363.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ASH",
        "name": "Ashland Global Holdings Inc.",
        "price": 80.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "O",
        "name": "Realty Income Corporation",
        "price": 81.91,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TAHO",
        "name": "Tahoe Resources Inc. (Canada)",
        "price": 3.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FET",
        "name": "Forum Energy Technologies Inc.",
        "price": 1.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TPH",
        "name": "TRI Pointe Group Inc.",
        "price": 18.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AMX",
        "name": "America Movil S.A.B. de C.V.n Depository Receipt Series L",
        "price": 17.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FLO",
        "name": "Flowers Foods Inc.",
        "price": 22.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SPN",
        "name": "Superior Energy Services Inc.",
        "price": 5.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SHO",
        "name": "Sunstone Hotel Investors Inc.",
        "price": 13.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "COF",
        "name": "Capital One Financial Corporation",
        "price": 103.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FLT",
        "name": "FleetCor Technologies Inc.",
        "price": 317.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IGT",
        "name": "International Game Technology",
        "price": 14.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HRG",
        "name": "HRG Group Inc.",
        "price": 13.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SN",
        "name": "Sanchez Energy Corporation",
        "price": 0.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RXN",
        "name": "Rexnord Corporation",
        "price": 35.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OSK",
        "name": "Oshkosh Corporation (Holding Company)Common Stock",
        "price": 84.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DHR",
        "name": "Danaher Corporation",
        "price": 160.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EVHC",
        "name": "Envision Healthcare Corporation",
        "price": 45.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AMN",
        "name": "AMN Healthcare Services Inc",
        "price": 74.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RCL",
        "name": "Royal Caribbean Cruises Ltd.",
        "price": 109.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "W",
        "name": "Wayfair Inc. Class A",
        "price": 82.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IR",
        "name": "Ingersoll-Rand plc (Ireland)",
        "price": 146.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PEG",
        "name": "Public Service Enterprise Group Incorporated",
        "price": 59.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FBP",
        "name": "First BanCorp.",
        "price": 9.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WEC",
        "name": "WEC Energy Group Inc.",
        "price": 102.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MDC",
        "name": "M.D.C. Holdings Inc.",
        "price": 45.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TISI",
        "name": "Team Inc.",
        "price": 13.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "YUMC",
        "name": "Yum China Holdings Inc.",
        "price": 46.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ALV",
        "name": "Autoliv Inc.",
        "price": 75.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BHP",
        "name": "BHP Billiton Limited",
        "price": 50.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BXP",
        "name": "Boston Properties Inc.",
        "price": 146.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BYD",
        "name": "Boyd Gaming Corporation",
        "price": 34.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WGO",
        "name": "Winnebago Industries Inc.",
        "price": 62.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KSU",
        "name": "Kansas City Southern",
        "price": 175.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PUMP",
        "name": "ProPetro Holding Corp.",
        "price": 10.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GLOG",
        "name": "GasLog Ltd.",
        "price": 6.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FBHS",
        "name": "Fortune Brands Home & Security Inc.",
        "price": 72.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TXT",
        "name": "Textron Inc.",
        "price": 47.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TVPT",
        "name": "Travelport Worldwide Limited",
        "price": 15.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AGI",
        "name": "Alamos Gold Inc. Class A",
        "price": 6.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ED",
        "name": "Consolidated Edison Inc.",
        "price": 94.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GNC",
        "name": "GNC Holdings Inc. Class A",
        "price": 2.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OUT",
        "name": "OUTFRONT Media Inc.",
        "price": 30.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DBD",
        "name": "Diebold Nixdorf Incorporated",
        "price": 8.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CBT",
        "name": "Cabot Corporation",
        "price": 43.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STOR",
        "name": "STORE Capital Corporation",
        "price": 37.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FBR",
        "name": "Fibria Celulose S.A.",
        "price": 17.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ABB",
        "name": "ABB Ltd",
        "price": 24.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CP",
        "name": "Canadian Pacific Railway Limited",
        "price": 270.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PNR",
        "name": "Pentair plc.",
        "price": 44.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PKI",
        "name": "PerkinElmer Inc.",
        "price": 93.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ASB",
        "name": "Associated Banc-Corp",
        "price": 20.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UHS",
        "name": "Universal Health Services Inc.",
        "price": 140.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ENB",
        "name": "Enbridge Inc",
        "price": 41.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TDC",
        "name": "Teradata Corporation",
        "price": 22.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AG",
        "name": "First Majestic Silver Corp. (Canada)",
        "price": 9.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NAT",
        "name": "Nordic American Tankers Limited",
        "price": 3.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SPG",
        "name": "Simon Property Group Inc.",
        "price": 140.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ENLK",
        "name": "EnLink Midstream Partners LP Representing Limited Partnership Interests",
        "price": 12.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TRP",
        "name": "TransCanada Corporation",
        "price": 57.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RH",
        "name": "RH",
        "price": 245.77,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CBRE",
        "name": "CBRE Group Inc Class A",
        "price": 63.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HGV",
        "name": "Hilton Grand Vacations Inc.",
        "price": 31.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AEG",
        "name": "AEGON N.V.",
        "price": 4.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BTI",
        "name": "British American Tobacco Industries p.l.c. ADR",
        "price": 43.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NVS",
        "name": "Novartis AG",
        "price": 96.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "QSR",
        "name": "Restaurant Brands International Inc.",
        "price": 66.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CXP",
        "name": "Columbia Property Trust Inc.",
        "price": 22.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DF",
        "name": "Dean Foods Company",
        "price": 0.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LDOS",
        "name": "Leidos Holdings Inc.",
        "price": 119.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VSLR",
        "name": "Vivint Solar Inc.",
        "price": 12.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MPW",
        "name": "Medical Properties Trust Inc.",
        "price": 24.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CIM",
        "name": "Chimera Investment Corporation",
        "price": 22.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "QCP",
        "name": "Quality Care Properties Inc.",
        "price": 20.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NYLD",
        "name": "NRG Yield Inc. Class C",
        "price": 20.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ETH",
        "name": "Ethan Allen Interiors Inc.",
        "price": 14.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KS",
        "name": "KapStone Paper and Packaging Corporation",
        "price": 34.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AEE",
        "name": "Ameren Corporation",
        "price": 85.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HCC",
        "name": "Warrior Met Coal Inc.",
        "price": 17.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FIT",
        "name": "Fitbit Inc. Class A",
        "price": 6.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CBS",
        "name": "CBS Corporation Class B",
        "price": 0.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MBT",
        "name": "Mobile TeleSystems PJSC",
        "price": 10.82,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TMO",
        "name": "Thermo Fisher Scientific Inc",
        "price": 336.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HCLP",
        "name": "Hi-Crush Partners LP representing limited partner interests",
        "price": 2.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OFC",
        "name": "Corporate Office Properties Trust",
        "price": 29.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STT",
        "name": "State Street Corporation",
        "price": 77.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HLF",
        "name": "Herbalife Ltd.",
        "price": 37.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WRK",
        "name": "Westrock Company",
        "price": 40.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BR",
        "name": "Broadridge Financial Solutions Inc.Common Stock",
        "price": 121.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MCD",
        "name": "McDonald's Corporation",
        "price": 215.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PRO",
        "name": "PROS Holdings Inc.",
        "price": 51.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TWO",
        "name": "Two Harbors Investment Corp",
        "price": 15.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AXL",
        "name": "American Axle & Manufacturing Holdings Inc.",
        "price": 8.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VLY",
        "name": "Valley National Bancorp",
        "price": 11.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BTE",
        "name": "Baytex Energy Corp",
        "price": 1.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HYH",
        "name": "Halyard Health Inc.",
        "price": 57.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SUN",
        "name": "Sunoco LP representing limited partner interests",
        "price": 30.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ZEN",
        "name": "Zendesk Inc.",
        "price": 88.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ATEN",
        "name": "A10 Networks Inc.",
        "price": 7.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CRC",
        "name": "California Resources Corporation",
        "price": 6.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WPZ",
        "name": "Williams Partners L.P. Representing Limited Partner Interests",
        "price": 47.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ATUS",
        "name": "Altice USA Inc. Class A",
        "price": 29.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SIG",
        "name": "Signet Jewelers Limited",
        "price": 28.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BDC",
        "name": "Belden Inc",
        "price": 49.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "XPO",
        "name": "XPO Logistics Inc.",
        "price": 99.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "APO",
        "name": "Apollo Global Management LLC Class A Representing Class A Limitied Liability Company Interests",
        "price": 46.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FMSA",
        "name": "Fairmount Santrol Holdings Inc.",
        "price": 5.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BSTI",
        "name": "BEST Inc. American Depositary Shares each representing one Class A",
        "price": 5.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CRI",
        "name": "Carter's Inc.",
        "price": 111.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AGCO",
        "name": "AGCO Corporation",
        "price": 67.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MMC",
        "name": "Marsh & McLennan Companies Inc.",
        "price": 117.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GNW",
        "name": "Genworth Financial Inc",
        "price": 4.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TMHC",
        "name": "Taylor Morrison Home Corporation Class A",
        "price": 28.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "URI",
        "name": "United Rentals Inc.",
        "price": 155.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MCO",
        "name": "Moody's Corporation",
        "price": 278.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SLG",
        "name": "SL Green Realty Corporation",
        "price": 94.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STO",
        "name": "Statoil ASA",
        "price": 27.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PAGS",
        "name": "PagSeguro Digital Ltd. Class A",
        "price": 37.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "L",
        "name": "Loews Corporation",
        "price": 53.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MBI",
        "name": "MBIA Inc.",
        "price": 9.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VNO",
        "name": "Vornado Realty Trust",
        "price": 64.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PDS",
        "name": "Precision Drilling Corporation",
        "price": 1.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BCC",
        "name": "Boise Cascade L.L.C.",
        "price": 40.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TCP",
        "name": "TC PipeLines LP representing Limited Partner Interests",
        "price": 40.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PRTY",
        "name": "Party City Holdco Inc.",
        "price": 2.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OGE",
        "name": "OGE Energy Corporation",
        "price": 44.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "QGEN",
        "name": "Qiagen N.V.",
        "price": 37.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EAT",
        "name": "Brinker International Inc.",
        "price": 40.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DXC",
        "name": "DXC Technology Company",
        "price": 30.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UDR",
        "name": "UDR Inc.",
        "price": 50.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KBR",
        "name": "KBR Inc.",
        "price": 31.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PGEM",
        "name": "Ply Gem Holdings Inc.",
        "price": 21.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STM",
        "name": "STMicroelectronics N.V.",
        "price": 31.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AQUA",
        "name": "Evoqua Water Technologies Corp.",
        "price": 25.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EQT",
        "name": "EQT Corporation",
        "price": 6.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SRE",
        "name": "Sempra Energy",
        "price": 159.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SAVE",
        "name": "Spirit Airlines Inc.",
        "price": 41.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RHT",
        "name": "Red Hat Inc.",
        "price": 186.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HTA",
        "name": "Healthcare Trust of America Inc. Class A",
        "price": 33.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NPTN",
        "name": "NeoPhotonics Corporation",
        "price": 7.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NSM",
        "name": "Nationstar Mortgage Holdings Inc.",
        "price": 18.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SQM",
        "name": "Sociedad Quimica y Minera S.A.",
        "price": 32.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SXT",
        "name": "Sensient Technologies Corporation",
        "price": 55.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KND",
        "name": "Kindred Healthcare Inc.",
        "price": 9.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OMC",
        "name": "Omnicom Group Inc.",
        "price": 78.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CVA",
        "name": "Covanta Holding Corporation",
        "price": 15.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LXP",
        "name": "Lexington Realty Trust",
        "price": 11.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FMC",
        "name": "FMC Corporation",
        "price": 108.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KN",
        "name": "Knowles Corporation",
        "price": 17.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KW",
        "name": "Kennedy-Wilson Holdings Inc.",
        "price": 22.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SCS",
        "name": "Steelcase Inc.",
        "price": 18.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CXW",
        "name": "CoreCivic Inc.",
        "price": 17.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CBI",
        "name": "Chicago Bridge & Iron Company N.V.",
        "price": 16.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GXP",
        "name": "Great Plains Energy Incorporated",
        "price": 32.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CGI",
        "name": "Celadon Group Inc.",
        "price": 3.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DFS",
        "name": "Discover Financial Services",
        "price": 75.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PH",
        "name": "Parker-Hannifin Corporation",
        "price": 215.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "USA",
        "name": "Liberty All-Star Equity Fund",
        "price": 6.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CIEN",
        "name": "Ciena Corporation",
        "price": 44.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OIS",
        "name": "Oil States International Inc.",
        "price": 10.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SEMG",
        "name": "Semgroup Corporation Class A",
        "price": 15.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SCCO",
        "name": "Southern Copper Corporation",
        "price": 38.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "YEXT",
        "name": "Yext Inc.",
        "price": 16.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ATU",
        "name": "Actuant Corporation",
        "price": 24.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "REVG",
        "name": "REV Group Inc.",
        "price": 10.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ALLE",
        "name": "Allegion plc",
        "price": 129.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CCT",
        "name": "Corporate Capital Trust Inc.",
        "price": 12.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MHK",
        "name": "Mohawk Industries Inc.",
        "price": 134.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GRA",
        "name": "W.R. Grace & Co.",
        "price": 63.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VNTR",
        "name": "Venator Materials PLC",
        "price": 3.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SUM",
        "name": "Summit Materials Inc. Class A",
        "price": 23.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ERJ",
        "name": "Embraer S.A.",
        "price": 17.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UNM",
        "name": "Unum Group",
        "price": 30.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MTU",
        "name": "Mitsubishi UFJ Financial Group Inc.",
        "price": 6.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NJR",
        "name": "NewJersey Resources Corporation",
        "price": 43.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NNN",
        "name": "National Retail Properties",
        "price": 58.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PAGP",
        "name": "Plains Group Holdings L.P. Class A Shares representing limited partner interests",
        "price": 16.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AOS",
        "name": "A.O. Smith Corporation",
        "price": 44.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DGX",
        "name": "Quest Diagnostics Incorporated",
        "price": 112.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CUZ",
        "name": "Cousins Properties Incorporated",
        "price": 42.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FIS",
        "name": "Fidelity National Information Services Inc.",
        "price": 156.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EEP",
        "name": "Enbridge Energy L.P. Class A",
        "price": 10.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TRN",
        "name": "Trinity Industries Inc.",
        "price": 23.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SPGI",
        "name": "S&P Global Inc.",
        "price": 303.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AN",
        "name": "AutoNation Inc.",
        "price": 48.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ABR",
        "name": "Arbor Realty Trust",
        "price": 14.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MCK",
        "name": "McKesson Corporation",
        "price": 170.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HTZ",
        "name": "Hertz Global Holdings Inc",
        "price": 20.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MUX",
        "name": "McEwen Mining Inc.",
        "price": 1.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IEX",
        "name": "IDEX Corporation",
        "price": 173.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "INN",
        "name": "Summit Hotel Properties Inc.",
        "price": 11.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EPE",
        "name": "EP Energy Corporation Class A",
        "price": 0.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TROX",
        "name": "Tronox Limited Class A $0.01 par",
        "price": 9.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OEC",
        "name": "Orion Engineered Carbons S.A",
        "price": 17.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ATH",
        "name": "Athene Holding Ltd. Class A",
        "price": 49.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ABC",
        "name": "AmerisourceBergen Corporation",
        "price": 96.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EFX",
        "name": "Equifax Inc.",
        "price": 161.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DPZ",
        "name": "Domino's Pizza Inc",
        "price": 373.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ENLC",
        "name": "EnLink Midstream LLC representing Limited Partner Interests",
        "price": 4.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TTM",
        "name": "Tata Motors Ltd Limited",
        "price": 11.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OHI",
        "name": "Omega Healthcare Investors Inc.",
        "price": 44.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SUI",
        "name": "Sun Communities Inc.",
        "price": 172.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MPLX",
        "name": "MPLX LP Representing Limited Partner Interests",
        "price": 23.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EC",
        "name": "Ecopetrol S.A. American Depositary Shares",
        "price": 20.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LQ",
        "name": "La Quinta Holdings Inc.",
        "price": 21.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SIX",
        "name": "Six Flags Entertainment Corporation",
        "price": 31.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PX",
        "name": "Praxair Inc.",
        "price": 164.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VEEV",
        "name": "Veeva Systems Inc. Class A",
        "price": 164.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DO",
        "name": "Diamond Offshore Drilling Inc.",
        "price": 3.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FRAC",
        "name": "Keane Group Inc.",
        "price": 7.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NVO",
        "name": "Novo Nordisk A\/S",
        "price": 63.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SWK",
        "name": "Stanley Black & Decker Inc.",
        "price": 162.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SNDR",
        "name": "Schneider National Inc.",
        "price": 21.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SBGL",
        "name": "D\/B\/A Sibanye-Stillwater Limited American Depositary Shares (Each representing four)",
        "price": 12.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ANH",
        "name": "Anworth Mortgage Asset Corporation",
        "price": 3.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EW",
        "name": "Edwards Lifesciences Corporation",
        "price": 233.91,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SKT",
        "name": "Tanger Factory Outlet Centers Inc.",
        "price": 12.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ROK",
        "name": "Rockwell Automation Inc.",
        "price": 205.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ALL",
        "name": "Allstate Corporation (The)",
        "price": 123.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "APRN",
        "name": "Blue Apron Holdings Inc. Class A",
        "price": 3.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MFC",
        "name": "Manulife Financial Corporation",
        "price": 20.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FSIC",
        "name": "FS Investment Corporation",
        "price": 5.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ZTS",
        "name": "Zoetis Inc. Class A",
        "price": 143.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BUD",
        "name": "Anheuser-Busch Inbev SA Sponsored ADR (Belgium)",
        "price": 73.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UA",
        "name": "Under Armour Inc. Class C",
        "price": 14.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AROC",
        "name": "Archrock Inc.",
        "price": 8.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "THO",
        "name": "Thor Industries Inc.",
        "price": 88.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KT",
        "name": "KT Corporation",
        "price": 10.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TGNA",
        "name": "TEGNA Inc",
        "price": 17.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CHGG",
        "name": "Chegg Inc.",
        "price": 40.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WM",
        "name": "Waste Management Inc.",
        "price": 124.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ASX",
        "name": "Advanced Semiconductor Engineering Inc.",
        "price": 4.91,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ALB",
        "name": "Albemarle Corporation",
        "price": 94.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RHI",
        "name": "Robert Half International Inc.",
        "price": 59.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HLT",
        "name": "Hilton Worldwide Holdings Inc.",
        "price": 112.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DNOW",
        "name": "NOW Inc.",
        "price": 9.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PIR",
        "name": "Pier 1 Imports Inc.",
        "price": 3.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WPG",
        "name": "Washington Prime Group Inc.",
        "price": 2.77,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DRH",
        "name": "Diamondrock Hospitality Company",
        "price": 10.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OC",
        "name": "Owens Corning Inc New",
        "price": 66.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CUBE",
        "name": "CubeSmart",
        "price": 31.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AGRO",
        "name": "Adecoagro S.A.",
        "price": 7.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AL",
        "name": "Air Lease Corporation Class A",
        "price": 44.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PHH",
        "name": "PHH Corp",
        "price": 11.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GNRT",
        "name": "Gener8 Maritime Inc.",
        "price": 6.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EVH",
        "name": "Evolent Health Inc Class A",
        "price": 11.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UIS",
        "name": "Unisys Corporation",
        "price": 17.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NCS",
        "name": "NCI Building Systems Inc.",
        "price": 5.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JELD",
        "name": "JELD-WEN Holding Inc.",
        "price": 21.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TDG",
        "name": "Transdigm Group Incorporated Inc.",
        "price": 634.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STAY",
        "name": "Extended Stay America Inc.",
        "price": 12.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TCF",
        "name": "TCF Financial Corporation",
        "price": 42.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RY",
        "name": "Royal Bank Of Canada",
        "price": 81.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SYK",
        "name": "Stryker Corporation",
        "price": 224.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HR",
        "name": "Healthcare Realty Trust Incorporated",
        "price": 37.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TRV",
        "name": "The Travelers Companies Inc.",
        "price": 133.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CSL",
        "name": "Carlisle Companies Incorporated",
        "price": 162.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GWRE",
        "name": "Guidewire Software Inc.",
        "price": 122.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ANET",
        "name": "Arista Networks Inc.",
        "price": 228.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BMS",
        "name": "Bemis Company Inc.",
        "price": 57.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WSM",
        "name": "Williams-Sonoma Inc. (DE)",
        "price": 74.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EXP",
        "name": "Eagle Materials Inc",
        "price": 89.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BWA",
        "name": "BorgWarner Inc.",
        "price": 35.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SWCH",
        "name": "Switch Inc. Class A",
        "price": 17.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "APLE",
        "name": "Apple Hospitality REIT Inc.",
        "price": 15.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ADS",
        "name": "Alliance Data Systems Corporation",
        "price": 103.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DRQ",
        "name": "Dril-Quip Inc.",
        "price": 40.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AXS",
        "name": "Axis Capital Holdings Limited",
        "price": 62.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MTDR",
        "name": "Matador Resources Company",
        "price": 13.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CAJ",
        "name": "Canon Inc. American Depositary Shares",
        "price": 25.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CNI",
        "name": "Canadian National Railway Company",
        "price": 93.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CAL",
        "name": "Caleres Inc.",
        "price": 14.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SAP",
        "name": "SAP SE ADS",
        "price": 138.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ESNT",
        "name": "Essent Group Ltd.",
        "price": 48.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NMFC",
        "name": "New Mountain Finance Corporation",
        "price": 14.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OI",
        "name": "Owens-Illinois Inc.",
        "price": 12.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DSW",
        "name": "DSW Inc.",
        "price": 22.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MDU",
        "name": "MDU Resources Group Inc.",
        "price": 32.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ELLI",
        "name": "Ellie Mae Inc.",
        "price": 99.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PSXP",
        "name": "Phillips 66 Partners LP representing limited partner interest in the Partnership",
        "price": 62.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CWH",
        "name": "Camping World Holdings Inc. Class A Commom Stock",
        "price": 16.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DECK",
        "name": "Deckers Outdoor Corporation",
        "price": 199.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SMFG",
        "name": "Sumitomo Mitsui Financial Group Inc Unsponsored American Depositary Shares (Japan)",
        "price": 6.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LAZ",
        "name": "Lazard LTD. LTD. Class A",
        "price": 41.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TEGP",
        "name": "Tallgrass Energy GP LP Class A Shares",
        "price": 22.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NEXA",
        "name": "Nexa Resources S.A.",
        "price": 8.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HRS",
        "name": "Harris Corporation",
        "price": 196.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PLNT",
        "name": "Planet Fitness Inc.",
        "price": 88.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CAH",
        "name": "Cardinal Health Inc.",
        "price": 60.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AYI",
        "name": "Acuity Brands Inc (Holding Company)",
        "price": 115.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DVA",
        "name": "DaVita Inc.",
        "price": 84.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WCN",
        "name": "Waste Connections Inc.",
        "price": 102.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MYOV",
        "name": "Myovant Sciences Ltd.",
        "price": 11.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ABM",
        "name": "ABM Industries Incorporated",
        "price": 38.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NGL",
        "name": "NGL ENERGY PARTNERS LP representing Limited Partner Interests",
        "price": 9.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ARCO",
        "name": "Arcos Dorados Holdings Inc. Class A Shares",
        "price": 7.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VR",
        "name": "Validus Holdings Ltd.",
        "price": 67.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LNC",
        "name": "Lincoln National Corporation",
        "price": 61.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NGG",
        "name": "National Grid Transco PLC PLC (NEW) American Depositary Shares",
        "price": 68.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GTES",
        "name": "Gates Industrial Corporation plc",
        "price": 12.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CMA",
        "name": "Comerica Incorporated",
        "price": 63.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ALK",
        "name": "Alaska Air Group Inc.",
        "price": 65.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CHL",
        "name": "China Mobile Limited",
        "price": 42.86,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IRET",
        "name": "Investors Real Estate Trust Shares of Beneficial Interest",
        "price": 76.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HUM",
        "name": "Humana Inc.",
        "price": 370.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TEX",
        "name": "Terex Corporation",
        "price": 24.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JWN",
        "name": "Nordstrom Inc.",
        "price": 41.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HFC",
        "name": "HollyFrontier Corporation",
        "price": 42.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PQG",
        "name": "PQ Group Holdings Inc.",
        "price": 15.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EDU",
        "name": "New Oriental Education & Technology Group Inc. Sponsored ADR representing 1 (Cayman Islands)",
        "price": 137.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ESRT",
        "name": "Empire State Realty Trust Inc. Class A",
        "price": 13.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LBRT",
        "name": "Liberty Oilfield Services Inc. Class A",
        "price": 8.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PEB",
        "name": "Pebblebrook Hotel Trust of Beneficial Interest",
        "price": 24.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TSN",
        "name": "Tyson Foods Inc.",
        "price": 78.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HSBC",
        "name": "HSBC Holdings plc.",
        "price": 36.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OMI",
        "name": "Owens & Minor Inc.",
        "price": 7.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MMP",
        "name": "Magellan Midstream Partners L.P. Limited Partnership",
        "price": 60.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HDB",
        "name": "HDFC Bank Limited",
        "price": 57.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TSE",
        "name": "Trinseo S.A.",
        "price": 28.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WAL",
        "name": "Western Alliance Bancorporation (DE)",
        "price": 58.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SBS",
        "name": "Companhia de saneamento Basico Do Estado De Sao Paulo - Sabesp American Depositary Shares (Each repstg 250)",
        "price": 14.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ARE",
        "name": "Alexandria Real Estate Equities Inc.",
        "price": 168.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TRGP",
        "name": "Targa Resources Inc.",
        "price": 39.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LYV",
        "name": "Live Nation Entertainment Inc.",
        "price": 75.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MFA",
        "name": "MFA Financial Inc.",
        "price": 8.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ECL",
        "name": "Ecolab Inc.",
        "price": 206.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ELY",
        "name": "Callaway Golf Company",
        "price": 19.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ARES",
        "name": "Ares Management L.P. representing Limited Partner Interests",
        "price": 40.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DDD",
        "name": "3D Systems Corporation",
        "price": 12.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LPT",
        "name": "Liberty Property Trust",
        "price": 61.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MKC",
        "name": "McCormick & Company Incorporated",
        "price": 163.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BSBR",
        "name": "Banco Santander Brasil SA American Depositary Shares each representing one unit",
        "price": 9.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RMD",
        "name": "ResMed Inc.",
        "price": 176.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GPT",
        "name": "Gramercy Property Trust",
        "price": 27.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BKU",
        "name": "BankUnited Inc.",
        "price": 33.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "H",
        "name": "Hyatt Hotels Corporation Class A",
        "price": 92.86,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EXPR",
        "name": "Express Inc.",
        "price": 4.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AVB",
        "name": "AvalonBay Communities Inc.",
        "price": 227.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FII",
        "name": "Federated Investors Inc.",
        "price": 36.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CVEO",
        "name": "Civeo Corporation (Canada)",
        "price": 1.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TDOC",
        "name": "Teladoc Inc.",
        "price": 115.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TRU",
        "name": "TransUnion",
        "price": 100.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SOGO",
        "name": "Sogou Inc. American Depositary Shares each representing one Class A",
        "price": 4.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "XYL",
        "name": "Xylem Inc. New",
        "price": 88.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ANDX",
        "name": "Andeavor Logistics LP representing Limited Partner Interests",
        "price": 35.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SFUN",
        "name": "Fang Holdings Limited American Depositary Shares (Each representing Four Class A HK$1.00 par value)",
        "price": 2.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DY",
        "name": "Dycom Industries Inc.",
        "price": 44.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MGP",
        "name": "MGM Growth Properties LLC Class A representing limited liability company interests",
        "price": 34.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SNE",
        "name": "Sony Corporation",
        "price": 66.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MAA",
        "name": "Mid-America Apartment Communities Inc.",
        "price": 147.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AEL",
        "name": "American Equity Investment Life Holding Company",
        "price": 33.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CVG",
        "name": "Convergys Corporation",
        "price": 24.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TSU",
        "name": "TIM Participacoes S.A. American Depositary Shares (Each representing 5)",
        "price": 19.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WES",
        "name": "Western Gas Partners LP Limited Partner Interests",
        "price": 15.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "QUAD",
        "name": "Quad Graphics Inc Class A",
        "price": 6.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RYN",
        "name": "Rayonier Inc. REIT",
        "price": 29.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VSTO",
        "name": "Vista Outdoor Inc.",
        "price": 9.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BHVN",
        "name": "Biohaven Pharmaceutical Holding Company Ltd.",
        "price": 45.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WYN",
        "name": "Wyndham Worldwide Corp Common Stock",
        "price": 108.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PPG",
        "name": "PPG Industries Inc.",
        "price": 119.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WAIR",
        "name": "Wesco Aircraft Holdings Inc.",
        "price": 11.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ORI",
        "name": "Old Republic International Corporation",
        "price": 23.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TPC",
        "name": "Tutor Perini Corporation",
        "price": 12.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "XHR",
        "name": "Xenia Hotels & Resorts Inc.",
        "price": 19.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MC",
        "name": "Moelis & Company Class A",
        "price": 37.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "COT",
        "name": "Cott Corporation",
        "price": 15.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DDS",
        "name": "Dillard's Inc.",
        "price": 65.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TMST",
        "name": "Timken Steel Corporation",
        "price": 5.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FR",
        "name": "First Industrial Realty Trust Inc.",
        "price": 45.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CIG",
        "name": "Comp En De Mn Cemig ADS American Depositary Shares",
        "price": 3.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CUK",
        "name": "Carnival Plc ADS ADS",
        "price": 39.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MSI",
        "name": "Motorola Solutions Inc.",
        "price": 185.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FNV",
        "name": "Franco-Nevada Corporation",
        "price": 116.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EGN",
        "name": "Energen Corporation",
        "price": 72.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KMX",
        "name": "CarMax Inc",
        "price": 101.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LFC",
        "name": "China Life Insurance Company Limited American Depositary Shares",
        "price": 12.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BRX",
        "name": "Brixmor Property Group Inc.",
        "price": 20.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EQGP",
        "name": "EQT GP Holdings LP representing limited partner interests",
        "price": 19.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LH",
        "name": "Laboratory Corporation of America Holdings",
        "price": 188.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CJ",
        "name": "C&J Energy Services Inc.",
        "price": 11.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NBHC",
        "name": "National Bank Holdings Corporation",
        "price": 34.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FND",
        "name": "Floor & Decor Holdings Inc.",
        "price": 55.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MOH",
        "name": "Molina Healthcare Inc",
        "price": 150.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SSW",
        "name": "Seaspan Corporation",
        "price": 11.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FUL",
        "name": "H. B. Fuller Company",
        "price": 48.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MRC",
        "name": "MRC Global Inc.",
        "price": 9.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EXR",
        "name": "Extra Space Storage Inc",
        "price": 107.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CPG",
        "name": "Crescent Point Energy Corporation (Canada)",
        "price": 3.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ITG",
        "name": "Investment Technology Group Inc.",
        "price": 30.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WHR",
        "name": "Whirlpool Corporation",
        "price": 149.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AMGP",
        "name": "Antero Midstream GP LP of Beneficial Interests",
        "price": 12.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HSY",
        "name": "The Hershey Company",
        "price": 160.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SEAS",
        "name": "SeaWorld Entertainment Inc.",
        "price": 35.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PGRE",
        "name": "Paramount Group Inc.",
        "price": 14.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "COO",
        "name": "The Cooper Companies Inc.",
        "price": 354.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JT",
        "name": "Jianpu Technology Inc. American depositary shares each two representing five Class A",
        "price": 1.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WRI",
        "name": "Weingarten Realty Investors",
        "price": 30.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KORS",
        "name": "Michael Kors Holdings Limited",
        "price": 37.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CPT",
        "name": "Camden Property Trust",
        "price": 119.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SHOP",
        "name": "Shopify Inc. Class A Subordinate",
        "price": 535.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MWA",
        "name": "MUELLER WATER PRODUCTS",
        "price": 12.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GWB",
        "name": "Great Western Bancorp Inc.",
        "price": 31.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BOOT",
        "name": "Boot Barn Holdings Inc.",
        "price": 33.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ALEX",
        "name": "Alexander & Baldwin Inc. REIT Holding Company",
        "price": 22.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TKR",
        "name": "Timken Company (The)",
        "price": 52.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RL",
        "name": "Ralph Lauren Corporation",
        "price": 121.86,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CLGX",
        "name": "CoreLogic Inc.",
        "price": 51.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BKS",
        "name": "Barnes & Noble Inc.",
        "price": 4.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TD",
        "name": "Toronto Dominion Bank (The)",
        "price": 57.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BRO",
        "name": "Brown & Brown Inc.",
        "price": 48.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ALSN",
        "name": "Allison Transmission Holdings Inc.",
        "price": 44.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FAF",
        "name": "First American Corporation (New)",
        "price": 65.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "G",
        "name": "Genpact Limited",
        "price": 44.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CFX",
        "name": "Colfax Corporation",
        "price": 36.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PANW",
        "name": "Palo Alto Networks Inc.",
        "price": 249.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GPC",
        "name": "Genuine Parts Company",
        "price": 99.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ELP",
        "name": "Companhia Paranaense de Energia (COPEL)",
        "price": 17.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KMPR",
        "name": "Kemper Corporation",
        "price": 78.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BGS",
        "name": "B&G Foods Inc.",
        "price": 13.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CRS",
        "name": "Carpenter Technology Corporation",
        "price": 44.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AMC",
        "name": "AMC Entertainment Holdings Inc. Class A",
        "price": 7.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BVN",
        "name": "Buenaventura Mining Company Inc.",
        "price": 12.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EXK",
        "name": "Endeavour Silver Corporation (Canada)",
        "price": 1.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BLK",
        "name": "BlackRock Inc.",
        "price": 566.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WRD",
        "name": "WildHorse Resource Development Corporation",
        "price": 17.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SFS",
        "name": "Smart & Final Stores Inc.",
        "price": 6.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "POR",
        "name": "Portland General Electric Co",
        "price": 62.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BBL",
        "name": "BHP Billiton plc Sponsored ADR",
        "price": 43.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GCI",
        "name": "Gannett Co. Inc.",
        "price": 6.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DYN",
        "name": "Dynegy Inc.",
        "price": 13.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GDI",
        "name": "Gardner Denver Holdings Inc.",
        "price": 38.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KNL",
        "name": "Knoll Inc.",
        "price": 21.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HOG",
        "name": "Harley-Davidson Inc.",
        "price": 35.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STWD",
        "name": "STARWOOD PROPERTY TRUST INC. Starwood Property Trust Inc.",
        "price": 26.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UNVR",
        "name": "Univar Inc.",
        "price": 22.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TUP",
        "name": "Tupperware Brands Corporation",
        "price": 6.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LXFT",
        "name": "Luxoft Holding Inc. Class A",
        "price": 58.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FSM",
        "name": "Fortuna Silver Mines Inc (Canada)",
        "price": 3.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "XIN",
        "name": "Xinyuan Real Estate Co Ltd American Depositary Shares",
        "price": 3.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ADNT",
        "name": "Adient plc",
        "price": 28.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HAE",
        "name": "Haemonetics Corporation",
        "price": 119.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WTR",
        "name": "Aqua America Inc.",
        "price": 51.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DLX",
        "name": "Deluxe Corporation",
        "price": 38.91,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GEO",
        "name": "Geo Group Inc (The) REIT",
        "price": 17.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AAV",
        "name": "Advantage Oil & Gas Ltd",
        "price": 2.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AAP",
        "name": "Advance Auto Parts Inc W\/I",
        "price": 142.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AON",
        "name": "Aon plc Class A (UK)",
        "price": 234.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SKM",
        "name": "SK Telecom Co. Ltd.",
        "price": 20.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MAN",
        "name": "ManpowerGroup",
        "price": 92.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DPLO",
        "name": "Diplomat Pharmacy Inc.",
        "price": 4.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TNET",
        "name": "TriNet Group Inc.",
        "price": 61.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ECR",
        "name": "Eclipse Resources Corporation",
        "price": 1.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LZB",
        "name": "La-Z-Boy Incorporated",
        "price": 33.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FTSI",
        "name": "FTS International Inc.",
        "price": 1.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BPL",
        "name": "Buckeye Partners L.P.",
        "price": 40.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "COL",
        "name": "Rockwell Collins Inc.",
        "price": 141.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BXS",
        "name": "BancorpSouth Bank",
        "price": 28.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TRI",
        "name": "Thomson Reuters Corp",
        "price": 81.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JQC",
        "name": "Nuveen Credit Strategies Income Fund Shares of Beneficial Interest",
        "price": 7.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GMS",
        "name": "GMS Inc.",
        "price": 28.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PBI",
        "name": "Pitney Bowes Inc.",
        "price": 3.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "XON",
        "name": "Intrexon Corporation",
        "price": 19.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JEC",
        "name": "Jacobs Engineering Group Inc.",
        "price": 85.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RJF",
        "name": "Raymond James Financial Inc.",
        "price": 101.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NRE",
        "name": "NorthStar Realty Europe Corp.",
        "price": 16.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SNY",
        "name": "Sanofi American Depositary Shares (Each repstg one-half of one)",
        "price": 50.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TTC",
        "name": "Toro Company (The)",
        "price": 82.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BAM",
        "name": "Brookfield Asset Management Inc.",
        "price": 68.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SHW",
        "name": "Sherwin-Williams Company (The)",
        "price": 584.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AMP",
        "name": "Ameriprise Financial Inc.",
        "price": 179.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SNR",
        "name": "New Senior Investment Group Inc.",
        "price": 8.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WSO",
        "name": "Watsco Inc.",
        "price": 170.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ATO",
        "name": "Atmos Energy Corporation",
        "price": 119.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BGC",
        "name": "General Cable Corporation",
        "price": 30.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STAG",
        "name": "Stag Industrial Inc.",
        "price": 32.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WAB",
        "name": "Westinghouse Air Brake Technologies Corporation",
        "price": 78.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PFGC",
        "name": "Performance Food Group Company",
        "price": 53.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MUSA",
        "name": "Murphy USA Inc.",
        "price": 104.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DK",
        "name": "Delek US Holdings Inc.",
        "price": 27.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CM",
        "name": "Canadian Imperial Bank of Commerce",
        "price": 82.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SWX",
        "name": "Southwest Gas Holdings Inc.",
        "price": 79.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MTW",
        "name": "Manitowoc Company Inc. (The)",
        "price": 12.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WUBA",
        "name": "58.com Inc. American Depositary Shares each representing 2 Class A",
        "price": 58.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IRS",
        "name": "IRSA Inversiones Y Representaciones S.A.",
        "price": 5.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AHL",
        "name": "Aspen Insurance Holdings Limited",
        "price": 42.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MIC",
        "name": "Macquarie Infrastructure Corporation",
        "price": 45.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CYS",
        "name": "CYS Investments Inc.",
        "price": 7.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LTM",
        "name": "LATAM Airlines Group S.A.",
        "price": 8.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CNK",
        "name": "Cinemark Holdings Inc Inc.",
        "price": 32.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OCN",
        "name": "Ocwen Financial Corporation",
        "price": 1.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LLL",
        "name": "L3 Technologies Inc.",
        "price": 254.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ENS",
        "name": "Enersys",
        "price": 74.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TFX",
        "name": "Teleflex Incorporated",
        "price": 384.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EQC",
        "name": "Equity Commonwealth of Beneficial Interest",
        "price": 33.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DEI",
        "name": "Douglas Emmett Inc.",
        "price": 44.86,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UFS",
        "name": "Domtar Corporation (NEW)",
        "price": 33.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MTN",
        "name": "Vail Resorts Inc.",
        "price": 248.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SPR",
        "name": "Spirit Aerosystems Holdings Inc.",
        "price": 65.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LEE",
        "name": "Lee Enterprises Incorporated",
        "price": 1.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BBX",
        "name": "BBX Capital Corporation Class A",
        "price": 3.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NRZ",
        "name": "New Residential Investment Corp.",
        "price": 17.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HBM",
        "name": "Hudbay Minerals Inc. (Canada)",
        "price": 3.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EVRI",
        "name": "Everi Holdings Inc.",
        "price": 14.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LCI",
        "name": "Lannett Co Inc",
        "price": 9.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PII",
        "name": "Polaris Industries Inc.",
        "price": 94.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CTT",
        "name": "CatchMark Timber Trust Inc. Class A",
        "price": 10.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TLRD",
        "name": "Tailored Brands Inc.",
        "price": 4.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AHH",
        "name": "Armada Hoffler Properties Inc.",
        "price": 18.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SF",
        "name": "Stifel Financial Corporation",
        "price": 68.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DCP",
        "name": "DCP Midstream LP",
        "price": 19.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VEDL",
        "name": "Vedanta Limited American Depositary Shares (Each representing four equity shares)",
        "price": 7.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SERV",
        "name": "ServiceMaster Global Holdings Inc.",
        "price": 37.86,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UN",
        "name": "Unilever NV",
        "price": 58.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WBS",
        "name": "Webster Financial Corporation",
        "price": 47.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WST",
        "name": "West Pharmaceutical Services Inc.",
        "price": 171.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SCI",
        "name": "Service Corporation International",
        "price": 51.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BERY",
        "name": "Berry Global Group Inc.",
        "price": 42.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ENIA",
        "name": "Enel Americas S.A. American Depositary Shares",
        "price": 9.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TPRE",
        "name": "Third Point Reinsurance Ltd.",
        "price": 11.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CCK",
        "name": "Crown Holdings Inc.",
        "price": 78.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WNC",
        "name": "Wabash National Corporation",
        "price": 12.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ETR",
        "name": "Entergy Corporation",
        "price": 131.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FLS",
        "name": "Flowserve Corporation",
        "price": 46.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WBT",
        "name": "Welbilt Inc.",
        "price": 14.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CISN",
        "name": "Cision Ltd.",
        "price": 9.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CRH",
        "name": "CRH PLC American Depositary Shares",
        "price": 37.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GHL",
        "name": "Greenhill & Co. Inc.",
        "price": 16.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IPI",
        "name": "Intrepid Potash Inc",
        "price": 2.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HIW",
        "name": "Highwoods Properties Inc.",
        "price": 51.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CNXM",
        "name": "CNX Midstream Partners LP representing limited partner interests",
        "price": 13.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CPS",
        "name": "Cooper-Standard Holdings Inc.",
        "price": 21.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "APH",
        "name": "Amphenol Corporation",
        "price": 103.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "REXR",
        "name": "Rexford Industrial Realty Inc.",
        "price": 52.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TK",
        "name": "Teekay Corporation",
        "price": 3.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RS",
        "name": "Reliance Steel & Aluminum Co. (DE)",
        "price": 109.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HEI",
        "name": "Heico Corporation",
        "price": 127.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CFR",
        "name": "Cullen\/Frost Bankers Inc.",
        "price": 94.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "YPF",
        "name": "YPF Sociedad Anonima",
        "price": 9.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CMG",
        "name": "Chipotle Mexican Grill Inc.",
        "price": 927.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "REG",
        "name": "Regency Centers Corporation",
        "price": 64.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RPM",
        "name": "RPM International Inc.",
        "price": 74.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BNS",
        "name": "Bank Nova Scotia Halifax Pfd 3",
        "price": 56.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BWXT",
        "name": "BWX Technologies Inc.",
        "price": 70.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WOW",
        "name": "WideOpenWest Inc.",
        "price": 7.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WOR",
        "name": "Worthington Industries Inc.",
        "price": 37.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HUBS",
        "name": "HubSpot Inc.",
        "price": 194.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "QUOT",
        "name": "Quotient Technology Inc.",
        "price": 9.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "COLD",
        "name": "Americold Realty Trust",
        "price": 37.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NS",
        "name": "Nustar Energy L.P.",
        "price": 26.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FMX",
        "name": "Fomento Economico Mexicano S.A.B. de C.V.",
        "price": 94.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EV",
        "name": "Eaton Vance Corporation",
        "price": 51.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PKG",
        "name": "Packaging Corporation of America",
        "price": 99.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NAV",
        "name": "Navistar International Corporation",
        "price": 37.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CLX",
        "name": "Clorox Company (The)",
        "price": 164.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VGR",
        "name": "Vector Group Ltd.",
        "price": 13.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HII",
        "name": "Huntington Ingalls Industries Inc.",
        "price": 237.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PRGO",
        "name": "Perrigo Company plc",
        "price": 59.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MPO",
        "name": "Midstates Petroleum Company Inc.",
        "price": 6.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MSA",
        "name": "MSA Safety Incorporated",
        "price": 132.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SQNS",
        "name": "Sequans Communications S.A. American Depositary Shares each representing one",
        "price": 6.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ACM",
        "name": "AECOM",
        "price": 51.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HLI",
        "name": "Houlihan Lokey Inc. Class A",
        "price": 57.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CMP",
        "name": "Compass Minerals Intl Inc",
        "price": 62.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WR",
        "name": "Westar Energy Inc.",
        "price": 53.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CZZ",
        "name": "Cosan Limited Class A",
        "price": 21.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SPB",
        "name": "Spectrum Brands Holdings Inc.",
        "price": 60.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IFF",
        "name": "Internationa Flavors & Fragrances Inc.",
        "price": 132.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RYI",
        "name": "Ryerson Holding Corporation",
        "price": 8.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MAC",
        "name": "Macerich Company (The)",
        "price": 23.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IQV",
        "name": "IQVIA Holdings Inc.",
        "price": 164.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WNS",
        "name": "WNS (Holdings) Limited Sponsored ADR (Jersey)",
        "price": 74.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VIV",
        "name": "Telefonica Brasil S.A. ADS",
        "price": 13.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FCF",
        "name": "First Commonwealth Financial Corporation",
        "price": 13.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VG",
        "name": "Vonage Holdings Corp.",
        "price": 9.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SNP",
        "name": "China Petroleum & Chemical Corporation",
        "price": 54.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RPAI",
        "name": "Retail Properties of America Inc. Class A",
        "price": 12.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ANW",
        "name": "Aegean Marine Petroleum Network Inc.",
        "price": 0.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WLH",
        "name": "Lyon William Homes (Class A)",
        "price": 24.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IVR",
        "name": "INVESCO MORTGAGE CAPITAL INC",
        "price": 18.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TTI",
        "name": "Tetra Technologies Inc.",
        "price": 1.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "THS",
        "name": "Treehouse Foods Inc.",
        "price": 44.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RRD",
        "name": "R.R. Donnelley & Sons Company",
        "price": 2.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EDR",
        "name": "Education Realty Trust Inc.",
        "price": 41.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TBI",
        "name": "TrueBlue Inc.",
        "price": 16.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BHE",
        "name": "Benchmark Electronics Inc.",
        "price": 28.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BCE",
        "name": "BCE Inc.",
        "price": 48.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EQM",
        "name": "EQT Midstream Partners LP representing Limited Partner Interests",
        "price": 23.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FCB",
        "name": "FCB Financial Holdings Inc. Class A",
        "price": 33.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ENIC",
        "name": "Enel Chile S.A. American Depositary Shares (Each representing 50 shares of)",
        "price": 4.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SPXC",
        "name": "SPX Corporation",
        "price": 50.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ARCH",
        "name": "Arch Coal Inc. Class A",
        "price": 53.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AM",
        "name": "Antero Midstream Partners LP representing limited partner interests",
        "price": 5.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TGI",
        "name": "Triumph Group Inc.",
        "price": 24.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AWK",
        "name": "American Water Works Company Inc.",
        "price": 137.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "R",
        "name": "Ryder System Inc.",
        "price": 41.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OA",
        "name": "Orbital ATK Inc.",
        "price": 134.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EXG",
        "name": "Eaton Vance Tax-Managed Global Diversified Equity Income Fund of Beneficial Interest",
        "price": 8.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BKH",
        "name": "Black Hills Corporation",
        "price": 84.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AVD",
        "name": "American Vanguard Corporation ($0.10 Par Value)",
        "price": 17.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CMCM",
        "name": "Cheetah Mobile Inc. American Depositary Shares each representing 10 Class",
        "price": 3.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GPN",
        "name": "Global Payments Inc.",
        "price": 208.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HE",
        "name": "Hawaiian Electric Industries Inc.",
        "price": 49.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SJI",
        "name": "South Jersey Industries Inc.",
        "price": 32.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FBM",
        "name": "Foundation Building Materials Inc.",
        "price": 18.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VAR",
        "name": "Varian Medical Systems Inc.",
        "price": 145.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UGI",
        "name": "UGI Corporation",
        "price": 41.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SVU",
        "name": "SuperValu Inc.",
        "price": 32.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CBD",
        "name": "Companhia Brasileira de Distribuicao ADS",
        "price": 18.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SMG",
        "name": "Scotts Miracle-Gro Company (The)",
        "price": 122.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WAT",
        "name": "Waters Corporation",
        "price": 217.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FLOW",
        "name": "SPX FLOW Inc.",
        "price": 42.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CWT",
        "name": "California Water Service Group",
        "price": 54.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RESI",
        "name": "Front Yard Residential Corporation",
        "price": 12.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MTB",
        "name": "M&T Bank Corporation",
        "price": 169.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CRL",
        "name": "Charles River Laboratories International Inc.",
        "price": 175.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FDS",
        "name": "FactSet Research Systems Inc.",
        "price": 302.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JLL",
        "name": "Jones Lang LaSalle Incorporated",
        "price": 165.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HSC",
        "name": "Harsco Corporation",
        "price": 15.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SAIL",
        "name": "SailPoint Technologies Holdings Inc.",
        "price": 25.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PNM",
        "name": "PNM Resources Inc. (Holding Co.)",
        "price": 54.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AT",
        "name": "Atlantic Power Corporation (Canada)",
        "price": 2.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MXL",
        "name": "MaxLinear Inc.",
        "price": 18.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AVY",
        "name": "Avery Dennison Corporation",
        "price": 136.77,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WMS",
        "name": "Advanced Drainage Systems Inc.",
        "price": 50.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DHT",
        "name": "DHT Holdings Inc.",
        "price": 5.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AVA",
        "name": "Avista Corporation",
        "price": 51.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WLK",
        "name": "Westlake Chemical Corporation",
        "price": 63.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PSA",
        "name": "Public Storage",
        "price": 222.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NTB",
        "name": "Bank of N.T. Butterfield & Son Limited (The) Voting",
        "price": 34.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STE",
        "name": "STERIS plc",
        "price": 168.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DCI",
        "name": "Donaldson Company Inc.",
        "price": 52.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FTAI",
        "name": "Fortress Transportation and Infrastructure Investors LLC",
        "price": 21.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AIZ",
        "name": "Assurant Inc.",
        "price": 141.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BURL",
        "name": "Burlington Stores Inc.",
        "price": 245.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LEG",
        "name": "Leggett & Platt Incorporated",
        "price": 45.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "COR",
        "name": "CoreSite Realty Corporation",
        "price": 115.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AAN",
        "name": "Aaron's Inc.",
        "price": 45.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SOI",
        "name": "Solaris Oilfield Infrastructure Inc. Class A",
        "price": 13.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PRA",
        "name": "ProAssurance Corporation",
        "price": 32.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GPMT",
        "name": "Granite Point Mortgage Trust Inc.",
        "price": 18.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NBLX",
        "name": "Noble Midstream Partners LP Representing Limited Partner Interests",
        "price": 20.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "INT",
        "name": "World Fuel Services Corporation",
        "price": 37.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LPG",
        "name": "Dorian LPG Ltd.",
        "price": 12.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IPHI",
        "name": "Inphi Corporation $0.001 par value",
        "price": 85.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BAP",
        "name": "Credicorp Ltd.",
        "price": 199.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BC",
        "name": "Brunswick Corporation",
        "price": 65.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SNN",
        "name": "Smith & Nephew SNATS Inc.",
        "price": 51.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CUBI",
        "name": "Customers Bancorp Inc",
        "price": 22.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CADE",
        "name": "Cadence Bancorporation Class A",
        "price": 17.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AJRD",
        "name": "Aerojet Rocketdyne Holdings Inc.",
        "price": 54.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "APAM",
        "name": "Artisan Partners Asset Management Inc. Class A",
        "price": 35.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PEI",
        "name": "Pennsylvania Real Estate Investment Trust",
        "price": 3.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ST",
        "name": "Sensata Technologies Holding N.V.",
        "price": 48.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AKR",
        "name": "Acadia Realty Trust",
        "price": 25.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OAK",
        "name": "Oaktree Capital Group LLC Class A Units Representing Limited Liability Company Interests",
        "price": 48.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BRSS",
        "name": "Global Brass and Copper Holdings Inc.",
        "price": 43.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CHKR",
        "name": "Chesapeake Granite Wash Trust representing beneficial interests in the Trust",
        "price": 0.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MLI",
        "name": "Mueller Industries Inc.",
        "price": 33.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ROG",
        "name": "Rogers Corporation",
        "price": 110.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UMC",
        "name": "United Microelectronics Corporation (NEW)",
        "price": 2.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "QHC",
        "name": "Quorum Health Corporation",
        "price": 1.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TSS",
        "name": "Total System Services Inc.",
        "price": 124.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KEYS",
        "name": "Keysight Technologies Inc.",
        "price": 98.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HRC",
        "name": "Hill-Rom Holdings Inc",
        "price": 107.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SSP",
        "name": "E.W. Scripps Company (The)",
        "price": 13.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FRT",
        "name": "Federal Realty Investment Trust",
        "price": 127.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ASC",
        "name": "Ardmore Shipping Corporation",
        "price": 5.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STC",
        "name": "Stewart Information Services Corporation",
        "price": 40.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IRT",
        "name": "Independence Realty Trust Inc.",
        "price": 15.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LII",
        "name": "Lennox International Inc.",
        "price": 248.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OSG",
        "name": "Overseas Shipholding Group Inc. Class A",
        "price": 2.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GOOS",
        "name": "Canada Goose Holdings Inc. Subordinate",
        "price": 31.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MRT",
        "name": "MedEquities Realty Trust Inc.",
        "price": 11.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BMO",
        "name": "Bank Of Montreal",
        "price": 76.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EPAM",
        "name": "EPAM Systems Inc.",
        "price": 238.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PVH",
        "name": "PVH Corp.",
        "price": 86.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MTD",
        "name": "Mettler-Toledo International Inc.",
        "price": 755.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EGHT",
        "name": "8x8 Inc",
        "price": 20.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ESS",
        "name": "Essex Property Trust Inc.",
        "price": 326.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "INGR",
        "name": "Ingredion Incorporated",
        "price": 94.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HT",
        "name": "Hersha Hospitality Trust Class A of Beneficial Interest",
        "price": 14.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BAS",
        "name": "Basic Energy Services Inc.",
        "price": 0.435,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ADSW",
        "name": "Advanced Disposal Services Inc.",
        "price": 33.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WPC",
        "name": "W.P. Carey Inc. REIT",
        "price": 84.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AWR",
        "name": "American States Water Company",
        "price": 90.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WLKP",
        "name": "Westlake Chemical Partners LP representing limited partner interests",
        "price": 23.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BFAM",
        "name": "Bright Horizons Family Solutions Inc.",
        "price": 174.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TEN",
        "name": "Tenneco Inc.",
        "price": 10.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SUP",
        "name": "Superior Industries International Inc. (DE)",
        "price": 3.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LL",
        "name": "Lumber Liquidators Holdings Inc",
        "price": 9.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BID",
        "name": "Sotheby's",
        "price": 33.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LEA",
        "name": "Lear Corporation",
        "price": 124.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "APD",
        "name": "Air Products and Chemicals Inc.",
        "price": 255.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AVT",
        "name": "Avnet Inc.",
        "price": 36.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SXC",
        "name": "SunCoke Energy Inc.",
        "price": 5.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ATTO",
        "name": "Atento S.A.",
        "price": 3.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DAR",
        "name": "Darling Ingredients Inc.",
        "price": 28.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AJG",
        "name": "Arthur J. Gallagher & Co.",
        "price": 108.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RGA",
        "name": "Reinsurance Group of America Incorporated",
        "price": 153.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KB",
        "name": "KB Financial Group Inc",
        "price": 34.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SNV",
        "name": "Synovus Financial Corp.",
        "price": 36.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MOD",
        "name": "Modine Manufacturing Company",
        "price": 8.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WBC",
        "name": "Wabco Holdings Inc.",
        "price": 135.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NSH",
        "name": "Nustar GP Holdings LLC Units",
        "price": 13.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SNA",
        "name": "Snap-On Incorporated",
        "price": 159.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CLDT",
        "name": "Chatham Lodging Trust (REIT) of Beneficial Interest",
        "price": 16.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DEO",
        "name": "Diageo plc",
        "price": 161.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ONDK",
        "name": "On Deck Capital Inc.",
        "price": 4.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SAH",
        "name": "Sonic Automotive Inc.",
        "price": 29.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NVTA",
        "name": "Invitae Corporation",
        "price": 23.82,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HZO",
        "name": "MarineMax Inc. (FL)",
        "price": 21.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TNK",
        "name": "Teekay Tankers Ltd.",
        "price": 14.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VSM",
        "name": "Versum Materials Inc.",
        "price": 51.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HMC",
        "name": "Honda Motor Company Ltd.",
        "price": 27.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GPI",
        "name": "Group 1 Automotive Inc.",
        "price": 108.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VLP",
        "name": "Valero Energy Partners LP representing limited partner interests",
        "price": 42.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CPA",
        "name": "Copa Holdings S.A. Class A",
        "price": 108.77,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HOV",
        "name": "Hovnanian Enterprises Inc. Class A",
        "price": 30.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BWP",
        "name": "Boardwalk Pipeline Partners LP",
        "price": 12.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CTLT",
        "name": "Catalent Inc.",
        "price": 58.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NMM",
        "name": "Navios Maritime Partners LP Representing Limited Partner Interests",
        "price": 11.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SAIC",
        "name": "SCIENCE APPLICATIONS INTERNATIONAL CORPORATION",
        "price": 96.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TPX",
        "name": "Tempur Sealy International Inc.",
        "price": 94.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CBM",
        "name": "Cambrex Corporation",
        "price": 59.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VVR",
        "name": "Invesco Senior Income Trust (DE)",
        "price": 4.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UL",
        "name": "Unilever PLC",
        "price": 59.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FAC",
        "name": "First Acceptance Corporation",
        "price": 0.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HVT",
        "name": "Haverty Furniture Companies Inc.",
        "price": 17.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RLI",
        "name": "RLI Corp.",
        "price": 92.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KEX",
        "name": "Kirby Corporation",
        "price": 74.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OR",
        "name": "Osisko Gold Royalties Ltd",
        "price": 10.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "B",
        "name": "Barnes Group Inc.",
        "price": 66.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DIN",
        "name": "Dine Brands Global Inc.",
        "price": 97.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OMN",
        "name": "OMNOVA Solutions Inc.",
        "price": 10.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NM",
        "name": "Navios Maritime Holdings Inc.",
        "price": 3.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GVA",
        "name": "Granite Construction Incorporated",
        "price": 26.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EVTC",
        "name": "Evertec Inc.",
        "price": 34.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DESP",
        "name": "Despegar.com Corp.",
        "price": 15.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TGP",
        "name": "Teekay LNG Partners L.P.",
        "price": 12.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NFJ",
        "name": "AllianzGI NFJ Dividend Interest & Premium Strategy Fund",
        "price": 13.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ENZ",
        "name": "Enzo Biochem Inc. ($0.01 Par Value)",
        "price": 2.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KRA",
        "name": "Kraton Corporation",
        "price": 16.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TRCO",
        "name": "Tribune Media Company Class A",
        "price": 46.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "QTM",
        "name": "Quantum Corporation",
        "price": 1.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FCFS",
        "name": "First Cash Inc.",
        "price": 85.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "I",
        "name": "Intelsat S.A.",
        "price": 4.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KDMN",
        "name": "Kadmon Holdings Inc.",
        "price": 5.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CNS",
        "name": "Cohen & Steers Inc",
        "price": 77.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LM",
        "name": "Legg Mason Inc.",
        "price": 50.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BITA",
        "name": "Bitauto Holdings Limited American Depositary Shares (each representing one)",
        "price": 14.86,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LXU",
        "name": "LSB Industries Inc.",
        "price": 2.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SON",
        "name": "Sonoco Products Company",
        "price": 57.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GDOT",
        "name": "Green Dot Corporation Class A $0.001 par value",
        "price": 37.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ROP",
        "name": "Roper Technologies Inc.",
        "price": 384.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NLS",
        "name": "Nautilus Inc.",
        "price": 3.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SITE",
        "name": "SiteOne Landscape Supply Inc.",
        "price": 117.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RBA",
        "name": "Ritchie Bros. Auctioneers Incorporated",
        "price": 43.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BT",
        "name": "BT Group plc American Depositary Shares",
        "price": 13.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EFR",
        "name": "Eaton Vance Senior Floating-Rate Fund of Beneficial Interest",
        "price": 13.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TEF",
        "name": "Telefonica SA",
        "price": 6.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CSLT",
        "name": "Castlight Health Inc. Class B",
        "price": 1.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KEP",
        "name": "Korea Electric Power Corporation",
        "price": 10.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CEIX",
        "name": "CONSOL Energy Inc.",
        "price": 6.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GIL",
        "name": "Gildan Activewear Inc. Class A Sub. Vot.",
        "price": 27.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NEWM",
        "name": "New Media Investment Group Inc.",
        "price": 6.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KYN",
        "name": "Kayne Anderson MLP Investment Company",
        "price": 13.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NVGS",
        "name": "Navigator Holdings Ltd. (Marshall Islands)",
        "price": 11.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MCC",
        "name": "Medley Capital Corporation",
        "price": 2.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MCY",
        "name": "Mercury General Corporation",
        "price": 51.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AZUL",
        "name": "Azul S.A. American Depositary Shares (each representing three preferred shares)",
        "price": 38.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TCS",
        "name": "Container Store (The)",
        "price": 4.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GATX",
        "name": "GATX Corporation",
        "price": 80.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EPC",
        "name": "Edgewell Personal Care Company",
        "price": 34.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SRG",
        "name": "Seritage Growth Properties Class A",
        "price": 38.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MSM",
        "name": "MSC Industrial Direct Company Inc.",
        "price": 72.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GEF",
        "name": "Greif Inc. Class A",
        "price": 41.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LOMA",
        "name": "Loma Negra Compania Industrial Argentina Sociedad Anonima ADS",
        "price": 6.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HCHC",
        "name": "HC2 Holdings Inc.",
        "price": 4.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GGG",
        "name": "Graco Inc.",
        "price": 56.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TDS",
        "name": "Telephone and Data Systems Inc.",
        "price": 25.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MTH",
        "name": "Meritage Homes Corporation",
        "price": 72.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GNL",
        "name": "Global Net Lease Inc.",
        "price": 21.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BXC",
        "name": "Bluelinx Holdings Inc.",
        "price": 19.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NPO",
        "name": "EnPro Industries Inc",
        "price": 60.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RCI",
        "name": "Rogers Communication Inc.",
        "price": 49.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BSMX",
        "name": "Banco Santander (M?xico) S.A. Instituci?n de Banca M?ltiple Grupo Financiero Santander M?xico",
        "price": 7.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BAK",
        "name": "Braskem SA ADR",
        "price": 14.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SEM",
        "name": "Select Medical Holdings Corporation",
        "price": 26.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "REN",
        "name": "Resolute Energy Corporation Comon Stock",
        "price": 31.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CCU",
        "name": "Compania Cervecerias Unidas S.A.",
        "price": 17.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WAGE",
        "name": "WageWorks Inc.",
        "price": 51.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GEL",
        "name": "Genesis Energy L.P.",
        "price": 15.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HEP",
        "name": "Holly Energy Partners L.P.",
        "price": 23.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GNRC",
        "name": "Generac Holdlings Inc.",
        "price": 116.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WD",
        "name": "Walker & Dunlop Inc",
        "price": 74.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DNB",
        "name": "Dun & Bradstreet Corporation (The)",
        "price": 144.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AMID",
        "name": "American Midstream Partners LP representing Limited Partner Interests",
        "price": 5.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IVC",
        "name": "Invacare Corporation",
        "price": 8.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ITT",
        "name": "ITT Inc.",
        "price": 68.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CHH",
        "name": "Choice Hotels International Inc.",
        "price": 106.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TMK",
        "name": "Torchmark Corporation",
        "price": 88.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TOT",
        "name": "Total S.A.",
        "price": 48.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BDJ",
        "name": "Blackrock Enhanced Equity Dividend Trust",
        "price": 9.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PGTI",
        "name": "PGT Innovations Inc.",
        "price": 17.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MDP",
        "name": "Meredith Corporation",
        "price": 31.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DATA",
        "name": "Tableau Software Inc. Class A",
        "price": 120.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WWE",
        "name": "World Wrestling Entertainment Inc. Class A",
        "price": 47.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RNG",
        "name": "Ringcentral Inc. Class A",
        "price": 243.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EHC",
        "name": "Encompass Health Corporation",
        "price": 82.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DTE",
        "name": "DTE Energy Company",
        "price": 133.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DEA",
        "name": "Easterly Government Properties Inc.",
        "price": 25.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BRS",
        "name": "Bristow Group Inc.",
        "price": 0.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ERF",
        "name": "Enerplus Corporation",
        "price": 5.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ETV",
        "name": "Eaton Vance Corporation Tax-Managed Buy-Write Opportunities Fund of Beneficial Interest",
        "price": 15.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NFG",
        "name": "National Fuel Gas Company",
        "price": 43.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CNNE",
        "name": "Cannae Holdings Inc.",
        "price": 42.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WCC",
        "name": "WESCO International Inc.",
        "price": 48.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BRC",
        "name": "Brady Corporation",
        "price": 48.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AAT",
        "name": "American Assets Trust Inc.",
        "price": 45.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ENR",
        "name": "Energizer Holdings Inc.",
        "price": 51.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NSA",
        "name": "National Storage Affiliates Trust of Beneficial Interest",
        "price": 36.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RFP",
        "name": "Resolute Forest Products Inc.",
        "price": 3.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EE",
        "name": "El Pasoectric Company",
        "price": 68.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "COTV",
        "name": "Cotiviti Holdings Inc.",
        "price": 44.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "USAC",
        "name": "USA Compression Partners LP Representing Limited Partner Interests",
        "price": 15.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WSR",
        "name": "Whitestone REIT",
        "price": 13.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RWT",
        "name": "Redwood Trust Inc.",
        "price": 17.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MCRN",
        "name": "Milacron Holdings Corp.",
        "price": 16.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SFL",
        "name": "Ship Finance International Limited",
        "price": 13.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AME",
        "name": "AMETEK Inc.",
        "price": 100.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DCT",
        "name": "DCT Industrial Trust Inc",
        "price": 66.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SR",
        "name": "Spire Inc.",
        "price": 87.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HRTG",
        "name": "Heritage Insurance Holdings Inc.",
        "price": 12.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AYX",
        "name": "Alteryx Inc. Class A",
        "price": 147.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KEM",
        "name": "KEMET Corporation",
        "price": 26.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BEDU",
        "name": "Bright Scholar Education Holdings Limited American Depositary Shares each representing one Class A",
        "price": 9.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CIB",
        "name": "BanColombia S.A.",
        "price": 54.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PES",
        "name": "Pioneer Energy Services Corp. Common Stk",
        "price": 0.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BLD",
        "name": "TopBuild Corp.",
        "price": 123.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SALT",
        "name": "Scorpio Bulkers Inc.",
        "price": 3.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BHLB",
        "name": "Berkshire Hills Bancorp Inc.",
        "price": 27.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RE",
        "name": "Everest Re Group Ltd.",
        "price": 287.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FBC",
        "name": "Flagstar Bancorp Inc.",
        "price": 35.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CLS",
        "name": "Celestica Inc.",
        "price": 7.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PHK",
        "name": "Pimco High Income Fund",
        "price": 7.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GBX",
        "name": "Greenbrier Companies Inc. (The)",
        "price": 27.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GWR",
        "name": "Genesee & Wyoming Inc. Class A",
        "price": 111.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VRS",
        "name": "Verso Corporation",
        "price": 18.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HUBB",
        "name": "Hubbell Inc",
        "price": 146.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PPDF",
        "name": "PPDAI Group Inc. American Depositary Shares each representing five Class A",
        "price": 2.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GTT",
        "name": "GTT Communications Inc.",
        "price": 14.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PBA",
        "name": "Pembina Pipeline Corp. (Canada)",
        "price": 40.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UAN",
        "name": "CVR Partners LP representing Limited Partner Interests",
        "price": 2.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GMED",
        "name": "Globus Medical Inc. Class A",
        "price": 56.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PB",
        "name": "Prosperity Bancshares Inc.",
        "price": 74.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VVI",
        "name": "Viad Corp",
        "price": 63.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EGL",
        "name": "Engility Holdings Inc.",
        "price": 29.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VSI",
        "name": "Vitamin Shoppe Inc",
        "price": 6.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TU",
        "name": "Telus Corporation",
        "price": 39.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LCII",
        "name": "LCI Industries",
        "price": 115.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ADX",
        "name": "Adams Diversified Equity Fund Inc.",
        "price": 16.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CSU",
        "name": "Capital Senior Living Corporation",
        "price": 2.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HUD",
        "name": "Hudson Ltd. Class A",
        "price": 12.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CHU",
        "name": "China Unicom (Hong Kong) Ltd",
        "price": 8.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "APTS",
        "name": "Preferred Apartment Communities Inc.",
        "price": 12.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JILL",
        "name": "J. Jill Inc.",
        "price": 1.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WWW",
        "name": "Wolverine World Wide Inc.",
        "price": 32.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RPT",
        "name": "Ramco-Gershenson Properties Trust",
        "price": 14.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AFG",
        "name": "American Financial Group Inc.",
        "price": 112.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CYD",
        "name": "China Yuchai International Limited",
        "price": 12.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HIFR",
        "name": "InfraREIT Inc.",
        "price": 21.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FPH",
        "name": "Five Point Holdings LLC Class A",
        "price": 8.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MNR",
        "name": "Monmouth Real Estate Investment Corporation Class A",
        "price": 15.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FN",
        "name": "Fabrinet",
        "price": 63.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CPK",
        "name": "Chesapeake Utilities Corporation",
        "price": 98.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ORC",
        "name": "Orchid Island Capital Inc.",
        "price": 6.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SLF",
        "name": "Sun Life Financial Inc.",
        "price": 49.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KL",
        "name": "Kirkland Lake Gold Ltd.",
        "price": 34.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WK",
        "name": "Workiva Inc. Class A",
        "price": 48.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FUN",
        "name": "Cedar Fair L.P.",
        "price": 53.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CACI",
        "name": "CACI International Inc. Class A",
        "price": 277.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SUPV",
        "name": "Grupo Supervielle S.A. American Depositary Shares each Representing five Class B shares",
        "price": 3.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BOH",
        "name": "Bank of Hawaii Corporation",
        "price": 90.91,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CEPU",
        "name": "Central Puerto S.A. American Depositary Shares (each represents ten)",
        "price": 3.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VVC",
        "name": "Vectren Corporation",
        "price": 72.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ENV",
        "name": "Envestnet Inc",
        "price": 86.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AIN",
        "name": "Albany International Corporation",
        "price": 74.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CAE",
        "name": "CAE Inc.",
        "price": 30.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "QES",
        "name": "Quintana Energy Services Inc.",
        "price": 2.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NUV",
        "name": "Nuveen Municipal Value Fund Inc.",
        "price": 11.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HXL",
        "name": "Hexcel Corporation",
        "price": 76.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SWM",
        "name": "Schweitzer-Mauduit International Inc.",
        "price": 33.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EME",
        "name": "EMCOR Group Inc.",
        "price": 89.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OFG",
        "name": "OFG Bancorp",
        "price": 20.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GLT",
        "name": "Glatfelter",
        "price": 16.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PHG",
        "name": "Koninklijke Philips N.V. NY Registry Shares",
        "price": 48.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CMO",
        "name": "Capstead Mortgage Corporation",
        "price": 8.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BXMX",
        "name": "Nuveen S&P 500 Buy-Write Income Fund of Beneficial Interest",
        "price": 13.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AZO",
        "name": "AutoZone Inc.",
        "price": 1082.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WCG",
        "name": "Wellcare Health Plans Inc.",
        "price": 349.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JKS",
        "name": "JinkoSolar Holding Company Limited American Depositary Shares (each representing 4)",
        "price": 28.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LKSD",
        "name": "LSC Communications Inc.",
        "price": 0.292,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TM",
        "name": "Toyota Motor Corporation",
        "price": 139.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UVV",
        "name": "Universal Corporation",
        "price": 50.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LAD",
        "name": "Lithia Motors Inc.",
        "price": 131.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TWI",
        "name": "Titan International Inc. (DE)",
        "price": 2.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RYAM",
        "name": "Rayonier Advanced Materials Inc.",
        "price": 2.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DCO",
        "name": "Ducommun Incorporated",
        "price": 42.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HYT",
        "name": "Blackrock Corporate High Yield Fund Inc.",
        "price": 11.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FCPT",
        "name": "Four Corners Property Trust Inc.",
        "price": 32.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ENBL",
        "name": "Enable Midstream Partners LP representing limited partner interests",
        "price": 7.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NYRT",
        "name": "New York REIT Inc.",
        "price": 14.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MFG",
        "name": "Mizuho Financial Group Inc. Sponosred ADR (Japan)",
        "price": 2.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SCG",
        "name": "SCANA Corporation",
        "price": 47.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CBB",
        "name": "Cincinnati Bell Inc.",
        "price": 12.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MSG",
        "name": "The Madison Square Garden Company Class A (New)",
        "price": 313.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NVRO",
        "name": "Nevro Corp.",
        "price": 139.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MMS",
        "name": "Maximus Inc.",
        "price": 71.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HTGC",
        "name": "Hercules Capital Inc.",
        "price": 15.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GEN",
        "name": "Genesis Healthcare Inc.",
        "price": 1.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EMES",
        "name": "Emerge Energy Services LP representing Limited Partner Interests",
        "price": 0.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TEP",
        "name": "Tallgrass Energy Partners LP representing limited partner interests",
        "price": 44.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NR",
        "name": "Newpark Resources Inc.",
        "price": 4.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RVT",
        "name": "Royce Value Trust Inc.",
        "price": 15.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FMS",
        "name": "Fresenius Medical Care AG",
        "price": 42.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DST",
        "name": "DST Systems Inc.",
        "price": 84.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EMD",
        "name": "Western Asset Emerging Markets Debt Fund Inc",
        "price": 14.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RDY",
        "name": "Dr. Reddy's Laboratories Ltd",
        "price": 44.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SDRL",
        "name": "Seadrill Limited (Bermuda)",
        "price": 1.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NCI",
        "name": "Navigant Consulting Inc.",
        "price": 22.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TLK",
        "name": "PT Telekomunikasi Indonesia Tbk",
        "price": 26.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HTH",
        "name": "Hilltop Holdings Inc.",
        "price": 22.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PKX",
        "name": "POSCO",
        "price": 44.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WGL",
        "name": "WGL Holdings IncCommon Stock",
        "price": 88.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AXE",
        "name": "Anixter International Inc.",
        "price": 98.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PAG",
        "name": "Penske Automotive Group Inc.",
        "price": 52.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EGIF",
        "name": "Eagle Growth and Income Opportunities Fund of Beneficial Interest",
        "price": 17.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CVRR",
        "name": "CVR Refining LP Representing Limited Partner Interests",
        "price": 10.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RBS",
        "name": "Royal Bank of Scotland Group Plc New (The) ADS",
        "price": 5.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SSTK",
        "name": "Shutterstock Inc.",
        "price": 41.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DCM",
        "name": "NTT DOCOMO Inc American Depositary Shares",
        "price": 26.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BMA",
        "name": "Banco Macro S.A. ADR (representing Ten Class B)",
        "price": 33.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BGG",
        "name": "Briggs & Stratton Corporation",
        "price": 3.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EROS",
        "name": "Eros International PLC A",
        "price": 2.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HIVE",
        "name": "Aerohive Networks Inc.",
        "price": 3.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "INST",
        "name": "Instructure Inc.",
        "price": 48.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FDP",
        "name": "Fresh Del Monte Produce Inc.",
        "price": 30.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EEQ",
        "name": "Enbridge Energy Management LLC Shares repstg limited liability company interests",
        "price": 10.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TLRA",
        "name": "Telaria Inc.",
        "price": 14.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BGY",
        "name": "Blackrock Enhanced International Dividend Trust",
        "price": 5.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AB",
        "name": "AllianceBernstein Holding L.P. Units",
        "price": 35.82,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MSGN",
        "name": "MSG Networks Inc.",
        "price": 14.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NUS",
        "name": "Nu Skin Enterprises Inc.",
        "price": 29.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MD",
        "name": "Mednax Inc.",
        "price": 20.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FTK",
        "name": "Flotek Industries Inc.",
        "price": 1.86,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PAM",
        "name": "Pampa Energia S.A.",
        "price": 13.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JBT",
        "name": "John Bean Technologies Corporation",
        "price": 113.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PJT",
        "name": "PJT Partners Inc. Class A",
        "price": 51.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RUBI",
        "name": "The Rubicon Project Inc.",
        "price": 13.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BKE",
        "name": "Buckle Inc. (The)",
        "price": 25.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RHP",
        "name": "Ryman Hospitality Properties Inc. (REIT)",
        "price": 89.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ADC",
        "name": "Agree Realty Corporation",
        "price": 79.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ENVA",
        "name": "Enova International Inc.",
        "price": 21.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CMRE",
        "name": "Costamare Inc. $0.0001 par value",
        "price": 7.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ARW",
        "name": "Arrow Electronics Inc.",
        "price": 80.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NEA",
        "name": "Nuveen AMT-Free Quality Municipal Income Fund of Beneficial Interest Par Value $.01",
        "price": 14.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AMG",
        "name": "Affiliated Managers Group Inc.",
        "price": 88.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NMR",
        "name": "Nomura Holdings Inc ADR American Depositary Shares",
        "price": 5.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LSI",
        "name": "Life Storage Inc.",
        "price": 117.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TCAP",
        "name": "Triangle Capital Corporation",
        "price": 11.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EPR",
        "name": "EPR Properties",
        "price": 69.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IGD",
        "name": "Voya Global Equity Dividend and Premium Opportunity Fund",
        "price": 6.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GUT",
        "name": "Gabelli Utility Trust (The)",
        "price": 7.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AIT",
        "name": "Applied Industrial Technologies Inc.",
        "price": 67.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MODN",
        "name": "Model N Inc.",
        "price": 33.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SNX",
        "name": "Synnex Corporation",
        "price": 145.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TX",
        "name": "Ternium S.A. American Depositary Shares (each representing ten shares USD1.00 par value)",
        "price": 20.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BSAC",
        "name": "Banco Santander - Chile ADS",
        "price": 18.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PTR",
        "name": "PetroChina Company Limited",
        "price": 43.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SSL",
        "name": "Sasol Ltd. American Depositary Shares",
        "price": 14.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HMN",
        "name": "Horace Mann Educators Corporation",
        "price": 45.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BMI",
        "name": "Badger Meter Inc.",
        "price": 70.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CHCT",
        "name": "Community Healthcare Trust Incorporated",
        "price": 51.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HHC",
        "name": "The Howard Hughes Corporation",
        "price": 129.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PMT",
        "name": "PennyMac Mortgage Investment Trust of Beneficial Interest",
        "price": 23.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SHAK",
        "name": "Shake Shack Inc. Class A",
        "price": 76.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GOLF",
        "name": "Acushnet Holdings Corp.",
        "price": 30.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WTTR",
        "name": "Select Energy Services Inc. Class A",
        "price": 7.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "APU",
        "name": "AmeriGas Partners L.P.",
        "price": 34.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DOOR",
        "name": "Masonite International Corporation (Canada)",
        "price": 86.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EGP",
        "name": "EastGroup Properties Inc.",
        "price": 142.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PSO",
        "name": "Pearson Plc",
        "price": 7.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AOD",
        "name": "Alpine Total Dynamic Dividend Fund",
        "price": 9.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EEX",
        "name": "Emerald Expositions Events Inc.",
        "price": 9.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VCV",
        "name": "Invesco California Value Municipal Income Trust",
        "price": 13.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BIO",
        "name": "Bio-Rad Laboratories Inc. Class A",
        "price": 409.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "E",
        "name": "ENI S.p.A.",
        "price": 27.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KRC",
        "name": "Kilroy Realty Corporation",
        "price": 87.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CRR",
        "name": "Carbo Ceramics Inc.",
        "price": 0.297,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ACCO",
        "name": "Acco Brands Corporation",
        "price": 9.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TRNO",
        "name": "Terreno Realty Corporation",
        "price": 61.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ASGN",
        "name": "On Assignment Inc.",
        "price": 61.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CVNA",
        "name": "Carvana Co. Class A",
        "price": 108.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GER",
        "name": "Goldman Sachs MLP Energy Renaissance Fund",
        "price": 3.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ATKR",
        "name": "Atkore International Group Inc.",
        "price": 42.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SJR",
        "name": "Shaw Communications Inc.",
        "price": 19.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AI",
        "name": "Arlington Asset Investment Corp Class A (new)",
        "price": 6.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SA",
        "name": "Seabridge Gold Inc. (Canada)",
        "price": 13.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NGVT",
        "name": "Ingevity Corporation",
        "price": 62.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BY",
        "name": "Byline Bancorp Inc.",
        "price": 19.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VMI",
        "name": "Valmont Industries Inc.",
        "price": 134.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CHSP",
        "name": "Chesapeake Lodging Trust of Beneficial Interest",
        "price": 28.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HF",
        "name": "HFF Inc. Class A",
        "price": 43.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AYR",
        "name": "Aircastle Limited",
        "price": 32.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CLD",
        "name": "Cloud Peak Energy Inc",
        "price": 0.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FCN",
        "name": "FTI Consulting Inc.",
        "price": 125.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WEX",
        "name": "WEX Inc.",
        "price": 235.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CURO",
        "name": "CURO Group Holdings Corp.",
        "price": 13.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KODK",
        "name": "Eastman Kodak Company Common New",
        "price": 3.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MTRN",
        "name": "Materion Corporation",
        "price": 50.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FI",
        "name": "Frank's International N.V.",
        "price": 3.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SPH",
        "name": "Suburban Propane Partners L.P.",
        "price": 21.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GCAP",
        "name": "GAIN Capital Holdings Inc.",
        "price": 3.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NEWR",
        "name": "New Relic Inc.",
        "price": 60.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VCRA",
        "name": "Vocera Communications Inc.",
        "price": 26.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BZH",
        "name": "Beazer Homes USA Inc.",
        "price": 15.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PRI",
        "name": "Primerica Inc.",
        "price": 136.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TCO",
        "name": "Taubman Centers Inc.",
        "price": 53.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DM",
        "name": "Dominion Energy Midstream Partners LP representing Limited Partner Interests",
        "price": 17.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STAR",
        "name": "iStar Inc.",
        "price": 16.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LTC",
        "name": "LTC Properties Inc.",
        "price": 48.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ELS",
        "name": "Equity Lifestyle Properties Inc.",
        "price": 77.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TGS",
        "name": "Transportadora de Gas del Sur SA TGS",
        "price": 6.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CDR",
        "name": "Cedar Realty Trust Inc.",
        "price": 2.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BIF",
        "name": "Boulder Growth & Income Fund Inc.",
        "price": 11.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ASIX",
        "name": "AdvanSix Inc.",
        "price": 19.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GMZ",
        "name": "Goldman Sachs MLP Income Opportunities Fund",
        "price": 5.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TEO",
        "name": "Telecom Argentina SA",
        "price": 11.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HMI",
        "name": "Huami Corporation American Depositary Shares each representing four Class A",
        "price": 14.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SRT",
        "name": "StarTek Inc.",
        "price": 7.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CBZ",
        "name": "CBIZ Inc.",
        "price": 27.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IPOA",
        "name": "Social Capital Hedosophia Holdings Corp. Class A par value $0.0001",
        "price": 10.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RQI",
        "name": "Cohen & Steers Quality Income Realty Fund Inc",
        "price": 14.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RRTS",
        "name": "Roadrunner Transportation Systems Inc",
        "price": 7.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OGS",
        "name": "ONE Gas Inc.",
        "price": 95.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CMD",
        "name": "Cantel Medical Corp.",
        "price": 70.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RBC",
        "name": "Regal Beloit Corporation",
        "price": 89.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CIO",
        "name": "City Office REIT Inc.",
        "price": 13.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NWE",
        "name": "NorthWestern Corporation",
        "price": 79.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PLT",
        "name": "Plantronics Inc.",
        "price": 14.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GOL",
        "name": "Gol Linhas Aereas Inteligentes S.A. Sponsored ADR representing 2 Pfd Shares",
        "price": 15.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ELF",
        "name": "e.l.f. Beauty Inc.",
        "price": 19.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VAC",
        "name": "Marriot Vacations Worldwide Corporation",
        "price": 128.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VEC",
        "name": "Vectrus Inc.",
        "price": 57.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WBK",
        "name": "Westpac Banking Corporation",
        "price": 17.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FGP",
        "name": "Ferrellgas Partners L.P.",
        "price": 0.3701,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IIF",
        "name": "Morgan Stanley India Investment Fund Inc.",
        "price": 20.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AIR",
        "name": "AAR Corp.",
        "price": 44.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "POL",
        "name": "PolyOne Corporation",
        "price": 31.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EBR",
        "name": "Centrais Electricas Brasileiras S A American Depositary Shares (Each representing one)",
        "price": 8.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HASI",
        "name": "Hannon Armstrong Sustainable Infrastructure Capital Inc.",
        "price": 38.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CVI",
        "name": "CVR Energy Inc.",
        "price": 35.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AWF",
        "name": "Alliancebernstein Global High Income Fund",
        "price": 12.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BXG",
        "name": "Bluegreen Vacations Corporation",
        "price": 9.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FBK",
        "name": "FB Financial Corporation",
        "price": 36.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ACC",
        "name": "American Campus Communities Inc",
        "price": 48.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RELX",
        "name": "RELX PLC PLC American Depositary Shares (Each representing One)",
        "price": 27.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JE",
        "name": "Just Energy Group Inc. (Canada)",
        "price": 0.9956,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RGS",
        "name": "Regis Corporation",
        "price": 13.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ITGR",
        "name": "Integer Holdings Corporation",
        "price": 98.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BPI",
        "name": "Bridgepoint Education Inc.",
        "price": 6.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KRO",
        "name": "Kronos Worldwide Inc",
        "price": 11.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SB",
        "name": "Safe Bulkers Inc ($0.001 par value)",
        "price": 1.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CCO",
        "name": "Clear Channel Outdoor Holdings Inc. Class A",
        "price": 2.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EBS",
        "name": "Emergent Biosolutions Inc.",
        "price": 64.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EURN",
        "name": "Euronav NV",
        "price": 9.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "QTWO",
        "name": "Q2 Holdings Inc.",
        "price": 89.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NOA",
        "name": "North American Energy Partners Inc. (no par)",
        "price": 10.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CALX",
        "name": "Calix Inc",
        "price": 10.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RSO",
        "name": "Resource Capital Corp.",
        "price": 9.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AHT",
        "name": "Ashford Hospitality Trust Inc",
        "price": 2.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TGH",
        "name": "Textainer Group Holdings Limited",
        "price": 10.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EVA",
        "name": "Enviva Partners LP representing limited partner interests",
        "price": 38.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ATR",
        "name": "AptarGroup Inc.",
        "price": 114.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ABG",
        "name": "Asbury Automotive Group Inc",
        "price": 99.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DS",
        "name": "Drive Shack Inc.",
        "price": 3.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ARR",
        "name": "ARMOUR Residential REIT Inc.",
        "price": 21.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ATGE",
        "name": "Adtalem Global Education Inc.",
        "price": 34.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WHD",
        "name": "Cactus Inc. Class A",
        "price": 29.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JPS",
        "name": "Nuveen Preferred & Income Securities Fund",
        "price": 10.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FSB",
        "name": "Franklin Financial Network Inc.",
        "price": 37.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CATO",
        "name": "Cato Corporation (The) Class A",
        "price": 17.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MTX",
        "name": "Minerals Technologies Inc.",
        "price": 55.82,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BOE",
        "name": "Blackrock Enhanced Global Dividend Trust of Beneficial Interest",
        "price": 10.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FENG",
        "name": "Phoenix New Media Limited American Depositary Shares each representing 8 Class A.",
        "price": 1.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TREX",
        "name": "Trex Company Inc.",
        "price": 106.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FTS",
        "name": "Fortis Inc.",
        "price": 44.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CCS",
        "name": "Century Communities Inc.",
        "price": 38.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CLB",
        "name": "Core Laboratories N.V.",
        "price": 32.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CIT",
        "name": "CIT Group Inc (DEL)",
        "price": 47.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UTI",
        "name": "Universal Technical Institute Inc",
        "price": 8.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BGB",
        "name": "Blackstone \/ GSO Strategic Credit Fund",
        "price": 14.91,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IBP",
        "name": "Installed Building Products Inc.",
        "price": 77.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JMF",
        "name": "Nuveen Energy MLP Total Return Fund of Beneficial Interest",
        "price": 7.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RNGR",
        "name": "Ranger Energy Services Inc. Class A",
        "price": 7.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RACE",
        "name": "Ferrari N.V.",
        "price": 177.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ROL",
        "name": "Rollins Inc.",
        "price": 39.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KOP",
        "name": "Koppers Holdings Inc.",
        "price": 29.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ESL",
        "name": "Esterline Technologies Corporation",
        "price": 122.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HI",
        "name": "Hillenbrand Inc",
        "price": 26.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WBAI",
        "name": "500.com Limited American Depositary Shares each representing 10 Class A shares",
        "price": 6.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ETY",
        "name": "Eaton Vance Tax-Managed Diversified Equity Income Fund of Beneficial Interest",
        "price": 12.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GLP",
        "name": "Global Partners LP representing Limited Partner Interests",
        "price": 19.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RYB",
        "name": "RYB Education Inc. American depositary shares each representing one Class A",
        "price": 5.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MAIN",
        "name": "Main Street Capital Corporation",
        "price": 44.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DQ",
        "name": "DAQO New Energy Corp. American Depositary Shares each representing five",
        "price": 76.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TYL",
        "name": "Tyler Technologies Inc.",
        "price": 334.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AVAL",
        "name": "Grupo Aval Acciones y Valores S.A. ADR (Each representing 20 preferred shares)",
        "price": 8.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PER",
        "name": "SandRidge Permian Trust of Benficial Interest",
        "price": 0.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SEND",
        "name": "SendGrid Inc.",
        "price": 54.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FPL",
        "name": "First Trust New Opportunities MLP & Energy Fund of Beneficial Interest",
        "price": 9.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MOV",
        "name": "Movado Group Inc.",
        "price": 16.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HSEB",
        "name": "HSBC Holdings plc PERP SUB CAP SECS EXCH PREF SHS SER 2 (United Kingdom)",
        "price": 26.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GTS",
        "name": "Triple-S Management Corporation Class B",
        "price": 17.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JRO",
        "name": "Nuveen Floating Rate Income Opportuntiy Fund Shares of Beneficial Interest",
        "price": 9.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ARC",
        "name": "ARC Document Solutions Inc.",
        "price": 1.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KFY",
        "name": "Korn\/Ferry International",
        "price": 42.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GIB",
        "name": "CGI Group Inc.",
        "price": 75.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BCEI",
        "name": "Bonanza Creek Energy Inc.",
        "price": 18.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DFIN",
        "name": "Donnelley Financial Solutions Inc.",
        "price": 10.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NNI",
        "name": "Nelnet Inc.",
        "price": 58.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EVF",
        "name": "Eaton Vance Senior Income Trust",
        "price": 6.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NTG",
        "name": "Tortoise MLP Fund Inc.",
        "price": 9.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ZOES",
        "name": "Zoe's Kitchen Inc.",
        "price": 12.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RMAX",
        "name": "RE\/MAX Holdings Inc. Class A",
        "price": 40.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HRI",
        "name": "Herc Holdings Inc.",
        "price": 44.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LDL",
        "name": "Lydall Inc.",
        "price": 21.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PRLB",
        "name": "Proto Labs Inc.",
        "price": 99.82,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BIT",
        "name": "BlackRock Multi-Sector Income Trust of Beneficial Interest",
        "price": 16.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MMI",
        "name": "Marcus & Millichap Inc.",
        "price": 36.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CR",
        "name": "Crane Company",
        "price": 86.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CEQP",
        "name": "Crestwood Equity Partners LP",
        "price": 26.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LNN",
        "name": "Lindsay Corporation",
        "price": 105.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CLNC",
        "name": "Colony NorthStar Credit Real Estate Inc. Class A",
        "price": 13.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GDV",
        "name": "Gabelli Dividend & Income Trust of Beneficial Interest",
        "price": 22.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JONE",
        "name": "Jones Energy Inc. Class A",
        "price": 2.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PEN",
        "name": "Penumbra Inc.",
        "price": 191.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AGR",
        "name": "Avangrid Inc.",
        "price": 55.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TKC",
        "name": "Turkcell Iletisim Hizmetleri AS",
        "price": 5.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VMO",
        "name": "Invesco Municipal Opportunity Trust",
        "price": 12.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CRK",
        "name": "Comstock Resources Inc.",
        "price": 6.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NWN",
        "name": "Northwest Natural Gas Company",
        "price": 76.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TSQ",
        "name": "Townsquare Media Inc. Class A",
        "price": 10.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CODI",
        "name": "Compass Diversified Holdings Shares of Beneficial Interest",
        "price": 22.91,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WAAS",
        "name": "AquaVenture Holdings Limited",
        "price": 27.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IGR",
        "name": "CBRE Clarion Global Real Estate Income Fund",
        "price": 8.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SAM",
        "name": "Boston Beer Company Inc. (The)",
        "price": 396.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DSX",
        "name": "Diana Shipping inc.",
        "price": 2.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IIPR",
        "name": "Innovative Industrial Properties Inc.",
        "price": 107.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HEQ",
        "name": "John Hancock Hedged Equity & Income Fund of Beneficial Interest",
        "price": 15.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TNH",
        "name": "Terra Nitrogen Company L.P.",
        "price": 83.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BPMP",
        "name": "BP Midstream Partners LP representing Limited Partner Interests",
        "price": 14.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PJC",
        "name": "Piper Jaffray Companies",
        "price": 79.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CEN",
        "name": "Center Coast Brookfield MLP & Energy Infrastructure Fund",
        "price": 5.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UNF",
        "name": "Unifirst Corporation",
        "price": 205.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EMO",
        "name": "ClearBridge Energy MLP Opportunity Fund Inc.",
        "price": 8.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NEP",
        "name": "NextEra Energy Partners LP representing limited partner interests",
        "price": 61.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CNA",
        "name": "CNA Financial Corporation",
        "price": 50.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CRY",
        "name": "CryoLife Inc.",
        "price": 26.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SSD",
        "name": "Simpson Manufacturing Company Inc.",
        "price": 84.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BEL",
        "name": "Belmond Ltd. Class A",
        "price": 25.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TSLX",
        "name": "TPG Specialty Lending Inc.",
        "price": 23.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TNC",
        "name": "Tennant Company",
        "price": 83.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OZM",
        "name": "Och-Ziff Capital Management Group LLC Class A Shares representing Class A limited liability company interests",
        "price": 18.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UGP",
        "name": "Ultrapar Participacoes S.A. (New) American Depositary Shares (Each representing one)",
        "price": 4.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CO",
        "name": "Global Cord Blood Corporation",
        "price": 4.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TDY",
        "name": "Teledyne Technologies Incorporated",
        "price": 392.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SFE",
        "name": "Safeguard Scientifics Inc.",
        "price": 9.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TRTX",
        "name": "TPG RE Finance Trust Inc.",
        "price": 20.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CSS",
        "name": "CSS Industries Inc.",
        "price": 9.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SRI",
        "name": "Stoneridge Inc.",
        "price": 29.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MEI",
        "name": "Methode Electronics Inc.",
        "price": 34.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "USPH",
        "name": "U.S. Physical Therapy Inc.",
        "price": 132.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JOE",
        "name": "St. Joe Company (The)",
        "price": 21.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TARO",
        "name": "Taro Pharmaceutical Industries Ltd.",
        "price": 72.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HIX",
        "name": "Western Asset High Income Fund II Inc.",
        "price": 7.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TRTN",
        "name": "Triton International Limited",
        "price": 38.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PARR",
        "name": "Par Pacific Holdings Inc.",
        "price": 20.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OSB",
        "name": "Norbord Inc.",
        "price": 32.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ASA",
        "name": "ASA Gold and Precious Metals Limited",
        "price": 14.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NNA",
        "name": "Navios Maritime Acquisition Corporation",
        "price": 5.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "REX",
        "name": "REX American Resources Corporation",
        "price": 79.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EXTN",
        "name": "Exterran Corporation",
        "price": 6.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CBPX",
        "name": "Continental Building Products Inc.",
        "price": 36.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AWP",
        "name": "Alpine Global Premier Properties Fund of Beneficial Interest",
        "price": 6.86,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FPI",
        "name": "Farmland Partners Inc.",
        "price": 6.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GLOB",
        "name": "Globant S.A.",
        "price": 125.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BNED",
        "name": "Barnes & Noble Education Inc",
        "price": 3.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CPF",
        "name": "Central Pacific Financial Corp New",
        "price": 28.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DSL",
        "name": "DoubleLine Income Solutions Fund of Beneficial Interests",
        "price": 20.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PBFX",
        "name": "PBF Logistics LP representing limited partner interests",
        "price": 21.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RCUS",
        "name": "Arcus Biosciences Inc.",
        "price": 15.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AMRC",
        "name": "Ameresco Inc. Class A",
        "price": 23.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TOWR",
        "name": "Tower International Inc.",
        "price": 18.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SD",
        "name": "SandRidge Energy Inc.",
        "price": 2.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "THG",
        "name": "Hanover Insurance Group Inc",
        "price": 137.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NOAH",
        "name": "Noah Holdings Limited",
        "price": 32.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IDA",
        "name": "IDACORP Inc.",
        "price": 111.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MED",
        "name": "MEDIFAST INC",
        "price": 101.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ETJ",
        "name": "Eaton Vance Risk-Managed Diversified Equity Income Fund of Beneficial Interest",
        "price": 9.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NSL",
        "name": "Nuveen Senior Income Fund",
        "price": 6.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RTEC",
        "name": "Rudolph Technologies Inc.",
        "price": 23.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WMK",
        "name": "Weis Markets Inc.",
        "price": 37.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IDT",
        "name": "IDT Corporation Class B",
        "price": 8.77,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AHP",
        "name": "Ashford Hospitality Prime Inc.",
        "price": 10.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ROYT",
        "name": "Pacific Coast Oil Trust Units of Beneficial Interest",
        "price": 0.3875,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TNP",
        "name": "Tsakos Energy Navigation Ltd",
        "price": 3.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NGS",
        "name": "Natural Gas Services Group Inc.",
        "price": 11.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AGS",
        "name": "PlayAGS Inc.",
        "price": 10.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GPRK",
        "name": "Geopark Ltd",
        "price": 19.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FOR",
        "name": "Forestar Group Inc",
        "price": 21.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PPT",
        "name": "Putnam Premier Income Trust",
        "price": 5.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VLRS",
        "name": "Controladora Vuela Compania de Aviacion S.A.B. de C.V. American Depositary Shares each representing ten (10) Ordinary Participation Certificates",
        "price": 13.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CIR",
        "name": "CIRCOR International Inc.",
        "price": 42.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "THR",
        "name": "Thermon Group Holdings Inc.",
        "price": 21.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RNR",
        "name": "RenaissanceRe Holdings Ltd.",
        "price": 196.77,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CHE",
        "name": "Chemed Corp",
        "price": 487.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DHX",
        "name": "DHI Group Inc.",
        "price": 2.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EHIC",
        "name": "eHi Car Services Limited American Depositary Shares",
        "price": 12.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WG",
        "name": "Willbros Group Inc. (DE)",
        "price": 0.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MUC",
        "name": "Blackrock MuniHoldings California Quality Fund Inc.",
        "price": 14.495,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SMI",
        "name": "Semiconductor Manufacturing International Corporation ADR",
        "price": 5.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KMG",
        "name": "KMG Chemicals Inc.",
        "price": 75.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NSP",
        "name": "Insperity Inc.",
        "price": 72.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BBN",
        "name": "BlackRock Taxable Municipal Bond Trust of Beneficial Interest",
        "price": 25.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NZF",
        "name": "Nuveen Municipal Credit Income Fund",
        "price": 16.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "XOXO",
        "name": "XO Group Inc.",
        "price": 34.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LKM",
        "name": "Link Motion Inc. American Depositary Shares each representing five Class A",
        "price": 0.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CBU",
        "name": "Community Bank System Inc.",
        "price": 69.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NX",
        "name": "Quanex Building Products Corporation",
        "price": 19.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EARN",
        "name": "Ellington Residential Mortgage REIT of Beneficial Interest",
        "price": 11.86,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AVX",
        "name": "AVX Corporation",
        "price": 20.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PFSI",
        "name": "PennyMac Financial Services Inc. Class A",
        "price": 35.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DSE",
        "name": "Duff & Phelps Select Energy MLP Fund Inc.",
        "price": 3.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AQN",
        "name": "Algonquin Power & Utilities Corp.",
        "price": 16.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EDD",
        "name": "Morgan Stanley Emerging Markets Domestic Debt Fund Inc.",
        "price": 6.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FEI",
        "name": "First Trust MLP and Energy Income Fund of Beneficial Interest",
        "price": 11.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GPX",
        "name": "GP Strategies Corporation",
        "price": 13.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MCA",
        "name": "Blackrock MuniYield California Quality Fund Inc.",
        "price": 14.803,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VOC",
        "name": "VOC Energy Trust Units of Beneficial Interest",
        "price": 4.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SRV",
        "name": "Cushing MLP & Infrastructure Total Return Fund",
        "price": 9.905,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ETO",
        "name": "Eaton Vance Tax-Advantage Global Dividend Opp",
        "price": 26.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CRCM",
        "name": "Care.com Inc.",
        "price": 15.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ASR",
        "name": "Grupo Aeroportuario del Sureste S.A. de C.V.",
        "price": 196.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PSB",
        "name": "PS Business Parks Inc.",
        "price": 167.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MN",
        "name": "Manning & Napier Inc. Class A",
        "price": 1.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AFI",
        "name": "Armstrong Flooring Inc.",
        "price": 3.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ICD",
        "name": "Independence Contract Drilling Inc.",
        "price": 0.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CW",
        "name": "Curtiss-Wright Corporation",
        "price": 144.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ALE",
        "name": "Allete Inc.",
        "price": 79.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "Y",
        "name": "Alleghany Corporation",
        "price": 800.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HZN",
        "name": "Horizon Global Corporation",
        "price": 3.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AQ",
        "name": "Aquantia Corp.",
        "price": 13.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KOF",
        "name": "Coca Cola Femsa S.A.B. de C.V.",
        "price": 62.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PHI",
        "name": "PLDT Inc. Sponsored ADR",
        "price": 20.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CTR",
        "name": "ClearBridge Energy MLP Total Return Fund Inc.",
        "price": 8.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MFL",
        "name": "Blackrock MuniHoldings Investment Quality Fund of Beneficial Interest",
        "price": 13.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ORA",
        "name": "Ormat Technologies Inc.",
        "price": 86.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ESTE",
        "name": "Earthstone Energy Inc. Class A",
        "price": 4.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VKQ",
        "name": "Invesco Municipal Trust",
        "price": 12.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RAS",
        "name": "RAIT Financial Trust of Beneficial Interest",
        "price": 0.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WMC",
        "name": "Western Asset Mortgage Capital Corporation",
        "price": 11.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AUO",
        "name": "AU Optronics Corp American Depositary Shares",
        "price": 2.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LEJU",
        "name": "Leju Holdings Limited American Depositary Shares each representing one",
        "price": 1.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NCZ",
        "name": "AllianzGI Convertible & Income Fund II of Beneficial Interest",
        "price": 5.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UTF",
        "name": "Cohen & Steers Infrastructure Fund Inc",
        "price": 27.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GHY",
        "name": "Prudential Global Short Duration High Yield Fund Inc.",
        "price": 15.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PAC",
        "name": "Grupo Aeroportuario Del Pacifico S.A. B. de C.V. de C.V. (each representing 10 Series B shares)",
        "price": 130.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KYO",
        "name": "Kyocera Corporation",
        "price": 55.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AZZ",
        "name": "AZZ Inc.",
        "price": 43.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SJT",
        "name": "San Juan Basin Royalty Trust",
        "price": 2.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DX",
        "name": "Dynex Capital Inc.",
        "price": 20.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IO",
        "name": "Ion Geophysical Corporation",
        "price": 4.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BLX",
        "name": "Banco Latinoamericano de Comercio Exterior S.A.",
        "price": 20.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SXCP",
        "name": "SunCoke Energy Partners L.P. Representing Limited partner Interests",
        "price": 10.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EFC",
        "name": "Ellington Financial LLC representing Limitied Liability Company Interests no par valu",
        "price": 19.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ACP",
        "name": "Aberdeen Income Credit Strategies Fund",
        "price": 12.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ICL",
        "name": "Israel Chemicals Limited",
        "price": 3.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MIE",
        "name": "Cohen & Steers MLP Income and Energy Opportunity Fund Inc.",
        "price": 7.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MSF",
        "name": "Morgan Stanley Emerging Markets Fund Inc.",
        "price": 16.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NHF",
        "name": "NexPoint Strategic Opportunities Fund",
        "price": 17.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PHD",
        "name": "Pioneer Floating Rate Trust Shares of Beneficial Interest",
        "price": 11.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "INB",
        "name": "Cohen & Steers Global Income Builder Inc. of Beneficial Interest",
        "price": 9.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SMHI",
        "name": "SEACOR Marine Holdings Inc.",
        "price": 8.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AVH",
        "name": "Avianca Holdings S.A. American Depositary Shares (Each representing 8 preferred Shares)",
        "price": 5.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TOO",
        "name": "Teekay Offshore Partners L.P. representing Limited Partner Interests",
        "price": 1.545,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HNI",
        "name": "HNI Corporation",
        "price": 40.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NEU",
        "name": "NewMarket Corp",
        "price": 431.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TIER",
        "name": "TIER REIT Inc.",
        "price": 27.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FSS",
        "name": "Federal Signal Corporation",
        "price": 32.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HCI",
        "name": "HCI Group Inc.",
        "price": 45.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NXRT",
        "name": "NexPoint Residential Trust Inc.",
        "price": 50.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HOS",
        "name": "Hornbeck Offshore Services",
        "price": 0.2998,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ISD",
        "name": "Prudential Short Duration High Yield Fund Inc.",
        "price": 15.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MRIN",
        "name": "Marin Software Incorporated",
        "price": 1.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NUM",
        "name": "Nuveen Michigan Quality Municipal Income Fund",
        "price": 14.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NVG",
        "name": "Nuveen AMT-Free Municipal Credit Income Fund",
        "price": 16.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PHT",
        "name": "Pioneer High Income Trust of Beneficial Interest",
        "price": 9.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PIM",
        "name": "Putnam Master Intermediate Income Trust",
        "price": 4.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RLH",
        "name": "Red Lions Hotels Corporation",
        "price": 2.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TYG",
        "name": "Tortoise Energy Infrastructure Corporation",
        "price": 16.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FRO",
        "name": "Frontline Ltd.",
        "price": 8.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HY",
        "name": "Hyster-Yale Materials Handling Inc. Class A",
        "price": 52.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CLH",
        "name": "Clean Harbors Inc.",
        "price": 88.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "USNA",
        "name": "USANA Health Sciences Inc.",
        "price": 71.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WGP",
        "name": "Western Gas Equity Partners LP Representing Limited Partner Interests",
        "price": 32.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WPP",
        "name": "WPP plc American Depositary Shares",
        "price": 63.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AOI",
        "name": "Alliance One International Inc.",
        "price": 23.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CKH",
        "name": "SEACOR Holdings Inc.",
        "price": 42.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IFN",
        "name": "India Fund Inc. (The)",
        "price": 20.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OBE",
        "name": "Obsidian Energy Ltd.",
        "price": 0.7076,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RST",
        "name": "Rosetta Stone Inc.",
        "price": 19.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TLI",
        "name": "Western Asset Corporate Loan Fund Inc",
        "price": 10.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TREC",
        "name": "Trecora Resources",
        "price": 6.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MATX",
        "name": "Matson Inc.",
        "price": 37.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PKE",
        "name": "Park Electrochemical Corporation",
        "price": 16.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JRS",
        "name": "Nuveen Real Estate Income Fund of Beneficial Interest",
        "price": 11.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FFG",
        "name": "FBL Financial Group Inc.",
        "price": 57.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MAXR",
        "name": "Maxar Technologies Ltd.",
        "price": 17.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OXM",
        "name": "Oxford Industries Inc.",
        "price": 67.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PKD",
        "name": "Parker Drilling Company",
        "price": 14.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BPK",
        "name": "Blackrock Municipal 2018 Term Trust",
        "price": 14.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JDD",
        "name": "Nuveen Diversified Dividend and Income Fund Shares of Beneficial Interest",
        "price": 11.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SMLP",
        "name": "Summit Midstream Partners LP Representing Limited Partner Interests",
        "price": 2.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GTY",
        "name": "Getty Realty Corporation",
        "price": 32.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WTS",
        "name": "Watts Water Technologies Inc. Class A",
        "price": 106.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BFZ",
        "name": "BlackRock California Municipal Income Trust",
        "price": 14.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CPL",
        "name": "CPFL Energia S.A. American Depositary Shares",
        "price": 17.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ECOM",
        "name": "ChannelAdvisor Corporation",
        "price": 10.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CEO",
        "name": "CNOOC Limited",
        "price": 158.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BBW",
        "name": "Build-A-Bear Workshop Inc.",
        "price": 4.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NRK",
        "name": "Nuveen New York AMT-Free Quality Municipal Income Fund",
        "price": 13.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AVK",
        "name": "Advent Claymore Convertible Securities and Income Fund",
        "price": 16.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HIO",
        "name": "Western Asset High Income Opportunity Fund Inc.",
        "price": 5.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LN",
        "name": "LINE Corporation American Depositary Shares (each representing one share of)",
        "price": 48.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NMZ",
        "name": "Nuveen Municipal High Income Opportunity Fund $0.01 par value per share",
        "price": 14.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PTY",
        "name": "Pimco Corporate & Income Opportunity Fund",
        "price": 19.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SGY",
        "name": "Stone Energy Corporation",
        "price": 35.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TR",
        "name": "Tootsie Roll Industries Inc.",
        "price": 35.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CABO",
        "name": "Cable One Inc.",
        "price": 1770.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AAC",
        "name": "AAC Holdings Inc.",
        "price": 1.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BCX",
        "name": "BlackRock Resources of Beneficial Interest",
        "price": 7.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GIM",
        "name": "Templeton Global Income Fund Inc.",
        "price": 6.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GPM",
        "name": "Guggenheim Enhanced Equity Income Fund",
        "price": 8.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AGM",
        "name": "Federal Agricultural Mortgage Corporation",
        "price": 72.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KEG",
        "name": "Key Energy Services Inc.",
        "price": 0.266,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UMH",
        "name": "UMH Properties Inc.",
        "price": 16.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FIX",
        "name": "Comfort Systems USA Inc.",
        "price": 49.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RENX",
        "name": "RELX N.V. American Depositary Shares (Each representing One)",
        "price": 21.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HQH",
        "name": "Tekla Healthcare Investors",
        "price": 21.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CAF",
        "name": "Morgan Stanley China A Share Fund Inc.",
        "price": 20.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CAI",
        "name": "CAI International Inc.",
        "price": 28.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GLOP",
        "name": "GasLog Partners LP representing limited partnership interests",
        "price": 4.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MG",
        "name": "Mistras Group Inc",
        "price": 10.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OIA",
        "name": "Invesco Municipal Income Opportunities Trust",
        "price": 8.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PCK",
        "name": "Pimco California Municipal Income Fund II of Beneficial Interest",
        "price": 9.9837,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TEI",
        "name": "Templeton Emerging Markets Income Fund Inc.",
        "price": 9.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UNT",
        "name": "Unit Corporation",
        "price": 0.3425,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VHI",
        "name": "Valhi Inc.",
        "price": 1.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PUK",
        "name": "Prudential Public Limited Company",
        "price": 38.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JAX",
        "name": "J. Alexander's Holdings Inc.",
        "price": 10.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ARA",
        "name": "American Renal Associates Holdings Inc",
        "price": 8.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DLB",
        "name": "Dolby Laboratories",
        "price": 72.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TPB",
        "name": "Turning Point Brands Inc.",
        "price": 23.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CII",
        "name": "Blackrock Capital and Income Fund Inc.",
        "price": 17.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "THQ",
        "name": "Tekla Healthcare Opportunies Fund Shares of Beneficial Interest",
        "price": 19.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MCR",
        "name": "MFS Charter Income Trust",
        "price": 8.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BTO",
        "name": "John Hancock Financial Opportunities Fund",
        "price": 34.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BIP",
        "name": "Brookfield Infrastructure Partners LP Limited Partnership Units",
        "price": 56.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WIW",
        "name": "Western Asset\/Claymore Inflation-Linked Opportunities & Income Fund of Beneficial Interest",
        "price": 11.91,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MCS",
        "name": "Marcus Corporation (The)",
        "price": 33.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CIA",
        "name": "Citizens Inc. Class A ($1.00 Par)",
        "price": 6.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CLW",
        "name": "Clearwater Paper Corporation",
        "price": 28.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CEM",
        "name": "ClearBridge Energy MLP Fund Inc.",
        "price": 10.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GMRE",
        "name": "Global Medical REIT Inc.",
        "price": 15.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IHD",
        "name": "Voya Emerging Markets High Income Dividend Equity Fund",
        "price": 7.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ORN",
        "name": "Orion Group Holdings Inc. Common",
        "price": 4.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MKL",
        "name": "Markel Corporation",
        "price": 1341.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EOI",
        "name": "Eaton Vance Enhance Equity Income Fundd Equity Income Fund Shares of Beneficial Interest",
        "price": 16.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KYE",
        "name": "Kayne Anderson Total Energy Return Fund Inc.",
        "price": 9.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FICO",
        "name": "Fair Isaac Corproation",
        "price": 420.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GRC",
        "name": "Gorman-Rupp Company (The)",
        "price": 36.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OLP",
        "name": "One Liberty Properties Inc.",
        "price": 28.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PZN",
        "name": "Pzena Investment Management Inc Class A",
        "price": 7.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SJW",
        "name": "SJW Group (DE)",
        "price": 71.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GFF",
        "name": "Griffon Corporation",
        "price": 20.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LEO",
        "name": "Dreyfus Strategic Municipals Inc.",
        "price": 8.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FLY",
        "name": "Fly Leasing Limited",
        "price": 18.82,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AGX",
        "name": "Argan Inc.",
        "price": 46.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SMP",
        "name": "Standard Motor Products Inc.",
        "price": 51.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BSE",
        "name": "Blackrock New York Municipal Income Quality Trust of Beneficial Interest",
        "price": 14.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CGG",
        "name": "CGG",
        "price": 2.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GNK",
        "name": "Genco Shipping & Trading Limited New (Marshall Islands)",
        "price": 8.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HQL",
        "name": "TeklaLife Sciences Investors",
        "price": 17.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IGI",
        "name": "Western Asset Investment Grade Defined Opportunity Trust Inc.",
        "price": 21.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PFN",
        "name": "PIMCO Income Strategy Fund II",
        "price": 10.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EIG",
        "name": "Employers Holdings Inc",
        "price": 41.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BST",
        "name": "BlackRock Science and Technology Trust of Beneficial Interest",
        "price": 35.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STK",
        "name": "Columbia Seligman Premium Technology Growth Fund Inc",
        "price": 24.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DNP",
        "name": "DNP Select Income Fund Inc.",
        "price": 12.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "INSW",
        "name": "International Seaways Inc.",
        "price": 20.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NCV",
        "name": "AllianzGI Convertible & Income Fund",
        "price": 6.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PCN",
        "name": "Pimco Corporate & Income Strategy Fund",
        "price": 20.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CHT",
        "name": "Chunghwa Telecom Co. Ltd.",
        "price": 36.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SLD",
        "name": "Sutherland Asset Management Corporation",
        "price": 16.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ETW",
        "name": "Eaton Vance Corporation Tax-Managed Global Buy-Write Opportunites Fund of Beneficial Interest",
        "price": 10.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KAMN",
        "name": "Kaman Corporation",
        "price": 64.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "USM",
        "name": "United States Cellular Corporation",
        "price": 36.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TDW",
        "name": "Tidewater Inc.",
        "price": 16.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HIL",
        "name": "Hill International Inc.",
        "price": 3.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NAD",
        "name": "Nuveen Quality Municipal Income Fund",
        "price": 14.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OOMA",
        "name": "Ooma Inc.",
        "price": 13.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MSL",
        "name": "MidSouth Bancorp",
        "price": 11.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UVE",
        "name": "UNIVERSAL INSURANCE HOLDINGS INC",
        "price": 23.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BTZ",
        "name": "BlackRock Credit Allocation Income Trust",
        "price": 14.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CXE",
        "name": "MFS High Income Municipal Trust",
        "price": 5.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DPG",
        "name": "Duff & Phelps Global Utility Income Fund Inc.",
        "price": 15.91,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FFC",
        "name": "Flaherty & Crumrine Preferred Securities Income Fund Incorporated",
        "price": 22.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FPF",
        "name": "First Trust Intermediate Duration Preferred & Income Fund of Beneficial Interest",
        "price": 24.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MIXT",
        "name": "MiX Telematics Limited American Depositary Shares each representing 25",
        "price": 13.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MTL",
        "name": "Mechel PAO American Depositary Shares (Each rep. 1)",
        "price": 3.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NL",
        "name": "NL Industries Inc.",
        "price": 3.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PCI",
        "name": "PIMCO Dynamic Credit and Mortgage Income Fund of Beneficial Interest",
        "price": 25.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VTA",
        "name": "Invesco Credit Opportunities Fund of Beneficial Interest",
        "price": 11.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SHG",
        "name": "Shinhan Financial Group Co Ltd American Depositary Shares",
        "price": 29.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MQT",
        "name": "Blackrock MuniYield Quality Fund II Inc.",
        "price": 13.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CORR",
        "name": "CorEnergy Infrastructure Trust Inc.",
        "price": 45.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "REV",
        "name": "Revlon Inc.",
        "price": 20.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EGY",
        "name": "VAALCO Energy Inc.",
        "price": 2.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CBA",
        "name": "ClearBridge American Energy MLP Fund Inc.",
        "price": 6.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SYX",
        "name": "Systemax Inc.",
        "price": 23.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GHM",
        "name": "Graham Corporation",
        "price": 18.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GCO",
        "name": "Genesco Inc.",
        "price": 38.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CUB",
        "name": "Cubic Corporation",
        "price": 63.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RGR",
        "name": "Sturm Ruger & Company Inc.",
        "price": 54.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MITT",
        "name": "AG Mortgage Investment Trust Inc.",
        "price": 16.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SMM",
        "name": "Salient Midstream of Beneficial Interest",
        "price": 7.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JPC",
        "name": "Nuveen Preferred & Income Opportunities Fund",
        "price": 10.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NVR",
        "name": "NVR Inc.",
        "price": 4037.77,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ESE",
        "name": "ESCO Technologies Inc.",
        "price": 99.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ACRE",
        "name": "Ares Commercial Real Estate Corporation",
        "price": 17.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HFRO",
        "name": "Highland Floating Rate Opportunities Fund",
        "price": 12.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DCF",
        "name": "Dreyfus Alcentra Global Credit Income 2024 Target Term Fund Inc.",
        "price": 9.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HMLP",
        "name": "Hoegh LNG Partners LP representing Limited Partner Interests",
        "price": 12.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NIM",
        "name": "Nuveen Select Maturities Municipal Fund",
        "price": 10.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NRP",
        "name": "Natural Resource Partners LP Limited Partnership",
        "price": 17.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PBT",
        "name": "Permian Basin Royalty Trust",
        "price": 3.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SDLP",
        "name": "Seadrill Partners LLC Representing Limited Liability Company Interests",
        "price": 0.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FGB",
        "name": "First Trust Specialty Finance and Financial Opportunities Fund",
        "price": 6.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PFS",
        "name": "Provident Financial Services Inc",
        "price": 22.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MPA",
        "name": "Blackrock MuniYield Pennsylvania Quality Fund",
        "price": 14.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DCUD",
        "name": "Dominion Energy Inc. 2016 Series A Corporate Units",
        "price": 49.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "YRD",
        "name": "Yirendai Ltd. American Depositary Shares each representing two",
        "price": 4.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JRI",
        "name": "Nuveen Real Asset Income and Growth Fund of Beneficial Interest",
        "price": 19.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LRN",
        "name": "K12 Inc",
        "price": 16.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GNT",
        "name": "GAMCO Natural Resources Gold & Income Trust",
        "price": 5.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ARDC",
        "name": "Ares Dynamic Credit Allocation Fund Inc.",
        "price": 15.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ECC",
        "name": "Eagle Point Credit Company Inc.",
        "price": 14.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EFT",
        "name": "Eaton Vance Floating Rate Income Trust of Beneficial Interest",
        "price": 14.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EHI",
        "name": "Western Asset Global High Income Fund Inc",
        "price": 10.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EOD",
        "name": "Wells Fargo Global Dividend Opportunity Fund",
        "price": 5.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ETG",
        "name": "Eaton Vance Tax-Advantaged Global Dividend Income Fund of Beneficial Interest",
        "price": 18.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FSD",
        "name": "First Trust High Income Long Short Fund of Beneficial Interest",
        "price": 15.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IRR",
        "name": "Voya Natural Resources Equity Income Fund of Beneficial Interest",
        "price": 3.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JGH",
        "name": "Nuveen Global High Income Fund of Beneficial Interest",
        "price": 16.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KMM",
        "name": "Deutsche Multi-Market Income Trust Common Sshares of Beneficial Interest",
        "price": 9.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KNOP",
        "name": "KNOT Offshore Partners LP representing Limited Partner Interests",
        "price": 18.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MYJ",
        "name": "Blackrock MuniYield New Jersey Fund Inc",
        "price": 15.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NAO",
        "name": "Nordic Amern Offshore Ltd (Bermuda)",
        "price": 3.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OAKS",
        "name": "Five Oaks Investment Corp.",
        "price": 3.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RENN",
        "name": "Renren Inc. American Depositary Shares each representing fifteen Class A",
        "price": 1.5577,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TRK",
        "name": "Speedway Motorsports Inc.",
        "price": 18.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VRTV",
        "name": "Veritiv Corporation",
        "price": 13.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TSI",
        "name": "TCW Strategic Income Fund Inc.",
        "price": 5.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IHG",
        "name": "Intercontinental Hotels Group American Depositary Shares (Each representing one)",
        "price": 65.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KIO",
        "name": "KKR Income Opportunities Fund",
        "price": 16.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SOR",
        "name": "Source Capital Inc.",
        "price": 40.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KMF",
        "name": "Kayne Anderson Midstream Energy Fund Inc",
        "price": 10.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MYE",
        "name": "Myers Industries Inc.",
        "price": 15.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PMF",
        "name": "PIMCO Municipal Income Fund",
        "price": 15.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FC",
        "name": "Franklin Covey Company",
        "price": 35.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NC",
        "name": "NACCO Industries Inc.",
        "price": 48.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BFK",
        "name": "BlackRock Municipal Income Trust",
        "price": 15.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CEA",
        "name": "China Eastern Airlines Corporation Ltd.",
        "price": 24.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HBB",
        "name": "Hamilton Beach Brands Holding Company Class A",
        "price": 15.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IGA",
        "name": "Voya Global Advantage and Premium Opportunity Fund of Beneficial Interest",
        "price": 10.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IIM",
        "name": "Invesco Value Municipal Income Trust",
        "price": 15.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NAN",
        "name": "Nuveen New York Quality Municipal Income Fund",
        "price": 14.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NDP",
        "name": "Tortoise Energy Independence Fund Inc.",
        "price": 3.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RM",
        "name": "Regional Management Corp.",
        "price": 28.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UTL",
        "name": "UNITIL Corporation",
        "price": 64.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DKT",
        "name": "Deutsch Bk Contingent Cap Tr V Tr Pfd Secs",
        "price": 25.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SCL",
        "name": "Stepan Company",
        "price": 102.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EOS",
        "name": "Eaton Vance Enhance Equity Income Fund II",
        "price": 18.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SPXX",
        "name": "Nuveen S&P 500 Dynamic Overwrite Fund",
        "price": 16.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NTP",
        "name": "Nam Tai Property Inc.",
        "price": 8.405,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DBL",
        "name": "DoubleLine Opportunistic Credit Fund of Beneficial Interest",
        "price": 21.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MUI",
        "name": "Blackrock Muni Intermediate Duration Fund Inc",
        "price": 14.77,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NIE",
        "name": "AllianzGI Equity & Convertible Income Fund",
        "price": 24.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ASG",
        "name": "Liberty All-Star Growth Fund Inc.",
        "price": 6.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GRAM",
        "name": "Grana y Montero S.A.A. American Depositary Shares each representing five",
        "price": 2.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STN",
        "name": "Stantec Inc",
        "price": 31.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GHC",
        "name": "Graham Holdings Company",
        "price": 530.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BRT",
        "name": "BRT Apartments Corp. (MD)",
        "price": 17.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CSV",
        "name": "Carriage Services Inc.",
        "price": 22.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DNI",
        "name": "Dividend and Income Fund",
        "price": 13.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DSM",
        "name": "Dreyfus Strategic Municipal Bond Fund Inc.",
        "price": 8.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EBF",
        "name": "Ennis Inc.",
        "price": 21.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EVT",
        "name": "Eaton Vance Tax Advantaged Dividend Income Fund of Beneficial Interest",
        "price": 26.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FMO",
        "name": "Fiduciary\/Claymore MLP Opportunity Fund of Beneficial Interest",
        "price": 7.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FOF",
        "name": "Cohen & Steers Closed-End Opportunity Fund Inc.",
        "price": 13.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HNP",
        "name": "Huaneng Power Intl",
        "price": 17.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IDE",
        "name": "Voya Infrastructure Industrials and Materials Fund of Beneficial Interest",
        "price": 11.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KED",
        "name": "Kayne Anderson Energy Development Company",
        "price": 18.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MMT",
        "name": "MFS Multimarket Income Trust",
        "price": 6.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MMU",
        "name": "Western Asset Managed Municipals Fund Inc.",
        "price": 14.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RCS",
        "name": "PIMCO Strategic Income Fund Inc.",
        "price": 9.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SZC",
        "name": "Cushing Renaissance Fund (The) of Beneficial Interest",
        "price": 12.7402,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VGM",
        "name": "Invesco Trust for Investment Grade Municipals (DE)",
        "price": 13.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DSU",
        "name": "Blackrock Debt Strategies Fund Inc.",
        "price": 11.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IQI",
        "name": "Invesco Quality Municipal Income Trust",
        "price": 13.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NP",
        "name": "Neenah Inc.",
        "price": 65.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WTM",
        "name": "White Mountains Insurance Group Ltd.",
        "price": 1145.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SBOW",
        "name": "SilverBow Resorces Inc.",
        "price": 3.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CHMI",
        "name": "Cherry Hill Mortgage Investment Corporation",
        "price": 16.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AFB",
        "name": "AllianceBernstein National Municipal Income Fund Inc",
        "price": 14.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GOF",
        "name": "Guggenheim Strategic Opportunities Fund of Beneficial Interest",
        "price": 18.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JFR",
        "name": "Nuveen Floating Rate Income Fund",
        "price": 10.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BSM",
        "name": "Black Stone Minerals L.P. representing limited partner interests",
        "price": 10.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CBK",
        "name": "Christopher & Banks Corporation",
        "price": 0.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EOCC",
        "name": "Enel Generacion Chile S.A. American Depositary Shares (Each representing 30 shares of)",
        "price": 16.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IRL",
        "name": "New Ireland Fund Inc (The)",
        "price": 9.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JCAP",
        "name": "Jernigan Capital Inc.",
        "price": 20.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JTA",
        "name": "Nuveen Tax-Advantaged Total Return Strategy Fund of Beneficial Interest",
        "price": 12.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KF",
        "name": "Korea Fund Inc. (The)",
        "price": 28.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KTF",
        "name": "Deutsche Municiple Income Trust",
        "price": 11.825,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MPX",
        "name": "Marine Products Corporation",
        "price": 14.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MVC",
        "name": "MVC Capital Inc.",
        "price": 10.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NAC",
        "name": "Nuveen California Quality Municipal Income Fund",
        "price": 15.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NETS",
        "name": "Netshoes (Cayman) Limited",
        "price": 3.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ORAN",
        "name": "Orange",
        "price": 14.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PDT",
        "name": "John Hancock Premium Dividend Fund",
        "price": 18.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PML",
        "name": "Pimco Municipal Income Fund II of Beneficial Interest",
        "price": 15.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RFTA",
        "name": "RAIT Financial Trust 7.125% Senior Notes due 2019",
        "price": 21.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RMT",
        "name": "Royce Micro-Cap Trust Inc.",
        "price": 8.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WHG",
        "name": "Westwood Holdings Group Inc",
        "price": 27.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PGZ",
        "name": "Principal Real Estate Income Fund of Beneficial Interest",
        "price": 21.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CTBB",
        "name": "Qwest Corporation 6.5% Notes due 2056",
        "price": 26.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TG",
        "name": "Tredegar Corporation",
        "price": 20.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UHT",
        "name": "Universal Health Realty Income Trust",
        "price": 125.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LITB",
        "name": "LightInTheBox Holding Co. Ltd. American Depositary Shares each representing 2",
        "price": 0.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ZTR",
        "name": "Virtus Global Dividend & Income Fund Inc.",
        "price": 11.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KAI",
        "name": "Kadant Inc",
        "price": 99.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UBA",
        "name": "Urstadt Biddle Properties Inc.",
        "price": 22.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MHO",
        "name": "M\/I Homes Inc.",
        "price": 42.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "INF",
        "name": "Brookfield Global Listed Infrastructure Income Fund Closed End Fund",
        "price": 15.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SCM",
        "name": "Stellus Capital Investment Corporation",
        "price": 15.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AGC",
        "name": "Advent Claymore Convertible Securities and Income Fund of Beneficial Interest",
        "price": 5.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BGH",
        "name": "Barings Global Short Duration High Yield Fund of Beneficial Interests",
        "price": 18.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BGR",
        "name": "BlackRock Energy and Resources Trust",
        "price": 11.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BGX",
        "name": "Blackstone GSO Long Short Credit Income Fund",
        "price": 16.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BUI",
        "name": "BlackRock Utility Infrastructure & Power Opportunities Trust",
        "price": 23.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CEE",
        "name": "The Central and Eastern Europe Fund Inc. (The)",
        "price": 27.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EFF",
        "name": "Eaton vance Floating-Rate Income Plus Fund of Beneficial Interest",
        "price": 16.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ETB",
        "name": "Eaton Vance Tax-Managed Buy-Write Income Fund of Beneficial Interest",
        "price": 16.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FIV",
        "name": "First Trust Senior Floating Rate 2022 Target Term Fund of Beneficial Interest",
        "price": 9.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HYI",
        "name": "Western Asset High Yield Defined Opportunity Fund Inc.",
        "price": 16.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IVH",
        "name": "Ivy High Income Opportunities Fund of Beneficial Interest",
        "price": 14.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KREF",
        "name": "KKR Real Estate Finance Trust Inc.",
        "price": 21.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MAV",
        "name": "Pioneer Municipal High Income Advantage Trust of Beneficial Interest",
        "price": 11.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MCN",
        "name": "Madison Covered Call & Equity Strategy Fund",
        "price": 6.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MUS",
        "name": "Blackrock MuniHoldings Quality Fund Inc",
        "price": 13.015,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MYN",
        "name": "Blackrock MuniYield New York Quality Fund Inc.Common Stock",
        "price": 13.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NEV",
        "name": "Nuveen Enhanced Municipal Value Fund of Beneficial Interest",
        "price": 15.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NPK",
        "name": "National Presto Industries Inc.",
        "price": 91.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PFO",
        "name": "Flaherty & Crumrine Preferred Income Opportunity Fund Incorporated",
        "price": 13.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PGH",
        "name": "Pengrowth Energy Corporation",
        "price": 0.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PMX",
        "name": "PIMCO Municipal Income Fund III of Beneficial Interest",
        "price": 12.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SGF",
        "name": "Aberdeen Singapore Fund Inc.",
        "price": 13.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SOJC",
        "name": "Southern Company (The) Series 2017B 5.25% Junior Subordinated Notes due December 1 2077",
        "price": 26.755,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "STON",
        "name": "StoneMor Partners L.P. Rep Limited Partnership Interests",
        "price": 1.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SXE",
        "name": "Southcross Energy Partners L.P.",
        "price": 0.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TLYS",
        "name": "Tilly's Inc.",
        "price": 7.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ZX",
        "name": "China Zenix Auto International Limited American Depositary Shares each representing four.",
        "price": 1.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GSL",
        "name": "Global Ship Lease Inc New Class A",
        "price": 7.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TRC",
        "name": "Tejon Ranch Co",
        "price": 16.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MUJ",
        "name": "Blackrock MuniHoldings New Jersey Quality Fund Inc.",
        "price": 14.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PLOW",
        "name": "Douglas Dynamics Inc.",
        "price": 52.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RNP",
        "name": "Cohen & Steers Reit and Preferred Income Fund Inc",
        "price": 25.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DMO",
        "name": "Western Asset Mortgage Defined Opportunity Fund Inc",
        "price": 20.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JTD",
        "name": "Nuveen Tax-Advantaged Dividend Growth Fund of Beneficial Interest",
        "price": 18.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LFGR",
        "name": "Leaf Group Ltd.",
        "price": 11.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VPG",
        "name": "Vishay Precision Group Inc.",
        "price": 30.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BGT",
        "name": "BlackRock Floating Rate Income Trust",
        "price": 13.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MGU",
        "name": "Macquarie Global Infrastructure Total Return Fund Inc.",
        "price": 26.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CAPL",
        "name": "CrossAmerica Partners LP representing limited partner interests",
        "price": 19.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DKL",
        "name": "Delek Logistics Partners L.P. representing Limited Partner Interests",
        "price": 30.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ACH",
        "name": "Aluminum Corporation of China Limited American Depositary Shares",
        "price": 7.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AKP",
        "name": "Alliance California Municipal Income Fund Inc",
        "price": 14.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ALG",
        "name": "Alamo Group Inc.",
        "price": 127.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AMBR",
        "name": "Amber Road Inc.",
        "price": 13.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ANFI",
        "name": "Amira Nature Foods Ltd",
        "price": 0.3951,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BLW",
        "name": "Blackrock Limited Duration Income Trust",
        "price": 16.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BSL",
        "name": "Blackstone GSO Senior Floating Rate Term Fund of Beneficial Interest",
        "price": 16.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BTT",
        "name": "BlackRock Municipal 2030 Target Term Trust",
        "price": 24.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DTW",
        "name": "DTE Energy Company 2017 Series E 5.25% Junior Subordinated Debentures due 2077",
        "price": 26.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DUC",
        "name": "Duff & Phelps Utility & Corporate Bond Trust Inc.",
        "price": 9.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DUKH",
        "name": "Duke Energy Corporation 5.125% Junior Subordinated Debentures due 2073",
        "price": 25.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GRX",
        "name": "The Gabelli Healthcare & Wellness Trust of Beneficial Interest",
        "price": 11.82,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IAE",
        "name": "Voya Asia Pacific High Dividend Equity Income Fund ING Asia Pacific High Dividend Equity Income Fund of Beneficial Interest",
        "price": 8.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JCE",
        "name": "Nuveen Core Equity Alpha Fund of Beneficial Interest",
        "price": 15.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JCO",
        "name": "Nuveen Credit Opportunities 2022 Target Term Fund of Beneficial Interest",
        "price": 9.905,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JMLP",
        "name": "Nuveen All Cap Energy MLP Opportunities Fund of Beneficial Interest",
        "price": 4.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MFM",
        "name": "MFS Municipal Income Trust",
        "price": 7.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MQY",
        "name": "Blackrock MuniYield Quality Fund Inc.",
        "price": 15.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MYI",
        "name": "Blackrock MuniYield Quality Fund III Inc",
        "price": 14.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PMM",
        "name": "Putnam Managed Municipal Income Trust",
        "price": 8.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PPR",
        "name": "Voya Prime Rate Trust Shares of Beneficial Interest",
        "price": 5.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SAFE",
        "name": "Safety Income & Growth Inc.",
        "price": 55.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SSI",
        "name": "Stage Stores Inc.",
        "price": 0.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VET",
        "name": "Vermilion Energy Inc. Common (Canada)",
        "price": 14.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WF",
        "name": "Woori Bank American Depositary Shares (Each representing 3 shares of)",
        "price": 24.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "XRF",
        "name": "China Rapid Finance Limited American Depositary Shares each representing one Class A",
        "price": 2.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "XRM",
        "name": "Xerium Technologies Inc.",
        "price": 13.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JHI",
        "name": "John Hancock Investors Trust",
        "price": 18.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JP",
        "name": "Jupai Holdings Limited American Depositary Shares each representing six",
        "price": 1.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PFL",
        "name": "PIMCO Income Strategy Fund Shares of Beneficial Interest",
        "price": 12.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BCH",
        "name": "Banco De Chile ADS",
        "price": 19.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IX",
        "name": "Orix Corp Ads",
        "price": 86.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TLP",
        "name": "TransMontaigne Partners L.P. Transmontaigne Partners L.P. representing limited partner interests",
        "price": 41.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NINE",
        "name": "Nine Energy Service Inc.",
        "price": 5.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GF",
        "name": "New Germany Fund Inc. (The)",
        "price": 15.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FF",
        "name": "FutureFuel Corp.",
        "price": 12.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GCH",
        "name": "Aberdeen Greater China Fund Inc.",
        "price": 12.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PZE",
        "name": "Petrobras Argentina S.A. ADS",
        "price": 10.77,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PCF",
        "name": "Putnam High Income Securities Fund",
        "price": 9.5235,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SSWN",
        "name": "Seaspan Corporation 6.375% Notes due 2019",
        "price": 24.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PDI",
        "name": "PIMCO Dynamic Income Fund",
        "price": 33.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AC",
        "name": "Associated Capital Group Inc.",
        "price": 44.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PEO",
        "name": "Adams Natural Resources Fund Inc.",
        "price": 15.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OPY",
        "name": "Oppenheimer Holdings Inc. Class A (DE)",
        "price": 27.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KWR",
        "name": "Quaker Chemical Corporation",
        "price": 186.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DXB",
        "name": "Deutsche Bk Contingent Cap TR II Tr Pfd Sec",
        "price": 26.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CMSA",
        "name": "CMS Energy Corporation 5.625% Junior Subordinated Notes due 2078",
        "price": 27.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DL",
        "name": "China Distance Education Holdings Limited American Depositary Shares",
        "price": 9.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ARD",
        "name": "Ardagh Group S.A.",
        "price": 19.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AZRE",
        "name": "Azure Power Global Limited Equity Shares",
        "price": 14.985,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BHK",
        "name": "Blackrock Core Bond Trust",
        "price": 15.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BPT",
        "name": "BP Prudhoe Bay Royalty Trust",
        "price": 7.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CBH",
        "name": "AllianzGI Convertible & Income 2024 Target Term Fund of Beneficial Interest",
        "price": 9.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CEL",
        "name": "Cellcom Israel Ltd.",
        "price": 4.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CELP",
        "name": "Cypress Energy Partners L.P. representing limited partner interests",
        "price": 8.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "COE",
        "name": "China Online Education Group American depositary shares each representing 15 Class A",
        "price": 24.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DFP",
        "name": "Flaherty & Crumrine Dynamic Preferred and Income Fund Inc.",
        "price": 28.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DIAX",
        "name": "Nuveen Dow 30SM Dynamic Overwrite Fund of Beneficial Interest",
        "price": 17.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EDI",
        "name": "Stone Harbor Emerging Markets Total Income Fund of Beneficial Interests",
        "price": 12.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EFL",
        "name": "Eaton Vance Floating-Rate 2022 Target Term Trust of Beneficial Interest",
        "price": 9.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ERA",
        "name": "Era Group Inc.",
        "price": 11.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FAM",
        "name": "First Trust\/Aberdeen Global Opportunity Income Fund of Beneficial Interest",
        "price": 11.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FDEU",
        "name": "First Trust Dynamic Europe Equity Income Fund of Beneficial Interest",
        "price": 15.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FIF",
        "name": "First Trust Energy Infrastructure Fund of Beneficial Interest",
        "price": 17.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HSEA",
        "name": "HSBC Holdings plc. Perpetual Sub Cap Secs",
        "price": 26.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JLS",
        "name": "Nuveen Mortgage Opportunity Term Fund",
        "price": 22.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KSM",
        "name": "Deutsche Strategic Municiple Income Trust of Beneficial Interest",
        "price": 12.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LDP",
        "name": "Cohen & Steers Limited Duration Preferred and Income Fund Inc.",
        "price": 27.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LGI",
        "name": "Lazard Global Total Return and Income Fund",
        "price": 16.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MLR",
        "name": "Miller Industries Inc.",
        "price": 33.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MNP",
        "name": "Western Asset Municipal Partners Fund Inc.",
        "price": 15.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MTT",
        "name": "Western Asset Municipal Defined Opportunity Trust Inc",
        "price": 21.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MUH",
        "name": "Blackrock MuniHoldings Fund II Inc.",
        "price": 16.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MXF",
        "name": "Mexico Fund Inc. (The)",
        "price": 14.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MYF",
        "name": "Blackrock MuniYield Investment Fund",
        "price": 14.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MZF",
        "name": "Managed Duration Investment Grade Municipal Fund",
        "price": 14.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NIQ",
        "name": "Nuveenn Intermediate Duration Quality Municipal Term Fund of Beneficial Interest",
        "price": 14.3998,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NXQ",
        "name": "Nuveen Select Tax Free Income Portfolio II",
        "price": 15.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OPP",
        "name": "RiverNorth\/DoubleLine Strategic Opportunity Fund Inc.",
        "price": 16.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PAR",
        "name": "PAR Technology Corporation",
        "price": 30.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PNI",
        "name": "Pimco New York Municipal Income Fund II of Beneficial Interest",
        "price": 12.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PQ",
        "name": "PetroQuest Energy Inc.",
        "price": 0.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PYN",
        "name": "PIMCO New York Municipal Income Fund III of Beneficial Interest",
        "price": 10.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SBI",
        "name": "Western Asset Intermediate Muni Fund Inc",
        "price": 9.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SOJB",
        "name": "Southern Company (The) Series 2016A 5.25% Junior Subordinated Notes due October 1 2076",
        "price": 26.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SPA",
        "name": "Sparton Corporation",
        "price": 18.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TPGE",
        "name": "TPG Pace Energy Holdings Corp. Class A",
        "price": 12.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TVC",
        "name": "Tennessee Valley Authority",
        "price": 27.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VTN",
        "name": "Invesco Trust for Investment Grade New York Municipals",
        "price": 13.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WIA",
        "name": "Western Asset\/Claymore Inflation-Linked Securities & Income Fund of Beneficial Interest",
        "price": 12.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TI",
        "name": "Telecom Italia S.P.A. New",
        "price": 5.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CIF",
        "name": "MFS Intermediate High Income Fund",
        "price": 2.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BBU",
        "name": "Brookfield Business Partners L.P. Limited Partnership Units",
        "price": 46.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MSB",
        "name": "Mesabi Trust",
        "price": 21.11,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BH",
        "name": "Biglari Holdings Inc.",
        "price": 116.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NCA",
        "name": "Nuveen California Municipal Value Fund Inc.",
        "price": 10.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CHA",
        "name": "China Telecom Corp Ltd ADS",
        "price": 40.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GPJA",
        "name": "Georgia Power Company Series 2017A 5.00% Junior Subordinated Notes due October 1 2077",
        "price": 26.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WPXP",
        "name": "WPX Energy Inc. 6.25% Series A Mandatory Convertible Preferred Stock",
        "price": 76.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ALX",
        "name": "Alexander's Inc.",
        "price": 312.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EDN",
        "name": "Empresa Distribuidora Y Comercializadora Norte S.A. (Edenor) Empresa Distribuidora Y Comercializadora Norte S.A. (Edenor) American Depositary Shares",
        "price": 5.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ISG",
        "name": "ING Group N.V. Perpetual Dent Secs 6.125%",
        "price": 26.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MVO",
        "name": "MV Oil Trust",
        "price": 5.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CLPR",
        "name": "Clipper Realty Inc.",
        "price": 11.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GBL",
        "name": "Gamco Investors Inc.",
        "price": 17.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OMP",
        "name": "Oasis Midstream Partners LP Representing Limited Partner Interests",
        "price": 14.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AFT",
        "name": "Apollo Senior Floating Rate Fund Inc.",
        "price": 15.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AP",
        "name": "Ampco-Pittsburgh Corporation",
        "price": 2.9966,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ASPN",
        "name": "Aspen Aerogels Inc.",
        "price": 10.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BCRH",
        "name": "Blue Capital Reinsurance Holdings Ltd.",
        "price": 7.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BDXA",
        "name": "Becton Dickinson and Company Depositary Shares each Representing a 1\/20th Interest in a Share of 6.125% Mandatory Convertible Preferred Stock Series A $1.00 par",
        "price": 60.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BKT",
        "name": "BlackRock Income Trust Inc. (The)",
        "price": 6.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BNY",
        "name": "BlackRock New York Municipal Income Trust",
        "price": 14.5709,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BYM",
        "name": "Blackrock Municipal Income Quality Trust of Beneficial Interest",
        "price": 14.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CPAC",
        "name": "Cementos Pacasmayo S.A.A. American Depositary Shares (Each representing five)",
        "price": 8.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CTS",
        "name": "CTS Corporation",
        "price": 29.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CTU",
        "name": "Qwest Corporation 7.00% Notes due 2025",
        "price": 25.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CTW",
        "name": "Qwest Corporation 7.50% Notes due 2051",
        "price": 25.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CTY",
        "name": "Qwest Corporation 6.125% Notes due 2053",
        "price": 25.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CULP",
        "name": "Culp Inc.",
        "price": 10.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DHF",
        "name": "Dreyfus High Yield Strategies Fund",
        "price": 3.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DTV",
        "name": "DTE Energy Company 2016 Corporate Units",
        "price": 56.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DTY",
        "name": "DTE Energy Company 2016 Series F 6.00% Junior Subordinated Debentures due 2076",
        "price": 27.12,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EAE",
        "name": "Entergy Arkansas Inc. First Mortgage Bonds 4.75% Series due June 1 2063",
        "price": 25.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EGF",
        "name": "Blackrock Enhanced Government Fund Inc.",
        "price": 13.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EMP",
        "name": "Entergy Mississippi Inc. First Mortgage Bonds 4.90% Series Due October 1 2066",
        "price": 27.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ENJ",
        "name": "Entergy New Orleans LLC First Mortgage Bonds 5.0% Series due December 1 2052",
        "price": 25.6601,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FCT",
        "name": "First Trust Senior Floating Rate Income Fund II of Beneficial Interest",
        "price": 12.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FLC",
        "name": "Flaherty & Crumrine Total Return Fund Inc",
        "price": 23.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FRA",
        "name": "Blackrock Floating Rate Income Strategies Fund Inc",
        "price": 13.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FT",
        "name": "Franklin Universal Trust",
        "price": 8.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GDL",
        "name": "GDL Fund The of Beneficial Interest",
        "price": 9.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GEK",
        "name": "General Electric Capital Corporation 4.70% Notes due May 16 2053",
        "price": 24.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GFA",
        "name": "Gafisa SA S.A. American Depositary Shares",
        "price": 8.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GGM",
        "name": "Guggenheim Credit Allocation Fund of Beneficial Interest",
        "price": 20.488,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GGT",
        "name": "Gabelli Multi-Media Trust Inc. (The)",
        "price": 8.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GNE",
        "name": "Genie Energy Ltd. Class B Stock",
        "price": 8.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GSBD",
        "name": "Goldman Sachs BDC Inc.",
        "price": 22.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HESM",
        "name": "Hess Midstream Partners LP Representing Limited Partner Interests",
        "price": 21.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HTD",
        "name": "John Hancock Tax Advantaged Dividend Income Fund of Beneficial Interest",
        "price": 27.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JHA",
        "name": "Nuveen High Income December 2018 Target Term Fund",
        "price": 9.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JPT",
        "name": "Nuveen Preferred and Income 2022 Term Fund of Beneficial Interest",
        "price": 25.6904,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KEN",
        "name": "Kenon Holdings Ltd.",
        "price": 18.6942,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LAC",
        "name": "Lithium Americas Corp.",
        "price": 5.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LCM",
        "name": "Advent\/Claymore Enhanced Growth & Income Fund of Beneficial Interest",
        "price": 7.77,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MCB",
        "name": "Metropolitan Bank Holding Corp.",
        "price": 49.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MHI",
        "name": "Pioneer Municipal High Income Trust of Beneficial Interest",
        "price": 12.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MSP",
        "name": "Madison Strategic Sector Premium Fund of Beneficial Interest",
        "price": 11.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MTR",
        "name": "Mesa Royalty Trust",
        "price": 6.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MUA",
        "name": "Blackrock MuniAssets Fund Inc",
        "price": 15.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MYD",
        "name": "Blackrock MuniYield Fund Inc.",
        "price": 15.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NID",
        "name": "Nuveen Intermediate Duration Municipal Term Fund of Beneficial Interest",
        "price": 14.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NJV",
        "name": "Nuveen New Jersey Municipal Value Fund of Beneficial Interest",
        "price": 14.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NXJ",
        "name": "Nuveen New Jersey Qualified Municipal Fund",
        "price": 15.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NXN",
        "name": "Nuveen New York Select Tax-Free Income Portfolio",
        "price": 14.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OCIP",
        "name": "OCI Partners LP representing Limited Partner Interests",
        "price": 11.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OMAA",
        "name": "OM Asset Management plc 5.125% Notes due 2031",
        "price": 23.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PHX",
        "name": "Panhandle Oil and Gas Inc",
        "price": 6.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PIY",
        "name": "Preferred Plus Trust (Ser CZN) Ser CZN-1 Tr Ctf 8.375% Maturity 10\/01\/2046",
        "price": 12.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PPX",
        "name": "PPL Capital Funding Inc. 2013 Series B Junior Subordinated Notes due 2073",
        "price": 25.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RZB",
        "name": "Reinsurance Group of America Incorporated 5.75% Fixed-To-Floating Rate Subordinated Debentures due 2056",
        "price": 29.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SBNA",
        "name": "Scorpio Tankers Inc. 6.75% Senior Notes due 2020",
        "price": 25.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SLDA",
        "name": "Sutherland Asset Management Corporation 7.00% Convertible Senior Notes due 2023",
        "price": 26.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SPLP",
        "name": "Steel Partners Holdings LP LTD PARTNERSHIP UNIT",
        "price": 10.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SRLP",
        "name": "Sprague Resources LP representing Limited Partner Interests",
        "price": 14.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TBB",
        "name": "AT&T Inc. 5.350% Global Notes due 2066",
        "price": 26.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TDA",
        "name": "Telephone and Data Systems Inc. 5.875% Senior Notes due 2061",
        "price": 25.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TDE",
        "name": "Telephone and Data Systems Inc. 6.875% Senior Notes due 2059",
        "price": 25.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TDF",
        "name": "Templeton Dragon Fund Inc.",
        "price": 19.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "THW",
        "name": "Tekla World Healthcare Fund Shares of Beneficial Interest",
        "price": 14.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TPL",
        "name": "Texas Pacific Land Trust",
        "price": 781.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TSLF",
        "name": "THL Credit Senior Loan Fund of Beneficial Interest",
        "price": 15.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TTP",
        "name": "Tortoise Pipeline & Energy Fund Inc.",
        "price": 12.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UFI",
        "name": "Unifi Inc.",
        "price": 24.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UZA",
        "name": "United States Cellular Corporation 6.95% Senior Notes due 2060",
        "price": 26.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VCO",
        "name": "Vina Concha Y Toro",
        "price": 41.86,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VGI",
        "name": "Virtus Global Multi-Sector Income Fund of Beneficial Interest",
        "price": 13.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VJET",
        "name": "voxeljet AG American Depositary Shares each representing one-fifth of an\/",
        "price": 1.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VPV",
        "name": "Invesco Pennsylvania Value Municipal Income Trust (DE)",
        "price": 13.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VTRB",
        "name": "Ventas Realty Limited Partnership \/\/ Capital Corporation 5.45% Senior Notes due 2043",
        "price": 24.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "YGE",
        "name": "Yingli Green Energy Holding Company Limited ADR",
        "price": 1.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ZF",
        "name": "Virtus Total Return Fund Inc.",
        "price": 11.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ZNH",
        "name": "China Southern Airlines Company Limited",
        "price": 29.81,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NAP",
        "name": "Navios Maritime Midstream Partners LP representing limited partner interests",
        "price": 2.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BGIO",
        "name": "BlackRock 2022 Global Income Opportunity Trust of Beneficial Interest",
        "price": 9.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HGH",
        "name": "Hartford Financial Services Group Inc. (The) 7.875% Fixed to Floating Rate Junior Subordinated Debentures due 2042",
        "price": 28.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RA",
        "name": "Brookfield Real Assets Income Fund Inc.",
        "price": 22.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SHI",
        "name": "SINOPEC Shangai Petrochemical Company Ltd.",
        "price": 26.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ISF",
        "name": "ING Group N.V. Perp Hybrid Cap Secs (Netherlands)",
        "price": 25.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SGZA",
        "name": "Selective Insurance Group Inc. 5.875% Senior Notes due 2043",
        "price": 25.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DDE",
        "name": "Dover Downs Gaming & Entertainment Inc",
        "price": 2.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DTJ",
        "name": "DTE Energy Company 2016 Series B 5.375% Junior Subordinated Debentures due 2076",
        "price": 26.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RZA",
        "name": "Reinsurance Group of America Incorporated 6.20% Fixed-to-Floating Rate Subordinated Debentures due 2042",
        "price": 28.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MIN",
        "name": "MFS Intermediate Income Trust",
        "price": 3.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CXH",
        "name": "MFS Investment Grade Municipal Trust",
        "price": 10.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LMHB",
        "name": "Legg Mason Inc. 5.45% Junior Subordinated Notes due 2056",
        "price": 25.825,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SWP",
        "name": "Stanley Black & Decker Inc. Corporate Units",
        "price": 104.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TPVG",
        "name": "TriplePoint Venture Growth BDC Corp.",
        "price": 14.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AEH",
        "name": "AEGON N.V. Perp. Cap Secs.",
        "price": 25.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BFS",
        "name": "Saul Centers Inc.",
        "price": 48.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PYT",
        "name": "PPlus Tr GSC-2 Tr Ctf Fltg Rate",
        "price": 23.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TAC",
        "name": "TransAlta Corporation",
        "price": 8.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TCI",
        "name": "Transcontinental Realty Investors Inc.",
        "price": 34.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ACV",
        "name": "AllianzGI Diversified Income & Convertible Fund of Beneficial Interest",
        "price": 26.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AEB",
        "name": "AEGON N.V. Perp. Cap. Secs. Floating Rate (Netherlands)",
        "price": 24.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AED",
        "name": "AEGON N.V. Perp. Cap. Securities (Netherlands)",
        "price": 25.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AEK",
        "name": "Aegon NV 8.00% Non-Cumulative Subordinated Notes due 2042",
        "price": 25.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AEUA",
        "name": "Anadarko Petroleum Corporation 7.50% Tangible Equity Units",
        "price": 32.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AFC",
        "name": "Allied Capital Corporation 6.875% Notes due April 15 2047",
        "price": 27.08,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AGD",
        "name": "Alpine Global Dynamic Dividend Fund Shares of Beneficial Interest",
        "price": 10.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AHC",
        "name": "A.H. Belo Corporation",
        "price": 2.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AIF",
        "name": "Apollo Tactical Income Fund Inc.",
        "price": 15.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AIW",
        "name": "Arlington Asset Investment Corp 6.625% Notes due 2023",
        "price": 24.9775,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AIY",
        "name": "Apollo Investment Corporation 6.875% Senior Notes due 2043",
        "price": 25.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AIZP",
        "name": "Assurant Inc. 6.50% Series D Mandatory Convertible Preferred Stock $1.00 par value",
        "price": 138.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AJX",
        "name": "Great Ajax Corp.",
        "price": 15.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AJXA",
        "name": "Great Ajax Corp. 7.25% Convertible Senior Notes due 2024",
        "price": 26.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AMOV",
        "name": "America Movil S.A.B. de C.V. Class An Depositary Shares",
        "price": 17.525,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ANTX",
        "name": "Anthem Inc. Corporate Units",
        "price": 56.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "APB",
        "name": "Asia Pacific Fund Inc. (The)",
        "price": 11.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "APF",
        "name": "Morgan Stanley Asia-Pacific Fund Inc.",
        "price": 16.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ARL",
        "name": "American Realty Investors Inc.",
        "price": 14.4625,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ATV",
        "name": "Acorn International Inc. ADS",
        "price": 14.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "AXR",
        "name": "AMREP Corporation",
        "price": 6.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BAF",
        "name": "BlackRock Municipal Income Investment Quality Trust",
        "price": 14.9191,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BBDO",
        "name": "Banco Bradesco Sa American Depositary Shares (each representing one)",
        "price": 6.76,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BBF",
        "name": "BlackRock Municipal Income Investment Trust",
        "price": 14.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BBK",
        "name": "Blackrock Municipal Bond Trust",
        "price": 16.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BEP",
        "name": "Brookfield Renewable Partners L.P.",
        "price": 56.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BFO",
        "name": "Blackrock Florida Municipal 2020 Term Trust",
        "price": 14.5789,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BGCA",
        "name": "BGC Partners Inc. 8.125% Senior Notes due 2042",
        "price": 25.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BJZ",
        "name": "Blackrock California Municipal 2018 Term Trust",
        "price": 14.46,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BKHU",
        "name": "Black Hills Corporation Corporate Units",
        "price": 64.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BKK",
        "name": "Blackrock Municipal 2020 Term Trust",
        "price": 14.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BKN",
        "name": "BlackRock Investment Quality Municipal Trust Inc. (The)",
        "price": 16.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BLH",
        "name": "Blackrock New York Municipal 2018 Term Trust",
        "price": 14.59,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BME",
        "name": "Blackrock Health Sciences Trust",
        "price": 42.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BNJ",
        "name": "BlackRock New Jersey Municipal Income Trust",
        "price": 13.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BORN",
        "name": "China New Borun Corporation American Depositary Shares",
        "price": 0.86,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BQH",
        "name": "Blackrock New York Municipal Bond Trust of Beneficial Interest",
        "price": 15.78,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BSD",
        "name": "BlackRock Strategic Municipal Trust Inc. (The)",
        "price": 14.97,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BTA",
        "name": "BlackRock Long-Term Municipal Advantage Trust of Beneficial Interest",
        "price": 13.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BWG",
        "name": "BrandywineGLOBAL Global Income Opportunities Fund Inc.",
        "price": 13.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "BXE",
        "name": "Bellatrix Exploration Ltd (Canada)",
        "price": 0.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CCM",
        "name": "Concord Medical Services Holdings Limited ADS (Each represents three)",
        "price": 2.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CCR",
        "name": "CONSOL Coal Resources LP representing limited partner interests",
        "price": 7.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CCZ",
        "name": "Comcast Holdings ZONES",
        "price": 58.9875,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CGA",
        "name": "China Green Agriculture Inc.",
        "price": 2.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CHN",
        "name": "China Fund Inc. (The)",
        "price": 21.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CIC",
        "name": "Capitol Investment Corp. IV Class A",
        "price": 10.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CINR",
        "name": "Ciner Resources LP representing Limited Partner Interests",
        "price": 16.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CMU",
        "name": "MFS Municipal Income Trust",
        "price": 4.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CRT",
        "name": "Cross Timbers Royalty Trust",
        "price": 8.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CTDD",
        "name": "Qwest Corporation 6.75% Notes due 2057",
        "price": 26.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CTX",
        "name": "Qwest Corporation 7.00% Notes due 2052",
        "price": 25.2,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "CUBS",
        "name": "Customers Bancorp Inc 6.375% Senior Notes due 2018",
        "price": 25.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DAC",
        "name": "Danaos Corporation",
        "price": 6.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DDF",
        "name": "Delaware Investments Dividend & Income Fund Inc.",
        "price": 15.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DDT",
        "name": "Dillard's Capital Trust I",
        "price": 26.3621,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DEX",
        "name": "Delaware Enhanced Global Dividend of Beneficial Interest",
        "price": 10.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DHCP",
        "name": "Ditech Holding Corporation",
        "price": 1.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DLNG",
        "name": "Dynagas LNG Partners LP",
        "price": 1.82,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DMB",
        "name": "Dreyfus Municipal Bond Infrastructure Fund Inc.",
        "price": 14.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DRD",
        "name": "DRDGOLD Limited American Depositary Shares",
        "price": 7.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DRUA",
        "name": "Dominion Energy Inc. 2016 Series A 5.25% Enhanced Junior Subordinated Notes due 2076",
        "price": 26.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DTF",
        "name": "DTF Tax-Free Income Inc.",
        "price": 15.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DTQ",
        "name": "DTE Energy Company 2012 Series C 5.25% Junior Subordinate Debentures due December 1 2062",
        "price": 25.271,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DVD",
        "name": "Dover Motorsports Inc.",
        "price": 1.765,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "DYNC",
        "name": "Dynegy Inc. 7.00% Tangible Equity Units",
        "price": 100.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EAB",
        "name": "Entergy Arkansas Inc. First Mortgage Bonds 4.90% Series Due December 1 2052",
        "price": 25.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EAI",
        "name": "Entergy Arkansas Inc. First Mortgage Bonds 4.875% Series Due September 1 2066",
        "price": 26.33,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ECCA",
        "name": "Eagle Point Credit Company Inc. Series A Term Preferred Stock due 2022",
        "price": 25.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ECCB",
        "name": "Eagle Point Credit Company Inc. 7.75% Series B Term Preferred Stock due 2026",
        "price": 26.387,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ECCY",
        "name": "Eagle Point Credit Company Inc. 6.75% Notes due 2027",
        "price": 25.7056,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ECCZ",
        "name": "Eagle Point Credit Company Inc. 7.00% Notes due 2020",
        "price": 25.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ECT",
        "name": "ECA Marcellus Trust I of Beneficial Interest",
        "price": 0.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EDF",
        "name": "Stone Harbor Emerging Markets Income Fund of Beneficial Interest",
        "price": 13.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EEA",
        "name": "The European Equity Fund Inc.",
        "price": 9.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EHT",
        "name": "Eaton Vance High Income 2021 Target Term Trust of Beneficial Interest",
        "price": 10.03,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ELC",
        "name": "Entergy Louisiana Inc. Collateral Trust Mortgage Bonds 4.875 % Series due September 1 2066",
        "price": 26.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ELJ",
        "name": "Entergy Louisiana Inc. First Mortgage Bonds 5.25% Series due July 1 2052",
        "price": 25.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ELU",
        "name": "Entergy Louisiana Inc. First Mortgage Bonds 4.70% Series due June 1 2063",
        "price": 25.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ELVT",
        "name": "Elevate Credit Inc.",
        "price": 3.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EMF",
        "name": "Templeton Emerging Markets Fund",
        "price": 15.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ENO",
        "name": "Entergy New Orleans LLC First Mortgage Bonds 5.50% Series due April 1 2066",
        "price": 26.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EOT",
        "name": "Eaton Vance Municipal Income Trust EATON VANCE NATIONAL MUNICIPAL OPPORTUNITIES TRUST",
        "price": 22.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EQS",
        "name": "Equus Total Return Inc.",
        "price": 1.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ETX",
        "name": "Eaton Vance Municipal Income 2028 Term Trust of Beneficial Interest",
        "price": 21.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EVG",
        "name": "Eaton Vance Short Diversified Income Fund Duration Diversified Income Fund of Beneficial Interest",
        "price": 13.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EVN",
        "name": "Eaton Vance Municipal Income Trust",
        "price": 13.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EXD",
        "name": "Eaton Vance Tax-Advantaged Bond of Beneficial Interest",
        "price": 10.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "EZT",
        "name": "Entergy Texas Inc First Mortgage Bonds 5.625% Series due June 1 2064",
        "price": 27.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FELP",
        "name": "Foresight Energy LP representing Limited Partner Interests",
        "price": 0.1582,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FEO",
        "name": "First Trust\/Aberdeen Emerging Opportunity Fund of Beneficial Interest",
        "price": 14.819,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FFA",
        "name": "First Trust Enhanced Equity Income Fund",
        "price": 17.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FHY",
        "name": "First Trust Strategic High Income Fund II of Beneficial Interest",
        "price": 11.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FMN",
        "name": "Federated Premier Municipal Income Fund",
        "price": 14.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "FMY",
        "name": "First Trust Motgage Income Fund of Beneficial Interest",
        "price": 14.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GAM",
        "name": "General American Investors Inc.",
        "price": 38.77,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GBAB",
        "name": "Guggenheim Taxable Municipal Managed Duration Trust of Beneficial Interest",
        "price": 24.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GCV",
        "name": "Gabelli Convertible and Income Securities Fund Inc. (The)",
        "price": 5.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GDO",
        "name": "Western Asset Global Corporate Defined Opportunity Fund Inc.",
        "price": 18.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GFY",
        "name": "Western Asset Variable Rate Strategic Fund Inc.",
        "price": 17.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GGZ",
        "name": "Gabelli Global Small and Mid Cap Value Trust (The) of Beneficial Interest",
        "price": 11.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GIG",
        "name": "GigCapital Inc.",
        "price": 11.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GJH",
        "name": "Synthetic Fixed-Income Securities Inc 6.375% (STRATS) Cl A-1",
        "price": 10.1314,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GJO",
        "name": "Synthetic Fixed-Income Securities Inc. on behalf of STRATS(SM) Trust for Wal-Mart Stores Inc. Securities Series 2004-5",
        "price": 23.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GJP",
        "name": "Synthetic Fixed-Income Securities Inc. on behalf of STRATS (SM) Trust for Dominion Resources Inc. Securities Series 2005-6 Floating Rate Structured Repackaged A",
        "price": 23.8765,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GJR",
        "name": "Synthetic Fixed-Income Securities Inc. STRATS Trust for Procter&Gamble Securities Series 2006-1",
        "price": 23.3,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GJS",
        "name": "Goldman Sachs Group Securities STRATS Trust for Series 2006-2",
        "price": 21.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GJT",
        "name": "Synthetic Fixed-Income Securities Inc. Floating Rate Structured Repackaged Asset-Backed Trust Securities Certificates Series 2006-3",
        "price": 21.87,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GJV",
        "name": "Synthetic Fixed-Income Securities Inc 7.00% Fixed Rate Structured Repackaged Asset-Backed Trust Securities (STRATS)",
        "price": 26.2635,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GMTA",
        "name": "GATX Corporation 5.625% Senior Notes due 2066",
        "price": 26.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GRR",
        "name": "Asia Tigers Fund Inc. (The)",
        "price": 11.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GSH",
        "name": "Guangshen Railway Company Limited",
        "price": 13.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GYB",
        "name": "CABCO Series 2004-101 Trust Goldman Sachs Capital I Floating Rate Callable Certificates",
        "price": 25.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GYC",
        "name": "Corporate Asset Backed Corp CABCOoration CABCO Series 2004-102 Trust (SBC Communications Inc.) Collared Floating Rate Cllable Certificates",
        "price": 23.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "GZT",
        "name": "Gazit-Globe Ltd.",
        "price": 7.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HGT",
        "name": "Hugoton Royalty Trust",
        "price": 0.41,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HHS",
        "name": "Harte-Hanks Inc.",
        "price": 3.232,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HIE",
        "name": "Miller\/Howard High Income Equity Fund of Beneficial Interest",
        "price": 11.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HJV",
        "name": "MS Structured Asset Corp. SATURNS J.C. Penney Company Inc. Debenture Backed Series 2007-1 7% Callable Class A Units",
        "price": 5.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HPF",
        "name": "John Hancock Pfd Income Fund II Pfd Income Fund II",
        "price": 22.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HPI",
        "name": "John Hancock Preferred Income Fund of Beneficial Interest",
        "price": 23.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HPS",
        "name": "John Hancock Preferred Income Fund III Preferred Income Fund III",
        "price": 19.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HTFA",
        "name": "Horizon Technology Finance Corporation 6.25% Notes due 2022",
        "price": 25.77,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HTGX",
        "name": "Hercules Capital Inc. 6.25% Notes due 2024",
        "price": 25.07,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HTY",
        "name": "John Hancock Tax-Advantaged Global Shareholder Yield Fund of Beneficial Interest",
        "price": 7.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "HYB",
        "name": "New America High Income Fund Inc. (The)",
        "price": 9.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IBA",
        "name": "Industrias Bachoco S.A.B. de C.V.",
        "price": 44.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ICB",
        "name": "MS Income Securities Inc.",
        "price": 18.56,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IHC",
        "name": "Independence Holding Company",
        "price": 40.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IHIT",
        "name": "Invesco High Income 2023 Target Term Fund of Beneficial Interest",
        "price": 10.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IHTA",
        "name": "Invesco High Income 2024 Target Term Fund of Beneficial Interest No par value per share",
        "price": 10.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "IID",
        "name": "Voya International High Dividend Equity Income Fund of Beneficial Interest",
        "price": 5.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "INSI",
        "name": "Insight Select Income Fund",
        "price": 20.82,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ITCB",
        "name": "Itau CorpBanca American Depositary Shares (each representing 1500 shares of no par value)",
        "price": 6.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JBK",
        "name": "Lehman ABS 3.50 3.50% Adjustable Corp Backed Tr Certs GS Cap I",
        "price": 30.26,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JBN",
        "name": "Select Asset Inc. on behalf of Corporate Backed Callable Trust Certificates J.C. Penney Debenture Backed Series 2007-1 Trust",
        "price": 6.0986,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JBR",
        "name": "Select Asset Inc. Corporate Backed Callable Trust Certificates J.C. Penney Debenture-Backed Series 2006-1 Class A-1",
        "price": 6.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JEMD",
        "name": "Nuveen Emerging Markets Debt 2022 Target Term Fund of Beneficial Interest $0.01 par value per share",
        "price": 9.28,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JEQ",
        "name": "Aberdeen Japan Equity Fund Inc.",
        "price": 7.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JHB",
        "name": "Nuveen High Income November 2021 Target Term Fund",
        "price": 9.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JHD",
        "name": "Nuveen High Income December 2019 Target Term Fund of Beneficial Interest",
        "price": 9.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JHS",
        "name": "John Hancock Income Securities Trust",
        "price": 15.13,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JHX",
        "name": "James Hardie Industries plc American Depositary Shares (Ireland)",
        "price": 20.24,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JHY",
        "name": "Nuveen High Income 2020 Target Term Fund of Beneficial Interest",
        "price": 9.735,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JMM",
        "name": "Nuveen Multi-Market Income Fund (MA)",
        "price": 7.42,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JMP",
        "name": "JMP Group LLC",
        "price": 3.22,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JMPB",
        "name": "JMP Group Inc 8.00% Senior Notes due 2023",
        "price": 25.48,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JMPD",
        "name": "JMP Group LLC 7.25% Senior Notes due 2027",
        "price": 25.82,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JMT",
        "name": "Nuveen Mortgage Opportunity Term Fund 2 of Beneficial Interest",
        "price": 22.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JOF",
        "name": "Japan Smaller Capitalization Fund Inc",
        "price": 8.37,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JPI",
        "name": "Nuveen Preferred and Income Term Fund of Beneficial Interest",
        "price": 26.23,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "JSD",
        "name": "Nuveen Short Duration Credit Opportunities Fund of Beneficial Interest",
        "price": 15.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KAP",
        "name": "KCAP Financial Inc. 7.375% Senior Notes due 2019",
        "price": 25.39,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KFS",
        "name": "Kingsway Financial Services Inc.",
        "price": 1.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KMPA",
        "name": "Kemper Corporation 7.375% Subordinated Debentures due 2054",
        "price": 25.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KRP",
        "name": "Kimbell Royalty Partners Representing Limited Partner Interests",
        "price": 13.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KST",
        "name": "Deutsche Strategic Income Trust Shares of Beneficial Interest",
        "price": 12.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KTH",
        "name": "Structures Products Cp 8% CorTS Issued by Peco Energy Cap Tr II Preferred Stock",
        "price": 33.17,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KTN",
        "name": "Structured Products Corp 8.205% CorTS 8.205% Corporate Backed Trust Securities (CorTS)",
        "price": 32.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "KTP",
        "name": "Corts 7.625 Pfd",
        "price": 6.69,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LDF",
        "name": "Latin American Discovery Fund Inc. (The)",
        "price": 12.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LGC",
        "name": "Legacy Acquisition Corp. Class A par value $0.0001 per share",
        "price": 10.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LMHA",
        "name": "Legg Mason Inc. 6.375% Junior Subordinated Notes due 2056",
        "price": 26.36,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LND",
        "name": "Brasilagro Brazilian Agric Real Estate Co Sponsored ADR (Brazil)",
        "price": 4.595,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LOR",
        "name": "Lazard World Dividend & Income Fund Inc.",
        "price": 9.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LUB",
        "name": "Luby's Inc.",
        "price": 2.53,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "LXFR",
        "name": "Luxfer Holdings PLC",
        "price": 16.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MANU",
        "name": "Manchester United Ltd. Class A",
        "price": 19.34,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MCI",
        "name": "Barings Corporate Investors",
        "price": 16.85,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MCV",
        "name": "Medley Capital Corporation 6.125% Senior Notes due 2023",
        "price": 23.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MCX",
        "name": "Medley Capital Corporation 6.50% Notes due 2021",
        "price": 25.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MDLQ",
        "name": "Medley LLC 7.25% Notes due 2024",
        "price": 18.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MDLX",
        "name": "Medley LLC 6.875% Senior Notes due 2026",
        "price": 17.255,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MDLY",
        "name": "Medley Management Inc. Class A",
        "price": 2.89,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MEN",
        "name": "Blackrock MuniEnhanced Fund Inc",
        "price": 11.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MFCB",
        "name": "MFC Bancorp Ltd.",
        "price": 12.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MFD",
        "name": "Macquarie First Trust Global",
        "price": 11.52,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MFO",
        "name": "MFA Financial Inc. 8.00% Senior Notes due 2042",
        "price": 26.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MFT",
        "name": "Blackrock MuniYield Investment Quality Fund of Beneficial Interest",
        "price": 14.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MFV",
        "name": "MFS Special Value Trust",
        "price": 6.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MGF",
        "name": "MFS Government Markets Income Trust",
        "price": 4.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MHD",
        "name": "Blackrock MuniHoldings Fund Inc.",
        "price": 17.49,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MHF",
        "name": "Western Asset Municipal High Income Fund Inc.",
        "price": 7.99,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MHLA",
        "name": "Maiden Holdings Ltd. 6.625% Notes due 2046",
        "price": 21.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MHN",
        "name": "Blackrock MuniHoldings New York Quality Fund Inc.",
        "price": 14.14,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MHNC",
        "name": "Maiden Holdings North America Ltd. 7.75% Notes due 2043",
        "price": 23.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MIY",
        "name": "Blackrock MuniYield Michigan Quality Fund Inc.",
        "price": 14.62,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MLP",
        "name": "Maui Land & Pineapple Company Inc.",
        "price": 13.58,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MMD",
        "name": "MainStay MacKay DefinedTerm Municipal Opportunities Fund",
        "price": 21.96,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MNE",
        "name": "Blackrock Muni New York Intermediate Duration Fund Inc",
        "price": 15.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MOSC",
        "name": "Mosaic Acquisition Corp. Class A",
        "price": 9.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MPV",
        "name": "Barings Participation Investors",
        "price": 16.7801,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MSD",
        "name": "Morgan Stanley Emerging Markets Debt Fund Inc.",
        "price": 10.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MUE",
        "name": "Blackrock MuniHoldings Quality Fund II Inc.",
        "price": 13.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MVCD",
        "name": "MVC Capital Inc. 6.25% Senior Notes due 2022",
        "price": 25.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MVT",
        "name": "Blackrock MuniVest Fund II Inc.",
        "price": 15.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MXE",
        "name": "Mexico Equity and Income Fund Inc. (The)",
        "price": 11.82,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "MYC",
        "name": "Blackrock MuniYield California Fund Inc.",
        "price": 14.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NAZ",
        "name": "Nuveen Arizona Quality Municipal Income Fund",
        "price": 14.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NBB",
        "name": "Nuveen Build America Bond Fund of Beneficial Interest",
        "price": 22.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NBD",
        "name": "Nuveen Build America Bond Opportunity Fund of Beneficial Interest",
        "price": 20.25,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NCB",
        "name": "Nuveen California Municipal Value Fund 2 of Beneficial Interest",
        "price": 15.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NDRO",
        "name": "Enduro Royalty Trust Trust Units representing beneficial interest in the trust",
        "price": 3.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NGVC",
        "name": "Natural Grocers by Vitamin Cottage Inc.",
        "price": 8.21,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NHA",
        "name": "Nuveen Municipal 2021 Target Term Fund Fund",
        "price": 9.88,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NKG",
        "name": "Nuveen Georgia Quality Municipal Income Fund",
        "price": 12.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NKX",
        "name": "Nuveen California AMT-Free Quality Municipal Income Fund",
        "price": 15.967,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NMI",
        "name": "Nuveen Municipal Income Fund Inc.",
        "price": 11.57,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NMS",
        "name": "Nuveen Minnesota Quality Municipal Income Fund",
        "price": 14.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NMT",
        "name": "Nuveen Massachusetts Quality Municipal Income Fund",
        "price": 14.29,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NMY",
        "name": "Nuveen Maryland Quality Municipal Income Fund",
        "price": 14.02,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NNC",
        "name": "Nuveen North Carolina Quality Municipal Income Fund",
        "price": 13.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NNY",
        "name": "Nuveen New York Municipal Value Fund Inc.",
        "price": 10.72,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NOM",
        "name": "Nuveen Missouri Quality Municipal Income Fund",
        "price": 14.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NPN",
        "name": "Nuveen Pennsylvania Municipal Value Fund of Beneficial Interest",
        "price": 15.2111,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NPV",
        "name": "Nuveen Virginia Quality Municipal Income Fund",
        "price": 14.7069,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NQP",
        "name": "Nuveen Pennsylvania Quality Municipal Income Fund",
        "price": 14.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NRT",
        "name": "North European Oil Royality Trust",
        "price": 4.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NSS",
        "name": "NuStar Logistics L.P. 7.625% Fixed-to-Floating Rate Subordinated Notes due 2043",
        "price": 26.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NTC",
        "name": "Nuveen Connecticut Quality Municipal Income Fund",
        "price": 12.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NTX",
        "name": "Nuveen Texas Quality Municipal Income Fund",
        "price": 14.64,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NTZ",
        "name": "Natuzzi S.p.A.",
        "price": 1.82,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NUO",
        "name": "Nuveen Ohio Quality Municipal Income Fund",
        "price": 15.68,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NUW",
        "name": "Nuveen AMT-Free Municipal Value Fund",
        "price": 16.63,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NWHM",
        "name": "The New Home Company Inc.",
        "price": 5.45,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NXC",
        "name": "Nuveen California Select Tax-Free Income Portfolio",
        "price": 16.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NXP",
        "name": "Nuveen Select Tax Free Income Portfolio",
        "price": 16.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NXR",
        "name": "Nuveen Select Tax Free Income Portfolio III",
        "price": 16.6331,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "NYV",
        "name": "Nuveen New York Municipal Value Fund 2 of Beneficial Interest",
        "price": 14.67,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ODC",
        "name": "Oil-Dri Corporation Of America",
        "price": 36.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OMAD",
        "name": "One Madison Corporation Class A",
        "price": 9.9,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "OSLE",
        "name": "Oaktree Specialty Lending Corporation 5.875% Senior Notes due 2024",
        "price": 25.6322,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PAI",
        "name": "Western Asset Income Fund",
        "price": 15.74,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PBB",
        "name": "Prospect Capital Corporation 6.25% Notes due 2024",
        "price": 25.82,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PCM",
        "name": "PCM Fund Inc.",
        "price": 11.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PCQ",
        "name": "PIMCO California Municipal Income Fund",
        "price": 19.06,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PFD",
        "name": "Flaherty & Crumrine Preferred Income Fund Incorporated",
        "price": 17.4,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PFH",
        "name": "Cabco Tr Jcp 7.625",
        "price": 5.84,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PFK",
        "name": "Prudential Financial Inflation-Linked Retail Medium Linked Retail Medium-Term Notes due April 10 2018",
        "price": 24.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PGP",
        "name": "Pimco Global Stocksplus & Income Fund StocksPlus & Income Fund of Beneficial Interest",
        "price": 12.43,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PJH",
        "name": "Prudential Financial Inc. 5.75% Junior Subordinated Notes due 2052",
        "price": 26.05,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PKO",
        "name": "Pimco Income Opportunity Fund of Beneficial Interest",
        "price": 28.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PMO",
        "name": "Putnam Municipal Opportunities Trust",
        "price": 13.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PNF",
        "name": "PIMCO New York Municipal Income Fund",
        "price": 13.5598,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PRH",
        "name": "Prudential Financial Inc. 5.70% Junior Subordinated Notes due 2053",
        "price": 25.98,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PSF",
        "name": "Cohen & Steers Select Preferred and Income Fund Inc.",
        "price": 32.8,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PYS",
        "name": "Merrill Lynch Depositor Inc PPlus Tr Ser RRD-1 Tr Ctf Cl A",
        "price": 21.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "PZC",
        "name": "PIMCO California Municipal Income Fund III of Beneficial Interest",
        "price": 11.31,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RFI",
        "name": "Cohen & Steers Total Return Realty Fund Inc.",
        "price": 15.16,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RFT",
        "name": "RAIT Financial Trust 7.625% Senior Notes due 2024",
        "price": 17.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RGT",
        "name": "Royce Global Value Trust Inc.",
        "price": 12.32,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RIV",
        "name": "RiverNorth Opportunities Fund Inc.",
        "price": 16.92,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "RWGE",
        "name": "Regalwood Global Energy Ltd. Class A",
        "price": 10.3575,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SAR",
        "name": "Saratoga Investment Corp New",
        "price": 27.65,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SBR",
        "name": "Sabine Royalty Trust",
        "price": 36.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SCA",
        "name": "Stellus Capital Investment Corporation 5.75% Notes due 2022",
        "price": 25.7559,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SCD",
        "name": "LMP Capital and Income Fund Inc.",
        "price": 15.54,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SCX",
        "name": "L.S. Starrett Company (The)",
        "price": 5.15,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SDR",
        "name": "SandRidge Mississippian Trust II representing Beneficial Interests",
        "price": 0.226,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SDT",
        "name": "SandRidge Mississippian Trust I of Beneficial Interest",
        "price": 0.170128,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SFB",
        "name": "Stifel Financial Corporation 5.20% Senior Notes due 2047",
        "price": 26.71,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SOL",
        "name": "Renesola Ltd. ADR",
        "price": 1.73,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SPE",
        "name": "Special Opportunities Fund Inc",
        "price": 14.95,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SRF",
        "name": "Cushing Energy Income Fund of Beneficial Interest",
        "price": 6.19,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SSWA",
        "name": "Seaspan Corporation 7.125% Notes due 2027",
        "price": 25.7695,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SWJ",
        "name": "Stanley Black & Decker Inc. 5.75% Junior Subordinated Debenture due 2052",
        "price": 25.35,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SWZ",
        "name": "Swiss Helvetia Fund Inc. (The)",
        "price": 8.79,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "SXI",
        "name": "Standex International Corporation",
        "price": 74.01,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TCCA",
        "name": "Triangle Capital Corporation 6.375% Senior Notes due 2022",
        "price": 25.1,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TCRZ",
        "name": "THL Credit Inc. 6.75% Notes due 2022",
        "price": 25.55,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TDI",
        "name": "Telephone and Data Systems Inc. Sr Nt",
        "price": 28.04,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TDJ",
        "name": "Telephone and Data Systems Inc. 7% Senior Notes due 2060",
        "price": 25.91,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "THGA",
        "name": "The Hanover Insurance Group Inc. 6.35% Subordinated Debentures due 2053",
        "price": 25.94,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TPGH",
        "name": "TPG Pace Holdings Corp. Class A",
        "price": 10.5,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TPVY",
        "name": "TriplePoint Venture Growth BDC Corp. 5.75% Notes due 2022",
        "price": 25.93,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TPZ",
        "name": "Tortoise Power and Energy Infrastructure Fund Inc",
        "price": 16.61,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TVE",
        "name": "Tennessee Valley Authority",
        "price": 26.0,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TWN",
        "name": "Taiwan Fund Inc. (The)",
        "price": 20.47,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "TY",
        "name": "Tri Continental Corporation",
        "price": 28.83,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UBP",
        "name": "Urstadt Biddle Properties Inc.",
        "price": 18.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "USDP",
        "name": "USD Partners LP representing limited partner interest",
        "price": 10.18,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "UZC",
        "name": "United States Cellular Corporation 7.25% Senior Notes due 2064",
        "price": 26.38,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VBF",
        "name": "Invesco Bond Fund",
        "price": 20.66,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VLT",
        "name": "Invesco High Income Trust II",
        "price": 14.51,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VNCE",
        "name": "Vince Holding Corp.",
        "price": 14.6,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "VZA",
        "name": "Verizon Communications Inc. 5.90% Notes due 2054",
        "price": 25.7,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WALA",
        "name": "Western Alliance Bancorporation 6.25% Subordinated Debentures due 2056",
        "price": 26.2607,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WEA",
        "name": "Western Asset Bond Fund Share of Beneficial Interest",
        "price": 14.75,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "WMLP",
        "name": "Westmoreland Resource Partners LP representing Limited Partner Interests",
        "price": 2.09,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "XFLT",
        "name": "XAI Octagon Floating Rate & Alternative Income Term Trust of Beneficial Interest",
        "price": 8.27,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ZBK",
        "name": "Zions Bancorporation 6.95% Fixed-to-Floating Rate Subordinated Notes due September 15 2028",
        "price": 30.7096,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "ZYME",
        "name": "Zymeworks Inc.",
        "price": 46.44,
        "exchange": "New York Stock Exchange"
    },
    {
        "symbol": "POLIX",
        "name": "Polen Growth Fund Institutional Class",
        "price": 37.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RCGTX",
        "name": "AllianzGI Technology Fund Class C",
        "price": 40.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LDVAX",
        "name": "Leland Thomson Reuters Venture Capital Index Fund Class A",
        "price": 25.51,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "INPIX",
        "name": "ProFunds Internet UltraSector Fund Investor Class",
        "price": 106.13,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "INPSX",
        "name": "ProFunds Internet UltraSector Fund Service Class",
        "price": 81.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SCATX",
        "name": "Virtus Zevenbergen Innovative Growth Stock Fund Class I",
        "price": 37.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CBAIX",
        "name": "Calvert Balanced Fund Class I",
        "price": 37.17,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BFOCX",
        "name": "Berkshire Focus Fund",
        "price": 33.17,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CSGCX",
        "name": "Calvert Balanced Fund Class C",
        "price": 35.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "USNQX",
        "name": "USAA NASDAQ-100 Index Fund",
        "price": 26.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MMCFX",
        "name": "AMG Managers Emerging Opportunities Fund Class N",
        "price": 40.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CGMRX",
        "name": "CGM Realty Fund",
        "price": 27.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CAMOX",
        "name": "Cambiar Opportunity Fund Class Investor",
        "price": 22.7,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "OTPIX",
        "name": "ProFunds NASDAQ-100 Fund Investor Class",
        "price": 92.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "USMAX",
        "name": "Natixis ASG Tactical U.S. Market Fund Class A",
        "price": 17.18,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MGOAX",
        "name": "Victory Munder Mid-Cap Core Growth Fund Class A",
        "price": 14.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TEGYX",
        "name": "Touchstone Mid Cap Growth Fund Class Y",
        "price": 36.29,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "OTPSX",
        "name": "ProFunds NASDAQ-100 Fund Service Class",
        "price": 75.49,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MMSRX",
        "name": "Victory Munder Mid-Cap Core Growth Fund Class R",
        "price": 12.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SASWX",
        "name": "AIG Small-Cap Fund Class W",
        "price": 17.7,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYCOX",
        "name": "Rydex NASDAQ-100 Fund Class C",
        "price": 38.54,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FGDKX",
        "name": "Fidelity Growth Discovery Fund Class K",
        "price": 43.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRLGX",
        "name": "T. Rowe Price Institutional Large Cap Growth Fund",
        "price": 48.08,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NEAGX",
        "name": "Needham Aggressive Growth Fund Retail Class",
        "price": 22.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RBRCX",
        "name": "RBC Small Cap Core Fund Class R6",
        "price": 32.46,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FDSVX",
        "name": "Fidelity Growth Discovery Fund",
        "price": 43.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TARKX",
        "name": "Tarkio Fund",
        "price": 19.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ATACX",
        "name": "ATAC Rotation Fund Investor Class",
        "price": 32.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DSMLX",
        "name": "Touchstone Large Company Growth Fund Class Institutional",
        "price": 47.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QLSCX",
        "name": "Federated MDT Small Cap Core Fund Class R6",
        "price": 20.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GGGAX",
        "name": "Gabelli Global Growth Fund Class A",
        "price": 38.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TEGIX",
        "name": "Touchstone Mid Cap Growth Fund Institutional Class",
        "price": 36.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WSMNX",
        "name": "William Blair Small-Mid Cap Growth Fund Class N",
        "price": 27.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TSNIX",
        "name": "T. Rowe Price Science and Technology Fund I Class",
        "price": 46.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRSCX",
        "name": "T. Rowe Price Science and Technology Fund",
        "price": 46.23,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TEGAX",
        "name": "Touchstone Mid Cap Growth Fund Class A",
        "price": 34.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GTCSX",
        "name": "Glenmede Small Cap Equity Portfolio Class Advisor",
        "price": 26.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VSSCX",
        "name": "JPMorgan Small Cap Core Fund Class R5",
        "price": 51.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WSMDX",
        "name": "William Blair Small-Mid Cap Growth Fund Class I",
        "price": 28.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TOECX",
        "name": "Touchstone Mid Cap Growth Fund Class C",
        "price": 20.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ZSCIX",
        "name": "Zacks Small-Cap Core Fund Institutional Class",
        "price": 27.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRUFX",
        "name": "T. Rowe Price Growth Stock Fund I Class",
        "price": 80.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TSAGX",
        "name": "Touchstone Large Company Growth Fund Class A",
        "price": 47.13,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TILHX",
        "name": "TIAA-CREF Large Cap Growth Fund Advisor Class",
        "price": 24.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRGFX",
        "name": "T. Rowe Price Growth Stock Fund",
        "price": 80.17,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ADCCX",
        "name": "American Century Disciplined Growth Fund Class C",
        "price": 21.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TILPX",
        "name": "TIAA-CREF Large-Cap Growth Fund Premier Class",
        "price": 24.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GTSCX",
        "name": "Glenmede Small Cap Equity Portfolio Institutional Class",
        "price": 28.15,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRSAX",
        "name": "T. Rowe Price Growth Stock Fund Advisor Class",
        "price": 78.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TIRTX",
        "name": "TIAA-CREF Large-Cap Growth Fund Retail Class",
        "price": 24.01,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NEAIX",
        "name": "Needham Aggressive Growth Fund Institutional Class",
        "price": 23.48,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RRGSX",
        "name": "T. Rowe Price Growth Stock Fund R Class",
        "price": 75.1,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TILRX",
        "name": "TIAA-CREF Large-Cap Growth Fund Retirement Class",
        "price": 23.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HRCUX",
        "name": "Carillon ClariVest Capital Appreciation Fund Class R6",
        "price": 51.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FLRYX",
        "name": "Nuveen Large Cap Select Fund Class I",
        "price": 34.7,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LSSNX",
        "name": "Loomis Sayles Small Cap Growth Fund Class N",
        "price": 28.43,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ZSCCX",
        "name": "Zacks Small-Cap Core Fund Investor Class",
        "price": 26.97,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QMORX",
        "name": "AQR Large Cap Momentum Style Fund Class R6",
        "price": 23.13,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JMCRX",
        "name": "James Micro Cap Fund",
        "price": 15.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DISIX",
        "name": "BNY Mellon Small Cap Stock Index Fund Class I",
        "price": 28.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DISSX",
        "name": "BNY Mellon Small Cap Stock Index Fund Investor Shares",
        "price": 28.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FLRAX",
        "name": "Nuveen Large Cap Select Fund Class A",
        "price": 34.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HRCMX",
        "name": "Carillon ClariVest Capital Appreciation Fund Class R5",
        "price": 51.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FLYCX",
        "name": "Nuveen Large Cap Select Fund Class C",
        "price": 31.86,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VMGMX",
        "name": "Vanguard Mid-Cap Growth Index Fund Admiral Shares",
        "price": 73.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "USAAX",
        "name": "USAA Growth Fund",
        "price": 28.35,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTQGX",
        "name": "Fidelity Focused Stock Fund",
        "price": 28.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QLSGX",
        "name": "Federated MDT Small Cap Growth Fund Class R6",
        "price": 25.95,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QISGX",
        "name": "Federated MDT Small Cap Growth Fund Institutional Shares",
        "price": 25.94,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSRFX",
        "name": "Fidelity Select Transportation Portfolio",
        "price": 96.19,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QCSGX",
        "name": "Federated MDT Small Cap Growth Fund Class C Shares",
        "price": 21.52,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FOCWX",
        "name": "AIG Focused Growth Fund Class W",
        "price": 28.48,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VMGIX",
        "name": "Vanguard Mid-Cap Growth Index Fund Investor Shares",
        "price": 66.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DSEEX",
        "name": "DoubleLine Shiller Enhanced CAPE Class I",
        "price": 16.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FOCCX",
        "name": "AIG Focused Growth Fund Class C",
        "price": 25.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DSENX",
        "name": "DoubleLine Shiller Enhanced CAPE Class N",
        "price": 16.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CCALX",
        "name": "Conestoga Small Cap Institutional Class",
        "price": 63.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PFPWX",
        "name": "Parnassus Endeavor Fund Institutional Shares",
        "price": 40.09,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QASGX",
        "name": "Federated MDT Small Cap Growth Fund Class A Shares",
        "price": 24.77,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "EGFIX",
        "name": "Edgewood Growth Fund Class Institutional",
        "price": 41.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VTSIX",
        "name": "Vanguard Tax-Managed Small-Cap Fund Institutional Shares",
        "price": 68.04,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "POGRX",
        "name": "PRIMECAP Odyssey Growth Fund",
        "price": 42.16,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HACAX",
        "name": "Harbor Capital Appreciation Fund Institutional Class",
        "price": 85.08,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CCASX",
        "name": "Conestoga Small Cap Fund Investors Class",
        "price": 62.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "UIGRX",
        "name": "USAA Growth Fund Institutional Shares",
        "price": 28.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HRCAX",
        "name": "Harbor Capital Appreciation Fund Administrative Class",
        "price": 83.08,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HCAIX",
        "name": "Harbor Capital Appreciation Fund Investor Class",
        "price": 81.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FLGEX",
        "name": "Fidelity Large Cap Growth Enhanced Index Fund",
        "price": 23.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TPLGX",
        "name": "T. Rowe Price Institutional Large Cap Core Growth Fund",
        "price": 53.08,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VTMSX",
        "name": "Vanguard Tax-Managed Small Cap Fund Admiral Shares",
        "price": 67.88,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CSXCX",
        "name": "Calvert US Large Cap Core Responsible Index Fund Class C",
        "price": 26.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PARWX",
        "name": "Parnassus Endeavor Fund Investor Shares",
        "price": 40.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "EGFFX",
        "name": "Edgewood Growth Fund Retail Class",
        "price": 39.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PJFBX",
        "name": "PGIM Jennison Growth Fund- Class B",
        "price": 35.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CYPIX",
        "name": "ProFunds Consumer Services UltraSector Fund Investor Class",
        "price": 52.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FBGRX",
        "name": "Fidelity Blue Chip Growth Fund",
        "price": 119.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TSCIX",
        "name": "AMG TimesSquare Small Cap Growth Fund Class Z",
        "price": 15.51,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MECAX",
        "name": "AMG Managers Cadence Emerging Companies Fund - Class N",
        "price": 52.08,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WBSIX",
        "name": "William Blair Small Cap Growth Fund Class I",
        "price": 32.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MECIX",
        "name": "AMG Managers Cadence Emerging Companies Fund - Class I",
        "price": 57.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PABGX",
        "name": "T. Rowe Price Blue Chip Growth Fund Advisor Class",
        "price": 133.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRBCX",
        "name": "T. Rowe Price Blue Chip Growth Fund",
        "price": 135.64,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FBGKX",
        "name": "Fidelity Blue Chip Growth Fund Class K",
        "price": 120.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RRBGX",
        "name": "T. Rowe Price Blue Chip Growth Fund Class R",
        "price": 127.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSHOX",
        "name": "Fidelity Select Construction & Housing Portfolio",
        "price": 67.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WSMGX",
        "name": "Wilshire Small Company Growth Portfolio Fund Class Institutional",
        "price": 31.59,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ATSMX",
        "name": "AQR TM Small Cap Momentum Style Fund Class I",
        "price": 20.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TBCIX",
        "name": "T. Rowe Price Blue Chip Growth Fund I Class",
        "price": 135.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QTSRX",
        "name": "AQR TM Small Cap Momentum Style Fund Class R6",
        "price": 20.67,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CPECX",
        "name": "Catalyst Dynamic Alpha Fund Class C",
        "price": 19.29,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WBSNX",
        "name": "William Blair Small Cap Growth Fund Class N",
        "price": 29.13,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CYPSX",
        "name": "ProFunds Consumer Services UltraSector Fund Service Class",
        "price": 44.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SFLWX",
        "name": "AIG Focused Alpha Large-Cap Fund Class W",
        "price": 29.21,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DTSGX",
        "name": "Wilshire Small Company Growth Portfolio Investment Class Shares",
        "price": 28.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CPEAX",
        "name": "Catalyst Dynamic Alpha Fund Class A",
        "price": 20.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JLGAX",
        "name": "JAG Large Cap Growth Fund Class A",
        "price": 18.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GURIX",
        "name": "Guggenheim Risk Managed Real Estate Fund Institutional",
        "price": 35.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ROGSX",
        "name": "Red Oak Technology Select Fund",
        "price": 32.83,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CVMIX",
        "name": "Calvert Emerging Markets Equity Fund Class I",
        "price": 17.46,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BIPSX",
        "name": "ProFunds Biotechnology UltraSector Fund Service Class",
        "price": 48.88,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BIPIX",
        "name": "ProFunds Biotechnology UltraSector Fund Investor Class",
        "price": 63.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ASMOX",
        "name": "AQR Small Cap Momentum Style Fund Class I",
        "price": 20.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMPFX",
        "name": "Nuveen Small Cap Growth Opportunities Fund Class R6",
        "price": 29.78,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TSCPX",
        "name": "AMG TimesSquare Small Cap Growth Fund Class N",
        "price": 14.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GURAX",
        "name": "Guggenheim Risk Managed Real Estate Fund Class A",
        "price": 35.01,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FFGRX",
        "name": "Emerald Growth Fund Investor Class",
        "price": 28.13,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIMPX",
        "name": "Nuveen Small Cap Growth Opportunities Fund Class I",
        "price": 29.56,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CPEIX",
        "name": "Catalyst Dynamic Alpha Fund Class I",
        "price": 20.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WSCGX",
        "name": "Wells Fargo Small Company Growth Fund - Class Inst",
        "price": 58.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NVSCX",
        "name": "Wells Fargo Small Company Growth Fund - Class Admin",
        "price": 56.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGPIX",
        "name": "ProFunds Small Cap Growth Fund Investor Class",
        "price": 95.97,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GLVNX",
        "name": "Invesco Oppenheimer Global Focus Fund Class R",
        "price": 55.66,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FKKSX",
        "name": "Federated Kaufmann Small Cap Fund Class R Shares",
        "price": 47.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BMGCX",
        "name": "BlackRock Mid-Cap Growth Equity Portfolio Investor C Shares",
        "price": 22.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTRNX",
        "name": "Fidelity Trend Fund",
        "price": 117.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HSPGX",
        "name": "Emerald Growth Fund Class A",
        "price": 28.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DFDMX",
        "name": "DF Dent Midcap Growth Fund Investor Shares",
        "price": 29.94,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HSPCX",
        "name": "Emerald Growth Fund Class C",
        "price": 23.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ALGRX",
        "name": "Alger Focus Equity Fund Class I",
        "price": 43.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSAIX",
        "name": "Fidelity Select Portfolios Air Transportation Portfolio",
        "price": 73.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JARTX",
        "name": "Janus Henderson Forty Fund Class S",
        "price": 39.04,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JFRNX",
        "name": "Janus Henderson Forty Fund Class N",
        "price": 42.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGTTX",
        "name": "Columbia Seligman Global Technology Fund Institutional 2 Class",
        "price": 48.94,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BMRRX",
        "name": "BlackRock Mid-Cap Growth Equity Portfolio Class R",
        "price": 28.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JCAPX",
        "name": "Janus Henderson Forty Fund Class I",
        "price": 42.62,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMPCX",
        "name": "Nuveen Small Cap Growth Opportunities Fund Class C",
        "price": 17.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SHTCX",
        "name": "Columbia Seligman Global Technology Fund Class C",
        "price": 34.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JDCAX",
        "name": "Janus Henderson Forty Fund Class A",
        "price": 40.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ALZFX",
        "name": "Alger Focus Equity Fund Class Z",
        "price": 44.43,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CSGZX",
        "name": "Columbia Seligman Global Technology Fund Institutional Class",
        "price": 48.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JDCRX",
        "name": "Janus Henderson Forty Fund Class R",
        "price": 35.9,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGTRX",
        "name": "Columbia Seligman Global Technology Fund Class R",
        "price": 45.43,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "KMKYX",
        "name": "Kinetics Market Opportunities Fund Class Institutional",
        "price": 28.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JACCX",
        "name": "Janus Henderson Forty Fund Class C",
        "price": 32.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ALCFX",
        "name": "Alger Focus Equity Fund Class C",
        "price": 40.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BMGAX",
        "name": "BlackRock Mid-Cap Growth Equity Portfolio Investor A Shares",
        "price": 28.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ALAFX",
        "name": "Alger Focus Equity Fund Class A",
        "price": 43.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JLGMX",
        "name": "JPMorgan Large Cap Growth Fund Class R6",
        "price": 47.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CAMAX",
        "name": "Cambiar Global Ultra Focus Fund Investor Class",
        "price": 19.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CCHRX",
        "name": "Columbia Seligman Global Technology Fund Advisor Class",
        "price": 49.56,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "POAGX",
        "name": "PRIMECAP Odyssey Aggressive Growth Fund",
        "price": 47.17,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WAAEX",
        "name": "Wasatch Small Cap Growth Fund Investor Class",
        "price": 42.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "KMKNX",
        "name": "Kinetics Market Opportunities Fund No Load Class",
        "price": 27.88,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MIGPX",
        "name": "Morgan Stanley Institutional Fund, Inc. Global Advantage Portfolio Class A",
        "price": 19.44,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VWUAX",
        "name": "Vanguard U.S. Growth Fund Admiral Shares",
        "price": 125.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RIVBX",
        "name": "Riverbridge Growth Fund Institutional Class",
        "price": 24.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "UMPIX",
        "name": "ProFunds UltraMid Cap Fund Investor Class",
        "price": 49.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BGLUX",
        "name": "Baron Global Advantage Fund R6 Shares",
        "price": 33.67,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TTMIX",
        "name": "T. Rowe Price Communications & Technology Fund I Class",
        "price": 138.14,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRMTX",
        "name": "T. Rowe Price Communications & Technology Fund Investor Class",
        "price": 137.85,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TCMSX",
        "name": "TCM Small Cap Growth Fund",
        "price": 37.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MSPTX",
        "name": "Morgan Stanley Institutional Fund, Inc. Global Advantage Portfolio Class C",
        "price": 18.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MIGIX",
        "name": "Morgan Stanley Institutional Fund, Inc. Global Advantage Portfolio Class I",
        "price": 19.88,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "UMPSX",
        "name": "ProFunds UltraMid Cap Fund Service Class",
        "price": 39.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSCSX",
        "name": "Fidelity Select Software & IT Services Portfolio",
        "price": 22.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PAREX",
        "name": "T. Rowe Price Real Estate Fund Advisor Class",
        "price": 27.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SCMIX",
        "name": "Columbia Seligman Communications and Information Fund Institutional 2 Class",
        "price": 95.29,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SCIOX",
        "name": "Columbia Seligman Communications and Information Fund Advisor Class",
        "price": 82.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SLMCX",
        "name": "Columbia Seligman Communications and Information Fund Class A",
        "price": 85.13,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SCIRX",
        "name": "Columbia Seligman Communications and Information Fund Class R",
        "price": 79.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CISGX",
        "name": "Touchstone Sands Capital Institutional Growth Fund",
        "price": 24.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CCIZX",
        "name": "Columbia Seligman Communications and Information Fund Institutional Class",
        "price": 94.77,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FZAHX",
        "name": "Fidelity Advisor Growth Opportunities Fund Class Z",
        "price": 108.78,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GSXIX",
        "name": "Aberdeen U.S. Small Cap Equity Fund Institutional Service Class",
        "price": 36.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRJIX",
        "name": "T. Rowe Price New Horizons Fund I Class",
        "price": 66.16,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PVIVX",
        "name": "Paradigm Micro-Cap Fund",
        "price": 32.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "REICX",
        "name": "West Loop Realty Fund Class C Shares",
        "price": 15.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NWJFX",
        "name": "Nationwide Ziegler NYSE Arca Tech 100 Index Fund Institutional Service Class",
        "price": 104.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BDFIX",
        "name": "Baron Discovery Fund Institutional Shares",
        "price": 23.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSPTX",
        "name": "Fidelity Select Technology Portfolio",
        "price": 22.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FATEX",
        "name": "Fidelity Advisor Technology Fund Class M",
        "price": 61.95,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRNHX",
        "name": "T. Rowe Price New Horizons Fund",
        "price": 65.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSRNX",
        "name": "Fidelity Real Estate Index Fund",
        "price": 17.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FELTX",
        "name": "Fidelity Advisor Semiconductors Fund Class M",
        "price": 27.43,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GSXCX",
        "name": "Aberdeen U.S. Small Cap Equity Fund Class C",
        "price": 27.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FADTX",
        "name": "Fidelity Advisor Technology Fund Class A",
        "price": 66.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTHCX",
        "name": "Fidelity Advisor Technology Fund Class C",
        "price": 53.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TGCNX",
        "name": "TCW Select Equities Fund Class N",
        "price": 26.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BLYYX",
        "name": "American Beacon Bridgeway Large Cap Growth Fund Y Class",
        "price": 31.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FELIX",
        "name": "Fidelity Advisor Semiconductors Fund Class I",
        "price": 30.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MNREX",
        "name": "Manning & Napier Real Estate Series Class S",
        "price": 17.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "USSCX",
        "name": "USAA Science & Technology Fund",
        "price": 25.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BLYAX",
        "name": "American Beacon Bridgeway Large Cap Growth Fund A Class",
        "price": 31.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRJQX",
        "name": "PGIM Jennison Global Opportunities Fund-Class R6",
        "price": 30.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FELAX",
        "name": "Fidelity Advisor Semiconductors Fund Class A",
        "price": 28.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FRESX",
        "name": "Fidelity Real Estate Investment Portfolio",
        "price": 47.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FELCX",
        "name": "Fidelity Advisor Semiconductors Fund Class C",
        "price": 24.49,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ORECX",
        "name": "Invesco Oppenheimer Real Estate Fund Class C",
        "price": 27.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CGTUX",
        "name": "Columbia Global Technology Growth Fund Institutional 3 Class",
        "price": 46.62,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CTCAX",
        "name": "Columbia Global Technology Growth Fund Class A",
        "price": 43.62,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CTHRX",
        "name": "Columbia Global Technology Growth Fund Institutional 2 Class",
        "price": 46.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PXSGX",
        "name": "Virtus KAR Small-Cap Growth Fund Class I",
        "price": 43.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FREAX",
        "name": "Nuveen Real Estate Securities Fund Class A",
        "price": 21.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PSGCX",
        "name": "Virtus KAR Small-Cap Growth Fund Class C",
        "price": 38.02,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CMTFX",
        "name": "Columbia Global Technology Growth Fund Institutional Class",
        "price": 45.51,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CTYRX",
        "name": "Columbia Global Technology Growth Fund Advisor Class",
        "price": 46.15,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CTHCX",
        "name": "Columbia Global Technology Growth Fund Class C",
        "price": 38.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PSGAX",
        "name": "Virtus KAR Small-Cap Growth Fund Class A",
        "price": 42.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ORENX",
        "name": "Invesco Oppenheimer Real Estate Fund Class R",
        "price": 28.54,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FARCX",
        "name": "Nuveen Real Estate Securities Fund Class I",
        "price": 22.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HGOAX",
        "name": "The Hartford Growth Opportunities Fund Class A",
        "price": 43.72,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FRSSX",
        "name": "Nuveen Real Estate Securities Fund Class R3",
        "price": 21.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HGOSX",
        "name": "The Hartford Growth Opportunities Fund Class R4",
        "price": 47.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FBSOX",
        "name": "Fidelity Select IT Services Portfolio",
        "price": 84.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ARYCX",
        "name": "American Century Real Estate Fund C Class",
        "price": 31.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AIGYX",
        "name": "Aberdeen Realty Income & Growth Fund Institutional Class",
        "price": 16.37,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AIAGX",
        "name": "Aberdeen Realty Income & Growth Fund Class A",
        "price": 16.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGRHX",
        "name": "Wells Fargo Growth Fund - Class R6",
        "price": 48.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGRNX",
        "name": "Wells Fargo Growth Fund - Class Inst",
        "price": 48.1,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGRKX",
        "name": "Wells Fargo Growth Fund - Class Admin",
        "price": 43.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGRAX",
        "name": "Wells Fargo Growth Fund - Class A",
        "price": 36.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MGLBX",
        "name": "Marsico Global Fund",
        "price": 18.97,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NWSAX",
        "name": "Nationwide Small Company Growth Fund Class A",
        "price": 20.29,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CSRSX",
        "name": "Cohen & Steers Realty Shares Fund Class L",
        "price": 70.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CSRIX",
        "name": "Cohen & Steers Institutional Realty Shares",
        "price": 50.14,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BCSIX",
        "name": "Brown Capital Management Small Company Fund Investor Shares",
        "price": 104.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BCSSX",
        "name": "Brown Capital Management Small Company Fund Institutional Shares",
        "price": 107.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRGTX",
        "name": "T. Rowe Price Global Technology Fund",
        "price": 18.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BFTIX",
        "name": "Baron Fifth Avenue Growth Fund Institutional Class",
        "price": 38.09,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GSOFX",
        "name": "GMO Special Opportunities Fund Class VI",
        "price": 19.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SSETX",
        "name": "BNY Mellon Growth Fund Class I",
        "price": 36.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSDAX",
        "name": "Fidelity Select Defense & Aerospace Portfolio",
        "price": 19.25,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QUAYX",
        "name": "AB Small Cap Growth Portfolio Advisor Class",
        "price": 64.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AGOZX",
        "name": "Alger Small Cap Focus Fund Class Z",
        "price": 23.9,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WHOSX",
        "name": "Wasatch-Hoisington U.S. Treasury Fund",
        "price": 19.85,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CSXAX",
        "name": "Calvert US Large Cap Core Responsible Index Fund Class A",
        "price": 28.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GLFOX",
        "name": "Lazard Global Listed Infrastructure Portfolio Open Shares",
        "price": 16.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GLIFX",
        "name": "Lazard Global Listed Infrastructure Portfolio Institutional Shares",
        "price": 16.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYCVX",
        "name": "Rydex Dow 2x Strategy Fund Class H",
        "price": 113.44,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYCYX",
        "name": "Rydex Dow 2x Strategy Fund Class C",
        "price": 99.21,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYLDX",
        "name": "Rydex Dow 2x Strategy Fund Class A",
        "price": 113.83,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BSTSX",
        "name": "BlackRock Technology Opportunities Fund Service Shares",
        "price": 39.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CISIX",
        "name": "Calvert US Large Cap Core Responsible Index Fund Class I",
        "price": 29.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DXQLX",
        "name": "Direxion Monthly NASDAQ-100 Bull 2X Fund Investor Class",
        "price": 38.1686,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "UOPIX",
        "name": "ProFunds UltraNASDAQ-100 Fund Investor Class",
        "price": 108.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "UOPSX",
        "name": "ProFunds UltraNASDAQ-100 Fund Service Class",
        "price": 86.67,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYVLX",
        "name": "Rydex NASDAQ-100 2x Strategy Fund Class A",
        "price": 232.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYVYX",
        "name": "Rydex NASDAQ-100 2x Strategy Fund Class H",
        "price": 232.42,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYCCX",
        "name": "Rydex NASDAQ-100 2x Strategy Fund Class C",
        "price": 181.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCPIX",
        "name": "Fidelity Advisor International Capital Appreciation Fund I Class",
        "price": 24.86,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CAECX",
        "name": "Columbia Acorn European Fund Class C",
        "price": 21.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PASSX",
        "name": "T. Rowe Price Small-Cap Stock Fund Advisor Class",
        "price": 53.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RRCOX",
        "name": "T. Rowe Price U.S. Equity Research Fund R Class",
        "price": 32.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRSSX",
        "name": "T. Rowe Price Institutional Small-Cap Stock Fund",
        "price": 26.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NSCCX",
        "name": "Nuveen NWQ Small-Cap Value Fund Class C",
        "price": 38.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VITNX",
        "name": "Vanguard Institutional Total Stock Market Index Fund Institutional Shares",
        "price": 71.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VITPX",
        "name": "Vanguard Institutional Total Stock Market Index Fund Institutional Plus Shares",
        "price": 71.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MFOMX",
        "name": "BNY Mellon Focused Equity Opportunities Fund Class M Shares",
        "price": 16.72,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MMECX",
        "name": "Victory Integrity Discovery Fund Class C",
        "price": 22.56,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "OTCFX",
        "name": "T. Rowe Price Small-Cap Stock Fund",
        "price": 53.83,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSKAX",
        "name": "Fidelity Total Market Index Fund",
        "price": 94.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NWGQX",
        "name": "Nationwide WCM Focused Small Cap Fund Class C",
        "price": 21.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JPFAX",
        "name": "JPMorgan Equity Focus Fund Class A",
        "price": 29.67,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JACRX",
        "name": "James Alpha Global Real Estate Investments Portfolio Class C Shares",
        "price": 19.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PFPRX",
        "name": "Parnassus Fund Institutional Shares",
        "price": 53.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NLIGX",
        "name": "Nuveen Large Cap Growth Fund Class I",
        "price": 29.04,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PARNX",
        "name": "Parnassus Fund",
        "price": 53.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FWWFX",
        "name": "Fidelity Worldwide Fund",
        "price": 29.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NLCGX",
        "name": "Nuveen Large Cap Growth Fund Class C",
        "price": 27.86,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GRISX",
        "name": "Nationwide S&P 500 Index Fund Institutional Service Class",
        "price": 16.85,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCPAX",
        "name": "Fidelity Advisor International Capital Appreciation Fund Class A",
        "price": 23.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JAREX",
        "name": "James Alpha Global Real Estate Investments Portfolio Class A Shares",
        "price": 19.1,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FWIFX",
        "name": "Fidelity Advisor Worldwide Fund I Class",
        "price": 29.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIVFX",
        "name": "Fidelity International Capital Appreciation Fund",
        "price": 23.64,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MFOIX",
        "name": "BNY Mellon Focused Equity Opportunities Fund Investor Shares",
        "price": 16.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TGGAX",
        "name": "Touchstone International Growth Opportunities Fund Class A",
        "price": 23.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NEFOX",
        "name": "Natixis Funds Trust II Oakmark Fund Class A",
        "price": 22.88,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TGTIX",
        "name": "T. Rowe Price Growth and Income Fund I Class",
        "price": 31.7,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PAGLX",
        "name": "T. Rowe Price Global Growth Stock Fund Advisor Class",
        "price": 32.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NEFJX",
        "name": "Natixis Funds Trust I Vaughan Nelson Small Cap Value Fund Class A",
        "price": 15.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VLAIX",
        "name": "Value Line Asset Allocation Fund Institutional Class",
        "price": 40.85,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FWCFX",
        "name": "Fidelity Advisor Worldwide Fund Class C",
        "price": 28.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TGIHX",
        "name": "TIAA-CREF Growth & Income Fund Advisor Class",
        "price": 15.49,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FWAFX",
        "name": "Fidelity Advisor Worldwide Fund Class A",
        "price": 29.41,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RCLIX",
        "name": "T. Rowe Price U.S. Large-Cap Core Fund I Class",
        "price": 28.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VLAAX",
        "name": "Value Line Asset Allocation Fund Investor Class",
        "price": 40.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRULX",
        "name": "T. Rowe Price U.S. Large-Cap Core Fund",
        "price": 27.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WMLIX",
        "name": "Wilmington Large-Cap Strategy Fund Class Institutional",
        "price": 25.72,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SCURX",
        "name": "Hartford Schroders US Small Cap Opportunities Fund Class SDR",
        "price": 27.64,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PACOX",
        "name": "T. Rowe Price U.S. Equity Research Fund Advisor Class",
        "price": 32.48,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "POSKX",
        "name": "PRIMECAP Odyssey Stock Fund",
        "price": 34.64,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PAULX",
        "name": "T. Rowe Price U.S. Large-Cap Core Fund Advisor Class",
        "price": 28.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SVFYX",
        "name": "Smead Value Fund Class Y",
        "price": 50.18,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SCUIX",
        "name": "Hartford Schroders US Small Cap Opportunities Fund Class I",
        "price": 27.59,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HOOTX",
        "name": "Hartford Schroders US Small Cap Opportunities Fund Class R5",
        "price": 27.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSMDX",
        "name": "Fidelity Mid Cap Index Fund",
        "price": 24.56,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HOOSX",
        "name": "Hartford Schroders US Small Cap Opportunities Fund Class R4",
        "price": 27.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCTGX",
        "name": "Fidelity Advisor Small Cap Growth Fund Class M",
        "price": 26.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FWTFX",
        "name": "Fidelity Advisor Worldwide Fund Class M",
        "price": 29.19,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SVFDX",
        "name": "Smead Value Fund Class R1",
        "price": 49.37,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BUFOX",
        "name": "Buffalo Emerging Opportunities Fund",
        "price": 17.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LSCRX",
        "name": "Loomis Sayles Small Capital Value Fund Retail Class",
        "price": 27.23,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SSSJX",
        "name": "State Street Dynamic Small Cap Fund Class I",
        "price": 54.3,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SVFKX",
        "name": "Smead Value Fund Class R2",
        "price": 50.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JARIX",
        "name": "James Alpha Global Real Estate Investments Portfolio Class I Shares",
        "price": 19.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JMUEX",
        "name": "JPMorgan U.S. Equity Fund Class L",
        "price": 17.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIDZX",
        "name": "Fidelity Advisor International Capital Appreciation Fund Class Z",
        "price": 24.88,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SVFAX",
        "name": "Smead Value Fund Class A",
        "price": 49.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SCUVX",
        "name": "Hartford Schroders US Small Cap Opportunities Fund Class A",
        "price": 26.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCPCX",
        "name": "Fidelity Advisor International Capital Appreciation Fund Class C",
        "price": 20.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NEJYX",
        "name": "Natixis Funds Trust I Vaughan Nelson Small Cap Value Fund Class Y",
        "price": 16.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MASTX",
        "name": "BMO Large-Cap Growth Fund Class Y",
        "price": 19.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LSVAX",
        "name": "Loomis Sayles Small Capital Value Fund Admin Class",
        "price": 25.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LSCNX",
        "name": "Loomis Sayles Small Cap Value Fund Class N",
        "price": 27.77,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LSSCX",
        "name": "Loomis Sayles Small Capital Value Fund Institutional Class",
        "price": 27.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VSEQX",
        "name": "Vanguard Strategic Equity Fund Investor Shares",
        "price": 34.23,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JUEZX",
        "name": "JPMorgan U.S. Equity Fund Class R2",
        "price": 16.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MMDEX",
        "name": "Praxis Growth Index Fund Class I",
        "price": 29.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SMVLX",
        "name": "Smead Value Fund Investor Class",
        "price": 50.14,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PAVLX",
        "name": "T. Rowe Price Value Fund Advisor Class",
        "price": 38.17,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRILX",
        "name": "Parnassus Core Equity Fund - Institutional Shares",
        "price": 49.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRGIX",
        "name": "T. Rowe Price Growth and Income Fund",
        "price": 31.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIDGX",
        "name": "Fidelity Advisor Small Cap Growth Fund Class Z",
        "price": 29.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DSCVX",
        "name": "BNY Mellon Opportunistic Small Cap Fund Investor Shares",
        "price": 28.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCIGX",
        "name": "Fidelity Advisor Small Cap Growth Fund I Class",
        "price": 29.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRVLX",
        "name": "T. Rowe Price Value Fund",
        "price": 38.78,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTUCX",
        "name": "Fidelity Advisor Telecommunications Fund Class C",
        "price": 66.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSTCX",
        "name": "Fidelity Select Telecommunications Portfolio",
        "price": 66.83,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TIIRX",
        "name": "TIAA-CREF Growth & Income Fund Retail Class",
        "price": 21.52,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTUIX",
        "name": "Fidelity Advisor Telecommunications Fund I Class",
        "price": 66.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AIAFX",
        "name": "Aberdeen Global Infrastructure Fund Class A",
        "price": 23.13,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HMDCX",
        "name": "The Hartford MidCap Fund Class C",
        "price": 21.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTUAX",
        "name": "Fidelity Advisor Telecommunications Fund Class A",
        "price": 66.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRGIX",
        "name": "TIAA-CREF Growth & Income Fund Retirement Class",
        "price": 15.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ACRTX",
        "name": "AMG Managers Silvercrest Small Cap Fund Class I",
        "price": 16.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CLCRX",
        "name": "Columbia Select Large Cap Equity Fund Institutional 2 Class",
        "price": 16.64,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BUFIX",
        "name": "Buffalo International Fund",
        "price": 17.14,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCAGX",
        "name": "Fidelity Advisor Small Cap Growth Fund Class A",
        "price": 27.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRBLX",
        "name": "Parnassus Core Equity Fund - Investor Shares",
        "price": 49.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CAMYX",
        "name": "Cambiar International Equity Institutional",
        "price": 26.09,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CAMIX",
        "name": "Cambiar International Equity Fund Investor Class",
        "price": 26.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DTSVX",
        "name": "Wilshire Small Company Value Portfolio Investment Class Shares",
        "price": 21.14,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WEMMX",
        "name": "TETON Westwood Mighty Mites Fund Class AAA",
        "price": 26.48,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SMGIX",
        "name": "Columbia Contrarian Core Fund Institutional Class",
        "price": 28.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HFMVX",
        "name": "The Hartford MidCap Fund Class R6",
        "price": 39.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "COGRX",
        "name": "Columbia Select Global Growth Fund Class R",
        "price": 17.81,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCCGX",
        "name": "Fidelity Advisor Small Cap Growth Fund Class C",
        "price": 24.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BLGRX",
        "name": "BMO Large-Cap Growth Fund Class R6",
        "price": 19.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CDOFX",
        "name": "Crawford Small Cap Dividend Fund",
        "price": 41.49,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LCCCX",
        "name": "Columbia Contrarian Core Fund Class C",
        "price": 25.01,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ASCTX",
        "name": "AMG Managers Silvercrest Small Cap Fund Class N",
        "price": 16.02,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LGRNX",
        "name": "Loomis Sayles Growth Fund Class N",
        "price": 19.54,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DSCYX",
        "name": "BNY Mellon Opportunistic Small Cap Fund Class Y",
        "price": 28.95,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WMMAX",
        "name": "TETON Westwood Mighty Mites Fund Class A",
        "price": 25.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MLCIX",
        "name": "BMO Large-Cap Growth Fund Class I",
        "price": 19.85,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VQSRX",
        "name": "Virtus KAR Small-Cap Value Fund Class R6",
        "price": 20.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CADIX",
        "name": "Columbia Select Global Growth Fund Institutional 2 Class",
        "price": 18.88,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRPIX",
        "name": "T. Rowe Price Value Fund I Class",
        "price": 38.78,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BARIX",
        "name": "Baron Asset Fund Institutional Class",
        "price": 96.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DOPIX",
        "name": "BNY Mellon Opportunistic Small Cap Fund Class I",
        "price": 28.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VSTCX",
        "name": "Vanguard Strategic Small-Cap Equity Fund Investor Shares",
        "price": 33.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JSMTX",
        "name": "Jackson Square SMID-Cap Growth Fund Institutional Class",
        "price": 25.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MIMSX",
        "name": "BNY Mellon Mid Cap Multi-Strategy Fund Class Investor",
        "price": 18.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DCGTX",
        "name": "Jackson Square SMID-Cap Growth Fund IS Class",
        "price": 25.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CDOCX",
        "name": "Crawford Small Cap Dividend Fund Class C",
        "price": 41.19,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WEIMX",
        "name": "TETON Westwood Mighty Mites Class Institutional",
        "price": 27.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CCCRX",
        "name": "Columbia Contrarian Core Fund Class R",
        "price": 28.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JENHX",
        "name": "Johnson Enhanced Return Fund",
        "price": 17.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CSVIX",
        "name": "Calvert Small-Cap Fund Class I",
        "price": 29.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CSCCX",
        "name": "Calvert Small-Cap Fund Class C",
        "price": 22.77,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BARAX",
        "name": "Baron Asset Fund Retail Class",
        "price": 92.9,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TAREX",
        "name": "Third Avenue Real Estate Value Fund Institutional Class",
        "price": 26.17,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VPCCX",
        "name": "Vanguard PRIMECAP Core Fund Investor Shares",
        "price": 28.51,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BALGX",
        "name": "BMO Large-Cap Growth Fund Class A",
        "price": 19.64,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "COFYX",
        "name": "Columbia Contrarian Core Fund Institutional 3 Class",
        "price": 28.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CORRX",
        "name": "Columbia Contrarian Core Fund Advisor Class",
        "price": 28.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JSMVX",
        "name": "Jackson Square SMID-Cap Growth Fund Investor Class",
        "price": 25.52,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BARUX",
        "name": "Baron Asset Fund Class R6",
        "price": 96.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HFMSX",
        "name": "The Hartford MidCap Fund Class R4",
        "price": 37.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CCVAX",
        "name": "Calvert Small-Cap Fund Class A",
        "price": 26.78,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "EWENX",
        "name": "Wells Fargo Intrinsic World Equity Fund - Class Inst",
        "price": 22.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGIEX",
        "name": "Columbia Contrarian Core Fund Class V",
        "price": 27.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WMMCX",
        "name": "TETON Westwood Mighty Mites Fund Class C",
        "price": 21.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSSNX",
        "name": "Fidelity Small Cap Index Fund",
        "price": 21.41,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WSMVX",
        "name": "Wilshire Small Company Value Fund Class Institutional",
        "price": 21.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "IMIDX",
        "name": "Congress Mid Cap Growth Fund Institutional Class",
        "price": 23.42,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JANEX",
        "name": "Janus Henderson Enterprise Fund Class D",
        "price": 147.97,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JDMAX",
        "name": "Janus Henderson Enterprise Fund Class A",
        "price": 143.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JMGRX",
        "name": "Janus Henderson Enterprise Fund Class I",
        "price": 148.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HFMIX",
        "name": "The Hartford MidCap Fund Class I",
        "price": 33.18,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JDMNX",
        "name": "Janus Henderson Enterprise Fund Class N",
        "price": 149.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SSPSX",
        "name": "State Street Institutional Premier Growth Equity Fund Service Class",
        "price": 12.54,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JGRTX",
        "name": "Janus Henderson Enterprise Fund Class S",
        "price": 142.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JAENX",
        "name": "Janus Henderson Enterprise Fund Class T",
        "price": 146.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JDMRX",
        "name": "Janus Henderson Enterprise Fund Class R",
        "price": 138.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JGRCX",
        "name": "Janus Henderson Enterprise Fund Class C",
        "price": 131.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CMIDX",
        "name": "Congress Mid Cap Growth Fund Retail Class",
        "price": 23.09,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NEFSX",
        "name": "Natixis Funds Trust I U.S. Equity Opportunities Fund Class A",
        "price": 38.08,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "EAFGX",
        "name": "Eaton Vance Focused Growth Opportunities Fund Class A",
        "price": 24.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSPCX",
        "name": "Fidelity Select Insurance Portfolio",
        "price": 67.43,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JMCEX",
        "name": "JPMorgan Mid Cap Equity Fund Class R2",
        "price": 51.66,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NSDVX",
        "name": "North Star Dividend Fund Class I",
        "price": 19.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRGSX",
        "name": "T. Rowe Price Global Stock Fund",
        "price": 48.81,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRDMX",
        "name": "T. Rowe Price Diversified Mid Cap Growth Fund",
        "price": 38.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LGRCX",
        "name": "Loomis Sayles Growth Fund Class C",
        "price": 16.49,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TVRVX",
        "name": "Third Avenue Real Estate Value Fund Investor Class",
        "price": 26.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JCMAX",
        "name": "JPMorgan Mid Cap Equity Fund Class A",
        "price": 52.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VSNGX",
        "name": "JPMorgan Mid Cap Equity Fund Class I",
        "price": 53.16,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TWCAX",
        "name": "American Century Select Fund A Class",
        "price": 84.62,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LSGRX",
        "name": "Loomis Sayles Growth Fund Class Y",
        "price": 19.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ASDEX",
        "name": "American Century Select Fund R6 Class",
        "price": 88.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TWSIX",
        "name": "American Century Select Fund I Class",
        "price": 88.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NESYX",
        "name": "Natixis Funds Trust I U.S. Equity Opportunities Fund Class Y",
        "price": 45.42,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HILFX",
        "name": "Hennessy Large Cap Financial Fund Institutional Class",
        "price": 26.18,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PAGSX",
        "name": "T. Rowe Price Global Stock Fund Advisor Class",
        "price": 48.25,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CFIMX",
        "name": "Clipper Fund",
        "price": 128.54,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CCSGX",
        "name": "Conestoga SMid Cap Fund Institutional Class",
        "price": 19.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BUFTX",
        "name": "Buffalo Discovery Fund",
        "price": 25.88,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TWCIX",
        "name": "American Century Select Fund Investor Class",
        "price": 87.02,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GWETX",
        "name": "AMG GW&K Small Cap Core Fund Class N",
        "price": 26.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RAAIX",
        "name": "Altegris\/AACA Opportunistic Real Estate Fund I",
        "price": 20.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ACSLX",
        "name": "American Century Select Fund C Class",
        "price": 73.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ASERX",
        "name": "American Century Select Fund R Class",
        "price": 83.54,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PNAIX",
        "name": "T. Rowe Price New America Growth Fund I Class",
        "price": 59.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AULDX",
        "name": "American Century Ultra Fund R6 Class",
        "price": 60.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRWAX",
        "name": "T. Rowe Price New America Growth Fund",
        "price": 59.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SSPGX",
        "name": "State Street Institutional Premier Growth Equity Fund Investment Class",
        "price": 12.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LGRRX",
        "name": "Loomis Sayles Growth Fund Class A",
        "price": 18.23,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RAANX",
        "name": "Altegris\/AACA Opportunistic Real Estate Fund N",
        "price": 20.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RAAAX",
        "name": "Altegris\/AACA Opportunistic Real Estate Fund A",
        "price": 20.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "IWIRX",
        "name": "Guinness Atkinson Global Innovators Fund Investor Class",
        "price": 48.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PGIUX",
        "name": "Virtus Duff & Phelps Global Infrastructure Fund Class I",
        "price": 16.95,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PGUAX",
        "name": "Virtus Duff & Phelps Global Infrastructure Fund Class A",
        "price": 16.94,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PAWAX",
        "name": "T. Rowe Price New America Growth Fund Advisor Class",
        "price": 58.21,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BREFX",
        "name": "Baron Real Estate Fund Retail Shares",
        "price": 28.3,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PEXMX",
        "name": "T. Rowe Price Extended Equity Market Index Fund",
        "price": 30.77,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PGUCX",
        "name": "Virtus Duff & Phelps Global Infrastructure Fund Class C",
        "price": 16.85,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GWEIX",
        "name": "AMG GW&K Small Cap Core Fund Class I",
        "price": 27.43,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AWEIX",
        "name": "CIBC Atlas Disciplined Equity Fund Institutional Class",
        "price": 23.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JPDEX",
        "name": "JPMorgan Tax Aware Equity Fund Class I",
        "price": 39.84,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JVTNX",
        "name": "Janus Henderson Venture Fund Class N",
        "price": 85.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JVTSX",
        "name": "Janus Henderson Venture Fund Class S",
        "price": 80.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JPEAX",
        "name": "JPMorgan Tax Aware Equity Fund Class A",
        "price": 39.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CVMAX",
        "name": "Calvert Emerging Markets Equity Fund Class A",
        "price": 17.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GINNX",
        "name": "Guinness Atkinson Global Innovators Fund Institutional Class",
        "price": 48.46,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JAVTX",
        "name": "Janus Henderson Venture Fund Class T",
        "price": 82.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TWCCX",
        "name": "American Century Ultra Fund C Class",
        "price": 44.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ICSCX",
        "name": "ICM Small Company Portfolio",
        "price": 28.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JVTIX",
        "name": "Janus Henderson Venture Fund Class I",
        "price": 84.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "POLRX",
        "name": "Polen Growth Fund Investor Class",
        "price": 37.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSRPX",
        "name": "Fidelity Select Retailing Portfolio",
        "price": 17.86,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JANVX",
        "name": "Janus Henderson Venture Fund Class D",
        "price": 84.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MPGIX",
        "name": "Meritage Growth Equity Fund Institutional Shares",
        "price": 18.59,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HLFNX",
        "name": "Hennessy Large Cap Financial Fund Investor Class",
        "price": 26.1,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JVTCX",
        "name": "Janus Henderson Venture Fund Class C",
        "price": 74.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NNLEX",
        "name": "Nicholas Limited Edition Fund Class N",
        "price": 27.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SCGVX",
        "name": "Sands Capital Global Growth Fund Investor Shares",
        "price": 28.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MPGEX",
        "name": "Meritage Growth Equity Fund Investor Shares",
        "price": 18.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TLIIX",
        "name": "TIAA-CREF Quant Large-Cap Growth Fund Institutional Class",
        "price": 16.04,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JIGZX",
        "name": "JPMorgan Intrepid Growth Fund Class R2",
        "price": 56.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QASCX",
        "name": "Federated MDT Small Cap Core Fund Class A",
        "price": 19.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JPGSX",
        "name": "JPMorgan Intrepid Growth Fund Class I",
        "price": 59.48,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JIGAX",
        "name": "JPMorgan Intrepid Growth Fund Class A",
        "price": 58.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QISCX",
        "name": "Federated MDT Small Cap Core Fund Institutional Class",
        "price": 20.21,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SCMGX",
        "name": "Sands Capital Global Growth Fund Institutional Shares",
        "price": 28.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VHCOX",
        "name": "Vanguard Capital Opportunity Fund Investor Shares",
        "price": 71.48,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BDSKX",
        "name": "BlackRock Advantage Small Cap Core Fund Class K",
        "price": 15.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JCICX",
        "name": "JPMorgan Intrepid Growth Fund Class C",
        "price": 57.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BDSIX",
        "name": "BlackRock Advantage Small Cap Core Fund Institutional Shares",
        "price": 15.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "KLCIX",
        "name": "Federated Kaufmann Large Cap Fund Institutional Shares",
        "price": 31.64,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JGISX",
        "name": "JPMorgan Intrepid Growth Fund Class R6",
        "price": 58.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JGIRX",
        "name": "JPMorgan Intrepid Growth Fund Class R5",
        "price": 58.52,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VGSAX",
        "name": "Virtus Duff & Phelps Global Real Estate Securities Fund Class A",
        "price": 35.72,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WGROX",
        "name": "Wasatch Core Growth Fund",
        "price": 76.25,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AKREX",
        "name": "Akre Focus Fund Retail Class",
        "price": 48.72,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYOCX",
        "name": "Rydex NASDAQ-100 Fund Investor Class",
        "price": 48.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYATX",
        "name": "Rydex NASDAQ-100 Fund Class A",
        "price": 44.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VHCAX",
        "name": "Vanguard Capital Opportunity Fund Admiral Shares",
        "price": 165.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FGSKX",
        "name": "Federated MDT Mid Cap Growth Fund Class R6 Shares",
        "price": 39.29,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYHOX",
        "name": "Rydex NASDAQ-100 Fund Class H",
        "price": 44.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TEEAX",
        "name": "RBC Small Cap Core Fund Class A",
        "price": 30.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NWKCX",
        "name": "Nationwide Geneva Small Cap Growth Fund Class R6",
        "price": 70.84,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VPMAX",
        "name": "Vanguard PRIMECAP Fund Admiral Shares",
        "price": 149.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VPMCX",
        "name": "Vanguard PRIMECAP Fund Investor Shares",
        "price": 143.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NWHZX",
        "name": "Nationwide Geneva Small Cap Growth Fund Class A",
        "price": 67.84,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SEUPX",
        "name": "Guggenheim StylePlus - Mid Growth Fund Class P",
        "price": 43.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TMDPX",
        "name": "AMG TimesSquare Mid Cap Growth Fund Class N",
        "price": 19.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VRGEX",
        "name": "Virtus Duff & Phelps Global Real Estate Securities Fund Class R6",
        "price": 34.83,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AKRSX",
        "name": "Akre Focus Fund Supra Institutional Class",
        "price": 50.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AVEGX",
        "name": "Ave Maria Growth Fund",
        "price": 40.48,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FNCMX",
        "name": "Fidelity NASDAQ Composite Index Fund",
        "price": 122.46,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VGISX",
        "name": "Virtus Duff & Phelps Global Real Estate Securities Fund Class I",
        "price": 34.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LCGFX",
        "name": "William Blair Large Cap Growth Fund Class I",
        "price": 17.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AKRIX",
        "name": "Akre Focus Fund Institutional Class",
        "price": 49.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QCSCX",
        "name": "Federated MDT Small Cap Core Fund Class C",
        "price": 17.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VGSCX",
        "name": "Virtus Duff & Phelps Global Real Estate Securities Fund Class C",
        "price": 33.97,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TMDIX",
        "name": "AMG TimesSquare Mid Cap Growth Fund Class Z",
        "price": 19.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "USMYX",
        "name": "Natixis ASG Tactical U.S. Market Fund Class Y",
        "price": 17.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "OMSIX",
        "name": "Invesco Oppenheimer Main Street Fund Class R6",
        "price": 49.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TIQIX",
        "name": "Touchstone Global ESG Equity Fund - Class Y",
        "price": 22.62,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NWWOX",
        "name": "Virtus Vontobel Global Opportunities Fund Class A",
        "price": 17.85,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PARDX",
        "name": "T. Rowe Price Retirement 2040 Fund Advisor Class",
        "price": 27.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NOLCX",
        "name": "Northern Large Cap Core Fund",
        "price": 21.72,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PYVSX",
        "name": "Payden Equity Income Fund SI Class",
        "price": 18.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GASFX",
        "name": "Hennessy Gas Utility Fund Investor Class",
        "price": 30.01,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PYVLX",
        "name": "Payden Equity Income Fund",
        "price": 18.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RRTFX",
        "name": "T. Rowe Price Retirement 2050 Fund Class R",
        "price": 15.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SIBAX",
        "name": "Sit Balanced Fund",
        "price": 26.64,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DGLCX",
        "name": "BNY Mellon Global Stock Fund - Class C",
        "price": 22.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FABLX",
        "name": "Fidelity Advisor Balanced Fund Class A",
        "price": 23.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMIJX",
        "name": "FMI International Fund",
        "price": 32.46,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DROYX",
        "name": "Diamond Hill Research Opportunities Fund Class Y",
        "price": 24.08,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGACX",
        "name": "Virtus SGA Global Growth C Class",
        "price": 22.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AVEDX",
        "name": "Ave Maria Rising Dividend Fund",
        "price": 18.88,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRRJX",
        "name": "T. Rowe Price Retirement 2035 Fund",
        "price": 19.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TFIFX",
        "name": "T. Rowe Price Financial Services Fund I Class",
        "price": 28.9,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AUEIX",
        "name": "AQR Large Cap Defensive Style Fund Class I",
        "price": 24.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RRTDX",
        "name": "T. Rowe Price Retirement 2040 Fund Class R",
        "price": 27.37,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QUERX",
        "name": "AQR Large Cap Defensive Style Fund Class R6",
        "price": 24.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DGLRX",
        "name": "BNY Mellon Global Stock Fund - Class I",
        "price": 23.67,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AUENX",
        "name": "AQR Large Cap Defensive Style Fund Class N",
        "price": 24.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGAPX",
        "name": "Virtus SGA Global Growth I Class",
        "price": 23.84,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VWILX",
        "name": "Vanguard International Growth Fund Admiral Shares",
        "price": 107.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRACX",
        "name": "PGIM QMA Small-Cap Value Fund- Class C",
        "price": 16.09,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SDVGX",
        "name": "Sit Dividend Growth Fund Class I",
        "price": 14.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PARKX",
        "name": "T. Rowe Price Retirement 2035 Fund Advisor Class",
        "price": 19.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MGGIX",
        "name": "Morgan Stanley Institutional Fund, Inc. Global Opportunity Portfolio Class I",
        "price": 31.3,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SDVSX",
        "name": "Sit Dividend Growth Fund Class S",
        "price": 14.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SMDVX",
        "name": "Hartford Schroders US MidCap Opportunities Fund Class A",
        "price": 16.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CSSZX",
        "name": "Columbia Select Small Cap Value Fund Institutional Class",
        "price": 20.44,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VASVX",
        "name": "Vanguard Selected Value Fund Investor Shares",
        "price": 27.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DGIFX",
        "name": "The Disciplined Growth Investors Fund",
        "price": 21.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BPSIX",
        "name": "Boston Partners Small Cap Value Fund II Institutional Class",
        "price": 25.54,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TGIPX",
        "name": "T. Rowe Price Personal Strategy Growth Fund I Class",
        "price": 36.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FPVSX",
        "name": "Frontier Phocas Small Cap Value Fund Service Class",
        "price": 32.77,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SSCVX",
        "name": "Columbia Select Small Cap Value Fund Class A",
        "price": 17.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DGLAX",
        "name": "BNY Mellon Global Stock Fund - Class A",
        "price": 23.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRSGX",
        "name": "T. Rowe Price Personal Strategy Growth Fund",
        "price": 36.9,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FEYIX",
        "name": "Fidelity Advisor Asset Manager 85% Fund I Class",
        "price": 20.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RPTIX",
        "name": "T. Rowe Price Mid-Cap Growth Fund I Class",
        "price": 98.94,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DHROX",
        "name": "Diamond Hill Research Opportunities Fund Class A",
        "price": 23.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CVTRX",
        "name": "Calamos Growth & Income Fund Class A",
        "price": 35.78,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NLGIX",
        "name": "Columbia Global Strategic Equity Fund Class A",
        "price": 15.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TEQAX",
        "name": "Touchstone Global ESG Equity Fund - Class A",
        "price": 21.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MVALX",
        "name": "Meridian Contrarian Fund Legacy Class",
        "price": 36.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRRKX",
        "name": "T. Rowe Price Retirement 2045 Fund",
        "price": 19.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HWLCX",
        "name": "Hotchkis & Wiley Large Cap Value Fund Class C",
        "price": 34.43,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CGIIX",
        "name": "Calamos Growth & Income Fund Institutional Class",
        "price": 34.25,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PAMCX",
        "name": "T. Rowe Price Mid-Cap Growth Fund Advisor Class",
        "price": 95.52,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JDNAX",
        "name": "Janus Henderson Growth And Income Fund Class A",
        "price": 62.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ABASX",
        "name": "AB Discovery Value Fund Class A",
        "price": 19.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NLCDX",
        "name": "Nuveen Large Cap Core Fund Class C",
        "price": 32.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCAZX",
        "name": "Franklin Corefolio Allocation Fund Advisor Class",
        "price": 20.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GILIX",
        "name": "Guggenheim StylePlus - Large Core Fund Institutional",
        "price": 22.64,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HFCSX",
        "name": "Hennessy Focus Fund Investor Class",
        "price": 85.3,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MIEIX",
        "name": "MFS Institutional International Equity Fund",
        "price": 27.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMGIX",
        "name": "Frontier MFG Core Infrastructure Fund Institutional Class",
        "price": 19.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HLMGX",
        "name": "Harding Loevner Global Equity Portfolio Advisor Class",
        "price": 38.94,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NMIAX",
        "name": "Columbia Large Cap Enhanced Core Fund Class A",
        "price": 26.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NMIMX",
        "name": "Columbia Large Cap Enhanced Core Fund Institutional Class",
        "price": 26.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RPMGX",
        "name": "T. Rowe Price Mid-Cap Growth Fund",
        "price": 98.94,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MFCIX",
        "name": "Meridian Contrarian Fund Investor Class",
        "price": 36.18,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCVIX",
        "name": "Fidelity Advisor Small Cap Value Fund Class I",
        "price": 15.46,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PARLX",
        "name": "T. Rowe Price Retirement 2045 Fund Advisor Class",
        "price": 18.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SFEPX",
        "name": "Guggenheim StylePlus - Large Core Fund Class P",
        "price": 22.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ABSIX",
        "name": "AB Discovery Value Fund Class I",
        "price": 19.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RRMGX",
        "name": "T. Rowe Price Mid-Cap Growth Fund R Class",
        "price": 92.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NNTWX",
        "name": "Nicholas II Fund Class N",
        "price": 28.9,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ABSZX",
        "name": "AB Discovery Value Fund Class Z",
        "price": 19.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AOVIX",
        "name": "American Century Investments One Choice Portfolio: Very Aggressive Investor Class",
        "price": 18.39,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MFCCX",
        "name": "Meridian Contrarian Fund Class C",
        "price": 34.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HWAIX",
        "name": "Hotchkis & Wiley Value Opportunities Fund Class Institutional",
        "price": 28.54,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HFCIX",
        "name": "Hennessy Focus Fund Institutional Class",
        "price": 88.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TAAIX",
        "name": "Thrivent Aggressive Allocation Fund Class S",
        "price": 16.02,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SFDYX",
        "name": "SEI Institutional Managed Trust Mid-Cap Fund Class Y",
        "price": 26.46,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SEMCX",
        "name": "SEI Institutional Managed Trust Mid-Cap Portfolio Fund Class F",
        "price": 26.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FBIOX",
        "name": "Fidelity Select Biotechnology Portfolio",
        "price": 23.01,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SIPIX",
        "name": "SEI Institutional Managed Trust Mid-Cap Portfolio Fund Class I",
        "price": 26.41,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRISX",
        "name": "T. Rowe Price Financial Services Fund",
        "price": 28.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NLACX",
        "name": "Nuveen Large Cap Core Fund Class A",
        "price": 33.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ABSKX",
        "name": "AB Discovery Value Fund Class K",
        "price": 19.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HWSAX",
        "name": "Hotchkis & Wiley Small Cap Value Fund Class A",
        "price": 51.21,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NLCIX",
        "name": "Nuveen Large Cap Core Fund Class I",
        "price": 33.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PASVX",
        "name": "T. Rowe Price Small-Cap Value Fund Advisor Class",
        "price": 48.02,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RRTRX",
        "name": "T. Rowe Price Retirement 2045 Fund Class R",
        "price": 18.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SMDRX",
        "name": "Hartford Schroders US MidCap Opportunities Fund Class SDR",
        "price": 16.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PAROX",
        "name": "T. Rowe Price Retirement 2055 Fund Advisor Class",
        "price": 16.23,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MGPIX",
        "name": "ProFunds Mid Cap Growth Fund Investor Class",
        "price": 101.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FPSVX",
        "name": "Frontier Phocas Small Cap Value Fund Institutional Class",
        "price": 32.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HFDYX",
        "name": "Hartford Schroders US MidCap Opportunities Fund Class Y",
        "price": 16.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SMDIX",
        "name": "Hartford Schroders US MidCap Opportunities Fund Class I",
        "price": 16.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CVTCX",
        "name": "Calamos Growth & Income Fund Class C",
        "price": 36.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NCTWX",
        "name": "Nicholas II Fund Class I",
        "price": 29.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TAAAX",
        "name": "Thrivent Aggressive Allocation Fund Class A",
        "price": 15.86,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HWSCX",
        "name": "Hotchkis & Wiley Small Cap Value Fund Class C",
        "price": 41.16,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HFDTX",
        "name": "Hartford Schroders US MidCap Opportunities Fund Class R5",
        "price": 16.9,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MINDX",
        "name": "Matthews India Fund Investor Class",
        "price": 23.88,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SDLAX",
        "name": "SEI Institutional Investments Trust Dynamic Asset Allocation Fund Class A",
        "price": 20.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MFCAX",
        "name": "Meridian Contrarian Fund A Class",
        "price": 35.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTCLX",
        "name": "Franklin Corefolio Allocation Fund Class C",
        "price": 20.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PMEGX",
        "name": "T. Rowe Price Institutional Mid-Cap Equity Growth Fund",
        "price": 63.49,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PJOQX",
        "name": "PGIM Jennison Focused Value Fund- Class R6",
        "price": 16.78,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FAMWX",
        "name": "FAM Value Fund Institutional Class",
        "price": 84.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FAMVX",
        "name": "FAM Value Fund Investor Class",
        "price": 84.59,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ABYSX",
        "name": "AB Discovery Value Fund Advisor Class",
        "price": 20.23,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HWSIX",
        "name": "Hotchkis & Wiley Small Cap Value Fund Class I",
        "price": 51.42,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CAAPX",
        "name": "Ariel Appreciation Fund Investor Class",
        "price": 44.7,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BPSCX",
        "name": "Boston Partners Small Cap Value Fund II Investor Class",
        "price": 24.37,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HLMVX",
        "name": "Harding Loevner Global Equity Portfolio Institutional Class",
        "price": 38.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GTLIX",
        "name": "Glenmede Quantitative U.S. Large Cap Core Equity Portfolio Institutional Shares",
        "price": 28.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HGGAX",
        "name": "Harbor Global Leaders Fund Institutional Class",
        "price": 32.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MSFLX",
        "name": "Morgan Stanley Institutional Fund, Inc. Global Franchise Portfolio Class L",
        "price": 29.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PARFX",
        "name": "T. Rowe Price Retirement 2050 Fund Advisor Class",
        "price": 15.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ABSRX",
        "name": "AB Discovery Value Fund Class R",
        "price": 19.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HFDRX",
        "name": "Hartford Schroders US MidCap Opportunities Fund Class R3",
        "price": 16.7,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRVIX",
        "name": "T. Rowe Price Small-Cap Value Fund I Class",
        "price": 48.14,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRSVX",
        "name": "T. Rowe Price Small-Cap Value Fund",
        "price": 48.16,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PDGIX",
        "name": "T. Rowe Price Dividend Growth Fund I Class",
        "price": 55.42,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JPIEX",
        "name": "JPMorgan U.S. Research Enhanced Equity Fund Class L",
        "price": 29.01,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "POGSX",
        "name": "Pin Oak Equity Fund",
        "price": 75.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ODMCX",
        "name": "JPMorgan Intrepid Mid Cap Fund Class C",
        "price": 14.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ACMYX",
        "name": "American Beacon Mid-Cap Value Fund Class Y",
        "price": 16.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "APGAX",
        "name": "AB Large Cap Growth Fund Class A",
        "price": 61.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ALCKX",
        "name": "AB Large Cap Growth Fund Class K",
        "price": 62.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SIVIX",
        "name": "State Street Institutional Small-Cap Equity Fund Investment Class",
        "price": 17.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HFDCX",
        "name": "Hartford Schroders US MidCap Opportunities Fund Class C",
        "price": 16.46,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SECEX",
        "name": "Guggenheim StylePlus - Large Core Fund Class A",
        "price": 22.85,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "APGYX",
        "name": "AB Large Cap Growth Fund Advisor Class",
        "price": 67.52,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SSQSX",
        "name": "State Street Institutional Small-Cap Equity Fund Service Class",
        "price": 17.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HWAAX",
        "name": "Hotchkis & Wiley Value Opportunities Fund Class A",
        "price": 28.62,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "APGZX",
        "name": "AB Large Cap Growth Fund Class Z",
        "price": 67.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AUUCX",
        "name": "AB Select US Equity Portfolio Class C",
        "price": 16.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "APGCX",
        "name": "AB Large Cap Growth Fund Class C",
        "price": 43.54,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PLBBX",
        "name": "Plumb Balanced Fund",
        "price": 34.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MIDNX",
        "name": "Matthews India Fund Institutional Class",
        "price": 24.16,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRDGX",
        "name": "T. Rowe Price Dividend Growth Fund",
        "price": 55.43,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VDIGX",
        "name": "Vanguard Dividend Growth Fund Investor Shares",
        "price": 31.67,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ABMAX",
        "name": "American Beacon Mid-Cap Value Fund Class A",
        "price": 15.9,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SICWX",
        "name": "Touchstone Large Cap Focused Fund Class Y",
        "price": 44.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TADGX",
        "name": "T. Rowe Price Dividend Growth Fund Advisor Class",
        "price": 55.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VQNPX",
        "name": "Vanguard Growth and Income Fund Investor Shares",
        "price": 54.18,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HASCX",
        "name": "Harbor Small Cap Value Fund Institutional Class",
        "price": 35.44,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ENTIX",
        "name": "ERShares Global Fund Institutional Class",
        "price": 17.17,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HNGIX",
        "name": "Harbor Global Leaders Fund Retirement Class",
        "price": 32.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GRMIX",
        "name": "Nationwide S&P 500 Index Fund Class R6",
        "price": 16.9,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BBHLX",
        "name": "BBH Partner Fund - International Equity Class Institutional",
        "price": 17.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SEEKX",
        "name": "Crossmark Steward Large Cap Enhanced Index Fund Class A",
        "price": 48.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SKSEX",
        "name": "AMG Managers Skyline Special Equities Fund Class N",
        "price": 36.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WBVDX",
        "name": "William Blair Small Cap Value Fund Class N",
        "price": 17.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NBGNX",
        "name": "Neuberger Berman Genesis Fund Investor Class",
        "price": 60.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NBGEX",
        "name": "Neuberger Berman Genesis Fund Trust Class",
        "price": 60.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NOSIX",
        "name": "Northern Stock Index Fund",
        "price": 38.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NBGIX",
        "name": "Neuberger Berman Genesis Fund Institutional Class",
        "price": 60.62,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PJIAX",
        "name": "PGIM Jennison Focused Value Fund- Class A",
        "price": 15.95,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GTLOX",
        "name": "Glenmede Quantitative U.S. Large Cap Core Equity Portfolio",
        "price": 27.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PDSIX",
        "name": "PGIM QMA Stock Index Fund- Class I",
        "price": 46.97,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PSIFX",
        "name": "PGIM QMA Stock Index Fund- Class Z",
        "price": 46.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JGMNX",
        "name": "Janus Henderson Triton Fund Class N",
        "price": 32.23,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NINDX",
        "name": "Columbia Large Cap Index Fund Institutional Class",
        "price": 54.15,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VGIAX",
        "name": "Vanguard Growth and Income Fund Admiral Shares",
        "price": 88.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NWKEX",
        "name": "Nationwide WCM Focused Small Cap Fund Class R6",
        "price": 27.08,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SVSPX",
        "name": "State Street S&P 500 Index Fund Class N",
        "price": 40.85,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GQETX",
        "name": "GMO Quality Fund Class III",
        "price": 25.67,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GRMAX",
        "name": "Nationwide S&P 500 Index Fund Class A",
        "price": 16.72,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WOOPX",
        "name": "JPMorgan Intrepid Mid Cap Fund Class I",
        "price": 19.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MYSPX",
        "name": "MainStay MacKay S&P 500 Index Fund Investor Class",
        "price": 46.72,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PSIAX",
        "name": "PGIM QMA Stock Index Fund- Class A",
        "price": 46.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PREIX",
        "name": "T. Rowe Price Equity Index 500 Fund",
        "price": 89.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FXAIX",
        "name": "Fidelity 500 Index Fund",
        "price": 117.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTHSX",
        "name": "Fuller & Thaler Behavioral Small-Cap Equity Fund Institutional Shares",
        "price": 27.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VIIIX",
        "name": "Vanguard Institutional Index Fund Institutional Plus Shares",
        "price": 303.84,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VINIX",
        "name": "Vanguard Institutional Index Fund Institutional Shares",
        "price": 303.81,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JSMGX",
        "name": "Janus Henderson Triton Fund Class I",
        "price": 32.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GEQYX",
        "name": "GuideStone Funds Equity Index Fund Institutional Class",
        "price": 37.15,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SENCX",
        "name": "Touchstone Large Cap Focused Fund Class A",
        "price": 44.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PTEZX",
        "name": "PGIM QMA Large-Cap Core Equity Fund- Class Z",
        "price": 16.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SXPAX",
        "name": "DWS S&P 500 Index Fund - Class A",
        "price": 35.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GEQZX",
        "name": "GuideStone Funds Equity Index Fund Investor Class",
        "price": 37.16,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BTIEX",
        "name": "DWS Equity 500 Index Fund - Class S",
        "price": 203.7,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BTIIX",
        "name": "DWS Equity 500 Index Fund - Class Inst",
        "price": 207.44,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CLXRX",
        "name": "Columbia Large Cap Index Fund Institutional 2 Class",
        "price": 55.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DSPIX",
        "name": "BNY Mellon Institutional S&P 500 Stock Index Fund Class I",
        "price": 62.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NWGSX",
        "name": "Nationwide WCM Focused Small Cap Fund Institutional Service Class",
        "price": 26.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HWCCX",
        "name": "Hotchkis & Wiley Diversified Value Fund Class C",
        "price": 19.86,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SPIIX",
        "name": "SEI Institutional Managed Trust S&P 500 Index Fund Class I",
        "price": 76.35,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NEIAX",
        "name": "Columbia Large Cap Index Fund Class A",
        "price": 53.81,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MMEYX",
        "name": "Victory Integrity Discovery Fund Class Y",
        "price": 36.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NWGPX",
        "name": "Nationwide WCM Focused Small Cap Fund Class A",
        "price": 25.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DSMGX",
        "name": "Touchstone International Growth Opportunities Fund Institutional Class",
        "price": 23.51,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SXPCX",
        "name": "DWS S&P 500 Index Fund - Class C",
        "price": 35.08,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CAEEX",
        "name": "Columbia Acorn European Fund Institutional 2 Class",
        "price": 22.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JANIX",
        "name": "Janus Henderson Triton Fund Class D",
        "price": 31.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GVMCX",
        "name": "Government Street Mid-Cap Fund",
        "price": 30.94,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TYGGX",
        "name": "Touchstone International Growth Opportunities Fund Class Y",
        "price": 23.41,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SSPIX",
        "name": "SEI Institutional Managed Trust S&P 500 Index Fund Class F",
        "price": 75.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JGMIX",
        "name": "Janus Henderson Triton Fund Class S",
        "price": 30.52,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FZAMX",
        "name": "Fidelity Advisor Mid Cap II Fund Class Z",
        "price": 20.56,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JDEAX",
        "name": "JPMorgan U.S. Research Enhanced Equity Fund Class A",
        "price": 28.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HISVX",
        "name": "Harbor Small Cap Value Fund Investor Class",
        "price": 34.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VMCCX",
        "name": "Virtus KAR Mid-Cap Core Fund Class C",
        "price": 36.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMFAX",
        "name": "Fidelity Advisor Materials Fund Class A",
        "price": 68.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PSICX",
        "name": "PGIM QMA Stock Index Fund- Class C",
        "price": 46.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VTCIX",
        "name": "Vanguard Tax-Managed Capital Appreciation Fund Institutional Shares",
        "price": 86.77,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VIMCX",
        "name": "Virtus KAR Mid-Cap Core Fund Class I",
        "price": 40.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRUIX",
        "name": "T. Rowe Price Equity Index 500 Fund I Class",
        "price": 89.85,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VTCLX",
        "name": "Vanguard Tax-Managed Capital Appreciation Fund Admiral Shares",
        "price": 174.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BPTRX",
        "name": "Baron Partners Fund Retail Shares",
        "price": 90.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HNVRX",
        "name": "Harbor Small Cap Value Fund Retirement Class",
        "price": 35.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FITIX",
        "name": "Fidelity Advisor Mid Cap II Fund Class M",
        "price": 19.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AMPAX",
        "name": "American Beacon Mid-Cap Value Fund Investor Class",
        "price": 16.39,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NESIX",
        "name": "Needham Small Cap Growth Fund Institutional Class",
        "price": 18.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BVDIX",
        "name": "William Blair Small Cap Value Fund Class I",
        "price": 17.81,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SCSCX",
        "name": "Touchstone Large Cap Focused Fund Class C",
        "price": 41.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JUSRX",
        "name": "JPMorgan U.S. Equity Fund Class R5",
        "price": 17.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HSVRX",
        "name": "Harbor Small Cap Value Fund Administrative Class",
        "price": 35.25,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BPTIX",
        "name": "Baron Partners Fund Institutional Shares",
        "price": 92.46,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BPTUX",
        "name": "Baron Partners Fund R6 Shares",
        "price": 92.46,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMFTX",
        "name": "Fidelity Advisor Materials Fund Class M",
        "price": 67.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSDPX",
        "name": "Fidelity Select Materials Portfolio",
        "price": 68.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JUESX",
        "name": "JPMorgan U.S. Equity Fund Class I",
        "price": 17.23,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMFEX",
        "name": "Fidelity Advisor Materials Fund Class I",
        "price": 68.52,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GRMCX",
        "name": "Nationwide S&P 500 Index Fund Class C",
        "price": 16.25,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "USPRX",
        "name": "USAA 500 Index Fund Reward Shares",
        "price": 46.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "USSPX",
        "name": "USAA 500 Index Fund Member Shares",
        "price": 46.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "POMIX",
        "name": "T. Rowe Price Total Equity Market Index Fund",
        "price": 37.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JUEAX",
        "name": "JPMorgan U.S. Equity Fund Class A",
        "price": 17.16,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FACSX",
        "name": "Nuveen Mid Cap Value Fund Class C",
        "price": 40.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LCIAX",
        "name": "SEI Institutional Investments Trust Large Cap Index Fund Class A",
        "price": 181.81,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NSCFX",
        "name": "Nuveen NWQ Small-Cap Value Fund Class R6",
        "price": 45.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JUEPX",
        "name": "JPMorgan U.S. Equity Fund Class R3",
        "price": 17.09,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "OTIIX",
        "name": "T. Rowe Price Small-Cap Stock Fund I Class",
        "price": 53.84,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VMACX",
        "name": "Virtus KAR Mid-Cap Core Fund Class A",
        "price": 39.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NOSGX",
        "name": "Northern Small Cap Value Fund",
        "price": 20.17,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WESCX",
        "name": "TETON Westwood SmallCap Equity Fund Class AAA",
        "price": 18.85,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MMERX",
        "name": "Victory Integrity Discovery Fund Class R",
        "price": 30.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PCCOX",
        "name": "T. Rowe Price U.S. Equity Research Fund I Class",
        "price": 32.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JGMRX",
        "name": "Janus Henderson Triton Fund Class R",
        "price": 29.72,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SPINX",
        "name": "SEI Institutional Investments Trust S&P 500 Index Fund Class A",
        "price": 17.88,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRCOX",
        "name": "T. Rowe Price U.S. Equity Research Fund",
        "price": 32.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMFCX",
        "name": "Fidelity Advisor Materials Fund Class C",
        "price": 65.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIATX",
        "name": "Fidelity Advisor International Capital Appreciation Fund Class M",
        "price": 22.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DODGX",
        "name": "Dodge & Cox Stock Fund",
        "price": 198.15,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MMEAX",
        "name": "Victory Integrity Discovery Fund Class A",
        "price": 33.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BUFEX",
        "name": "Buffalo Large Cap Fund",
        "price": 37.35,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMEIX",
        "name": "Fidelity Mid Cap Enhanced Index Fund",
        "price": 15.85,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FOSBX",
        "name": "Tributary Small Company Fund Institutional Plus Class",
        "price": 29.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NSCRX",
        "name": "Nuveen NWQ Small-Cap Value Fund Class I",
        "price": 45.23,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TGGCX",
        "name": "Touchstone International Growth Opportunities Fund Class C",
        "price": 22.59,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ABINX",
        "name": "American Century Balanced Fund I Class",
        "price": 19.72,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TWBIX",
        "name": "American Century Balanced Fund Investor Class",
        "price": 19.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PABFX",
        "name": "PGIM Balanced Fund- Class Z",
        "price": 16.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CHTTX",
        "name": "AMG Managers Fairpointe Mid Cap Fund Class N",
        "price": 34.21,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PABCX",
        "name": "PGIM Balanced Fund- Class C",
        "price": 16.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PBFBX",
        "name": "PGIM Balanced Fund- Class B",
        "price": 16.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TPPAX",
        "name": "T. Rowe Price Personal Strategy Balanced Fund I Class",
        "price": 25.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRPBX",
        "name": "T. Rowe Price Personal Strategy Balanced Fund",
        "price": 24.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RRTNX",
        "name": "T. Rowe Price Retirement 2025 Fund Class R",
        "price": 17.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VASGX",
        "name": "Vanguard LifeStrategy Growth Fund Investor Shares",
        "price": 36.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VEIRX",
        "name": "Vanguard Equity-Income Fund Admiral Shares",
        "price": 80.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FBTIX",
        "name": "Fidelity Advisor Biotechnology Fund I Class",
        "price": 30.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VTRIX",
        "name": "Vanguard International Value Fund Investor Shares",
        "price": 36.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "POPFX",
        "name": "Prospector Opportunity Fund",
        "price": 23.04,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LGMCX",
        "name": "Loomis Sayles Global Allocation Fund Class C",
        "price": 24.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCHKX",
        "name": "Fidelity Advisor China Region Fund Class C",
        "price": 38.81,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DODFX",
        "name": "Dodge & Cox International Stock Fund",
        "price": 42.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WHGIX",
        "name": "Westwood Income Opportunity Fund Institutional Class",
        "price": 13.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TIBIX",
        "name": "Thornburg Investment Income Builder Fund Class I",
        "price": 23.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ASPGX",
        "name": "Astor Sector Allocation Fund Class A",
        "price": 15.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TIBMX",
        "name": "Thornburg Investment Income Builder Fund Class R5",
        "price": 23.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WSBFX",
        "name": "Walden Balanced Fund",
        "price": 21.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TIBGX",
        "name": "Thornburg Investment Income Builder Fund Class R4",
        "price": 22.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GIOTX",
        "name": "GMO International Developed Equity Allocation Fund Class III",
        "price": 16.09,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TIBAX",
        "name": "Thornburg Investment Income Builder Fund Class A",
        "price": 22.9,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TCVIX",
        "name": "Touchstone Mid Cap Value Institutional Class",
        "price": 20.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ATERX",
        "name": "AB Sustainable Global Thematic Fund Class R",
        "price": 128.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HSFNX",
        "name": "Hennessy Small Cap Financial Fund Investor Class",
        "price": 21.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VEIPX",
        "name": "Vanguard Equity-Income Fund Investor Shares",
        "price": 38.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CSERX",
        "name": "Columbia Select Large Cap Value Fund Advisor Class",
        "price": 27.48,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CIVIX",
        "name": "Causeway International Value Fund Class Institutional",
        "price": 15.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TGVIX",
        "name": "Thornburg International Value Fund Class I",
        "price": 24.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GSMFX",
        "name": "GMO SGM Major Markets Fund Class III",
        "price": 31.42,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TIVRX",
        "name": "Thornburg International Value Fund Class R5",
        "price": 24.29,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AREVX",
        "name": "American Century Investments One Choice 2055 Portfolio Investor Class",
        "price": 15.37,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VUVLX",
        "name": "Vanguard U.S. Value Fund Investor Shares",
        "price": 18.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SBACX",
        "name": "Touchstone Balanced Fund Class C",
        "price": 22.17,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TGIRX",
        "name": "Thornburg International Value Fund Class R6",
        "price": 24.19,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ADGYX",
        "name": "AB Core Opportunities Fund Advisor Class",
        "price": 21.46,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SEBLX",
        "name": "Touchstone Balanced Fund Class A",
        "price": 22.09,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DODBX",
        "name": "Dodge & Cox Balanced Fund",
        "price": 103.78,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JVAAX",
        "name": "JPMorgan Value Advantage Fund Class A",
        "price": 37.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RBAIX",
        "name": "T. Rowe Price Balanced I Class",
        "price": 25.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CIVVX",
        "name": "Causeway International Value Fund Class Investor",
        "price": 14.95,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VBAIX",
        "name": "Vanguard Balanced Index Fund Institutional Shares",
        "price": 40.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VBIAX",
        "name": "Vanguard Balanced Index Fund Admiral Shares",
        "price": 40.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BTBFX",
        "name": "Boston Trust Asset Management Fund",
        "price": 56.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VBINX",
        "name": "Vanguard Balanced Index Fund Investor Shares",
        "price": 40.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DHLAX",
        "name": "Diamond Hill Large Cap Fund Class A",
        "price": 29.17,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CSVZX",
        "name": "Columbia Select Large Cap Value Fund Institutional Class",
        "price": 27.09,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SIBLX",
        "name": "Touchstone Balanced Fund Class Y",
        "price": 21.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FASGX",
        "name": "Fidelity Asset Manager 70% Fund",
        "price": 23.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMSTX",
        "name": "Federated MDT Large Cap Value Fund Institutional Shares",
        "price": 28.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LSWWX",
        "name": "Loomis Sayles Global Allocation Fund Class Y",
        "price": 25.21,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HAVLX",
        "name": "Harbor Large Cap Value Fund Institutional Class",
        "price": 17.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HNLVX",
        "name": "Harbor Large Cap Value Fund Retirement Class",
        "price": 17.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "IBALX",
        "name": "Transamerica Multi-Managed Balanced Fund Class A",
        "price": 30.17,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTASX",
        "name": "Fidelity Advisor Asset Manager 70% Fund Class M",
        "price": 23.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HRLVX",
        "name": "Harbor Large Cap Value Fund Administrative Class",
        "price": 17.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NBQFX",
        "name": "Nuveen International Growth Fund Class R6",
        "price": 48.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "EGOIX",
        "name": "Wells Fargo Large Cap Core Fund - Class Inst",
        "price": 17.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "EGORX",
        "name": "Wells Fargo Large Cap Core Fund - Class R6",
        "price": 17.08,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LGMAX",
        "name": "Loomis Sayles Global Allocation Fund Class A",
        "price": 25.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RRTCX",
        "name": "T. Rowe Price Retirement 2030 Fund Class R",
        "price": 26.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FOSFX",
        "name": "Fidelity Overseas Fund",
        "price": 52.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FOSKX",
        "name": "Fidelity Overseas Fund Class K",
        "price": 51.94,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SXMAX",
        "name": "SEI Asset Allocation Trust Moderate Strategy Allocation Fund Class F",
        "price": 20.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CIPIX",
        "name": "Champlain Mid Cap Fund Institutional Class",
        "price": 21.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MCNVX",
        "name": "MainStay MacKay Convertible Fund Class I",
        "price": 19.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PAITX",
        "name": "T. Rowe Price International Stock Fund Advisor Class",
        "price": 18.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ADGKX",
        "name": "AB Core Opportunities Fund Class K",
        "price": 20.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BPAIX",
        "name": "Boston Partners All Cap Value Fund Institutional Class",
        "price": 27.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TGVAX",
        "name": "Thornburg International Value Fund Class A",
        "price": 23.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TGVRX",
        "name": "Thornburg International Value Fund Class R3",
        "price": 23.51,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VWNDX",
        "name": "Vanguard Windsor Fund Investor Share",
        "price": 21.77,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DHTCX",
        "name": "Diamond Hill All Cap Select Fund Class C",
        "price": 15.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRLCX",
        "name": "TIAA-CREF Large-Cap Value Fund Retirement Class",
        "price": 18.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FZABX",
        "name": "Fidelity Advisor Diversified International Fund Class Z",
        "price": 25.08,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JVAIX",
        "name": "JPMorgan Value Advantage Fund Class L",
        "price": 37.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FADCX",
        "name": "Fidelity Advisor Diversified International Fund Class C",
        "price": 23.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JVAYX",
        "name": "JPMorgan Value Advantage Fund Class R6",
        "price": 37.23,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JVASX",
        "name": "JPMorgan Value Advantage Fund Class I",
        "price": 37.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JVARX",
        "name": "JPMorgan Value Advantage Fund Class R5",
        "price": 37.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BPAVX",
        "name": "Boston Partners All Cap Value Fund Investor Class",
        "price": 27.19,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RRITX",
        "name": "T. Rowe Price International Stock Fund Class R",
        "price": 18.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CIPSX",
        "name": "Champlain Small Company Fund Class Advisor",
        "price": 19.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DHTYX",
        "name": "Diamond Hill All Cap Select Fund Class Y",
        "price": 16.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CSRYX",
        "name": "Columbia Select Large Cap Value Fund Institutional 3 Class",
        "price": 27.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QNTIX",
        "name": "Meeder Quantex Fund Institutional Class",
        "price": 37.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QNTAX",
        "name": "Meeder Quantex Fund Adviser Class",
        "price": 37.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DHLTX",
        "name": "Diamond Hill All Cap Select Fund Class I",
        "price": 16.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DHLYX",
        "name": "Diamond Hill Large Cap Fund Class Y",
        "price": 29.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SLVAX",
        "name": "Columbia Select Large Cap Value Fund Class A",
        "price": 26.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DHLRX",
        "name": "Diamond Hill Large Cap Fund Class I",
        "price": 29.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CIPMX",
        "name": "Champlain Mid Cap Fund Advisor Class",
        "price": 21.08,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FLCGX",
        "name": "Meeder Quantex Fund Retail Class",
        "price": 37.16,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LMVYX",
        "name": "Lord Abbett Focused Small Cap Value Fund Class I",
        "price": 24.39,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JVACX",
        "name": "JPMorgan Value Advantage Fund Class C",
        "price": 36.95,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FDVAX",
        "name": "Fidelity Advisor Diversified International Fund Class A",
        "price": 24.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FPRAX",
        "name": "FPA Paramount Fund",
        "price": 21.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ADGZX",
        "name": "AB Core Opportunities Fund Class Z",
        "price": 21.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HSSAX",
        "name": "Emerald Banking and Finance Fund Class A",
        "price": 35.3,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRRCX",
        "name": "T. Rowe Price Retirement 2030 Fund",
        "price": 26.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VINEX",
        "name": "Vanguard International Explorer Fund Investor Shares",
        "price": 17.44,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "KMDVX",
        "name": "Keeley Mid Cap Dividend Value Fund Class A",
        "price": 23.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSTLX",
        "name": "Federated MDT Large Cap Value Fund Class R6",
        "price": 28.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RPBAX",
        "name": "T. Rowe Price Balanced Fund",
        "price": 25.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSTKX",
        "name": "Federated MDT Large Cap Value Fund Service Shares",
        "price": 28.56,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FFBFX",
        "name": "Emerald Banking and Finance Fund Investor Class",
        "price": 33.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HSSIX",
        "name": "Emerald Banking and Finance Fund Institutional Class",
        "price": 36.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSTRX",
        "name": "Federated MDT Large Cap Value Fund Class A",
        "price": 28.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PARCX",
        "name": "T. Rowe Price Retirement 2030 Fund Advisor Class",
        "price": 26.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PESPX",
        "name": "BNY Mellon MidCap Index Fund Investor Shares",
        "price": 33.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BRLVX",
        "name": "American Beacon Bridgeway Large Cap Value Fund Institutional Class",
        "price": 27.1,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MYIMX",
        "name": "Victory Integrity Mid-Cap Value Fund Class Y",
        "price": 19.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSCWX",
        "name": "Nuveen Small Cap Value Fund Class R6",
        "price": 23.15,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NWXQX",
        "name": "Nationwide Mid Cap Market Index Fund Institutional Service Class",
        "price": 16.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "IUESX",
        "name": "JPMorgan International Unconstrained Equity Fund Class I",
        "price": 22.77,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FAAIX",
        "name": "Fidelity Advisor Asset Manager 70% Fund I Class",
        "price": 23.41,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BLVAX",
        "name": "BMO Low Volatility Equity Fund Class A",
        "price": 16.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSCCX",
        "name": "Nuveen Small Cap Value Fund Class I",
        "price": 23.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRDSX",
        "name": "T. Rowe Price QM U.S. Small-Cap Growth Equity Fund",
        "price": 41.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FBAKX",
        "name": "Fidelity Balanced Fund Class K",
        "price": 25.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FAASX",
        "name": "Fidelity Advisor Asset Manager 70% Fund Class A",
        "price": 23.37,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HQIIX",
        "name": "The Hartford Equity Income Fund Class I",
        "price": 19.83,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DPSCX",
        "name": "BNY Mellon Structured Midcap Fund Class C",
        "price": 22.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LYRIX",
        "name": "Lyrical U.S. Value Equity Fund Institutional Class",
        "price": 16.84,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HSSCX",
        "name": "Emerald Banking and Finance Fund Class C",
        "price": 29.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "USWGX",
        "name": "USAA World Growth Fund Adviser Shares",
        "price": 25.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TCLCX",
        "name": "TIAA-CREF Large-Cap Value Fund Retail Class",
        "price": 17.72,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SMTIX",
        "name": "JPMorgan SmartRetirement 2040 Fund Class R5",
        "price": 22.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SMTYX",
        "name": "JPMorgan SmartRetirement 2040 Fund Class R6",
        "price": 22.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSCVX",
        "name": "Nuveen Small Cap Value Fund Class C",
        "price": 18.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "UBVSX",
        "name": "Undiscovered Managers Behavioral Value Fund Class I",
        "price": 60.01,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CRMSX",
        "name": "CRM Small Cap Value Fund Class Investor",
        "price": 14.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SMTSX",
        "name": "JPMorgan SmartRetirement 2040 Fund Class I",
        "price": 22.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NGPAX",
        "name": "Columbia Global Strategic Equity Fund Institutional Class",
        "price": 16.25,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LYRBX",
        "name": "Lyrical U.S. Value Equity Fund Investor Class",
        "price": 16.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SSGAX",
        "name": "SEI Asset Allocation Trust Aggressive Strategy Fund Class F",
        "price": 15.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCASX",
        "name": "Fidelity Advisor Asset Manager 70% Fund Class C",
        "price": 23.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SKTAX",
        "name": "SEI Asset Allocation Trust Core Market Strategy Allocation Fund Class F",
        "price": 20.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SMTAX",
        "name": "JPMorgan SmartRetirement 2040 Fund Class A",
        "price": 21.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TILCX",
        "name": "T. Rowe Price Institutional Large Cap Value Fund",
        "price": 23.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HILVX",
        "name": "Harbor Large Cap Value Fund Investor Class",
        "price": 18.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "UBVRX",
        "name": "Undiscovered Managers Behavioral Value Fund Class R2",
        "price": 58.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GMXAX",
        "name": "Nationwide Mid Cap Market Index Fund Class A",
        "price": 15.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMCLX",
        "name": "Federated Mid-Cap Index Fund Class R6 Shares",
        "price": 20.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMDCX",
        "name": "Federated Mid-Cap Index Fund Service Shares",
        "price": 20.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FDVIX",
        "name": "Fidelity Advisor Diversified International Fund I Class",
        "price": 25.13,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HDGCX",
        "name": "The Hartford Dividend and Growth Fund Class C",
        "price": 25.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WTMCX",
        "name": "Segall Bryant & Hamill Mid Cap Value Dividend Fund Retail Class",
        "price": 25.56,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JENYX",
        "name": "Jensen Quality Growth Fund Class Y",
        "price": 52.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMCRX",
        "name": "Federated Mid-Cap Index Fund Institutional Shares",
        "price": 20.3,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TFSIX",
        "name": "Franklin Mutual Financial Services Fund Class A",
        "price": 23.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VHGEX",
        "name": "Vanguard Global Equity Fund Investor Shares",
        "price": 32.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "UBVLX",
        "name": "Undiscovered Managers Behavioral Value Fund Class L",
        "price": 60.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CIPNX",
        "name": "Champlain Small Company Fund Institutional Class",
        "price": 19.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FZAJX",
        "name": "Fidelity Advisor International Growth Fund Class Z",
        "price": 16.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIGFX",
        "name": "Fidelity International Growth Fund",
        "price": 16.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WPSIX",
        "name": "AB Concentrated Growth Fund Class I",
        "price": 46.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CLREX",
        "name": "Columbia Balanced Fund Institutional 2 Class",
        "price": 45.15,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CBALX",
        "name": "Columbia Balanced Fund Institutional Class",
        "price": 45.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SMTCX",
        "name": "JPMorgan SmartRetirement 2040 Fund Class C",
        "price": 21.54,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PFPMX",
        "name": "Parnassus Mid Cap Fund Institutional Shares",
        "price": 37.08,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "UBVAX",
        "name": "Undiscovered Managers Behavioral Value Fund Class A",
        "price": 58.64,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SISAX",
        "name": "SEI Asset Allocation Trust Tax-Managed Aggressive Strategy Fund Class F",
        "price": 23.14,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PARMX",
        "name": "Parnassus Mid Cap Fund",
        "price": 37.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TPVIX",
        "name": "Timothy Plan Small Cap Value Fund Class I",
        "price": 17.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HGIYX",
        "name": "Hartford Core Equity Fund Class Y",
        "price": 37.14,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGOAX",
        "name": "SEI Asset Allocation Trust Market Growth Strategy Allocation Fund Class F",
        "price": 25.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DMIDX",
        "name": "BNY Mellon MidCap Index Fund Class I",
        "price": 33.19,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TQAIX",
        "name": "T. Rowe Price QM U.S. Small-Cap Growth Equity Fund I Class",
        "price": 41.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MCINX",
        "name": "MainStay MacKay Convertible Fund Investor Class",
        "price": 19.25,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRLIX",
        "name": "TIAA-CREF Large-Cap Value Fund Institutional Class",
        "price": 18.59,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRLHX",
        "name": "TIAA-CREF Large Cap Value Fund Advisor Class",
        "price": 18.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FFNOX",
        "name": "Fidelity Four-in-One Index Fund",
        "price": 50.43,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSCAX",
        "name": "Nuveen Small Cap Value Fund Class A",
        "price": 22.29,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GMXRX",
        "name": "Nationwide Mid Cap Market Index Fund Class R",
        "price": 15.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HGITX",
        "name": "Hartford Core Equity Fund Class R5",
        "price": 36.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "KIFCX",
        "name": "Salient Select Income Fund Class C",
        "price": 21.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DPSYX",
        "name": "BNY Mellon Structured MidCap Fund Class Y",
        "price": 27.54,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SEAIX",
        "name": "SEI Asset Allocation Trust Aggressive Strategy Fund Class I",
        "price": 15.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TMMAX",
        "name": "SEI Institutional Managed Trust Tax-Managed Volatility Fund Class F",
        "price": 18.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "STVYX",
        "name": "SEI Institutional Managed Trust Tax-Managed Managed Volatility Fund Class Y",
        "price": 18.51,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JORCX",
        "name": "Janus Henderson Global Select Fund Class C",
        "price": 15.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MPACX",
        "name": "Matthews Asia Growth Fund Investor Class",
        "price": 28.41,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TQAAX",
        "name": "T. Rowe Price QM U.S. Small-Cap Growth Equity Fund Advisor Class",
        "price": 41.15,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MSCFX",
        "name": "Mairs & Power Small Cap Fund",
        "price": 26.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MCSVX",
        "name": "MainStay MacKay Convertible Fund Class B",
        "price": 19.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FOVAX",
        "name": "First Trust\/Confluence Small Cap Value Fund Class A",
        "price": 32.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "USAWX",
        "name": "USAA World Growth Fund",
        "price": 25.88,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JTSYX",
        "name": "JPMorgan SmartRetirement 2050 Fund Class R6",
        "price": 21.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JTSIX",
        "name": "JPMorgan SmartRetirement 2050 Fund Class R5",
        "price": 21.56,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JENIX",
        "name": "Jensen Quality Growth Fund Class I",
        "price": 52.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SSHVX",
        "name": "Sound Shore Fund Institutional Class",
        "price": 43.09,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JTSSX",
        "name": "JPMorgan SmartRetirement 2050 Fund Class I",
        "price": 21.51,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CBDYX",
        "name": "Columbia Balanced Fund Institutional 3 Class",
        "price": 45.59,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CBDRX",
        "name": "Columbia Balanced Fund Advisor Class",
        "price": 45.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGIDX",
        "name": "Crossmark Steward Global Equity Income Fund Class A",
        "price": 32.02,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSPHX",
        "name": "Fidelity Select Health Care Portfolio",
        "price": 29.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FABCX",
        "name": "Fidelity Advisor Balanced Fund Class C",
        "price": 23.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCPVX",
        "name": "Fidelity Small Cap Value Fund",
        "price": 15.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NOMIX",
        "name": "Northern Mid Cap Index Fund",
        "price": 19.77,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CBLAX",
        "name": "Columbia Balanced Fund Class A",
        "price": 45.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RRTPX",
        "name": "T. Rowe Price Retirement 2035 Fund Class R",
        "price": 19.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FBALX",
        "name": "Fidelity Balanced Fund",
        "price": 25.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FAMRX",
        "name": "Fidelity Asset Manager 85% Fund",
        "price": 20.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BWLAX",
        "name": "American Beacon Bridgeway Large Cap Value Fund A Class",
        "price": 26.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCIVX",
        "name": "Frontier MFG Core Infrastructure Fund Service Class",
        "price": 19.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMIYX",
        "name": "FMI International Fund Institutional Class",
        "price": 32.48,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HQISX",
        "name": "The Hartford Equity Income Fund Class R4",
        "price": 20.01,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JTSCX",
        "name": "JPMorgan SmartRetirement 2050 Fund Class C",
        "price": 21.16,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "IILGX",
        "name": "Thrivent Global Stock Fund Class S",
        "price": 25.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FHCIX",
        "name": "Fidelity Advisor Health Care Fund I Class",
        "price": 63.13,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSMEX",
        "name": "Fidelity Select Medical Technology and Devices Portfolio",
        "price": 63.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AASCX",
        "name": "Thrivent Mid Cap Stock Fund Class A",
        "price": 25.25,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRRNX",
        "name": "T. Rowe Price Retirement 2055 Fund",
        "price": 16.35,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FEYAX",
        "name": "Fidelity Advisor Asset Manager 85% Fund Class A",
        "price": 20.56,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ARTGX",
        "name": "Artisan Global Value Fund Investor Class",
        "price": 18.39,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FHCCX",
        "name": "Fidelity Advisor Health Care Fund Class C",
        "price": 45.21,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "APHGX",
        "name": "Artisan Global Value Fund Institutional Class",
        "price": 18.39,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CAGIX",
        "name": "Calvert Growth Allocation Fund Class I",
        "price": 22.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "APDGX",
        "name": "Artisan Global Value Fund Advisor Class",
        "price": 18.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BRLIX",
        "name": "Bridgeway Blue Chip Fund",
        "price": 15.35,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WPSKX",
        "name": "AB Concentrated Growth Fund Class K",
        "price": 45.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VWIGX",
        "name": "Vanguard International Growth Fund Investor Shares",
        "price": 33.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FEYTX",
        "name": "Fidelity Advisor Asset Manager 85% Fund Class M",
        "price": 20.43,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FACTX",
        "name": "Fidelity Advisor Health Care Fund Class M",
        "price": 53.62,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MPGFX",
        "name": "Mairs & Power Growth Fund Investor Class",
        "price": 130.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TBGVX",
        "name": "Tweedy, Browne Global Value Fund",
        "price": 27.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "OMGNX",
        "name": "Invesco Oppenheimer Main Street Fund Class R",
        "price": 49.19,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRRMX",
        "name": "T. Rowe Price Retirement 2050 Fund",
        "price": 16.09,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LVOLX",
        "name": "SGI U.S. Large Cap Equity Fund Class A",
        "price": 19.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WHGSX",
        "name": "Westwood SmallCap Fund Institutional Class",
        "price": 17.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FACDX",
        "name": "Fidelity Advisor Health Care Fund Class A",
        "price": 57.77,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FZAAX",
        "name": "Fidelity Advisor Balanced Fund Class Z",
        "price": 23.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DROCX",
        "name": "Diamond Hill Research Opportunities Fund Class C",
        "price": 22.02,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FAIOX",
        "name": "Fidelity Advisor Balanced Fund I Class",
        "price": 23.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SILVX",
        "name": "SGI U.S. Large Cap Equity Fund Class I",
        "price": 19.51,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RRTVX",
        "name": "T. Rowe Price Retirement 2055 Fund Class R",
        "price": 16.13,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TMSIX",
        "name": "Thrivent Mid Cap Stock Fund Class S",
        "price": 28.95,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRRDX",
        "name": "T. Rowe Price Retirement 2040 Fund",
        "price": 27.83,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BTMFX",
        "name": "Boston Trust Midcap Fund",
        "price": 19.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CLDIX",
        "name": "Calvert Long-Term Income Fund Class I",
        "price": 19.37,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FEYCX",
        "name": "Fidelity Advisor Asset Manager 85% Fund Class C",
        "price": 20.23,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FAIGX",
        "name": "Fidelity Advisor Balanced Fund Class M",
        "price": 23.7,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CLNCX",
        "name": "Columbia Large Cap Enhanced Core Fund Institutional 2 Class",
        "price": 26.21,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MIGYX",
        "name": "Invesco Oppenheimer Main Street Fund Class Y",
        "price": 49.94,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WWOIX",
        "name": "Virtus Vontobel Global Opportunities Fund Class I",
        "price": 17.85,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TROCX",
        "name": "Touchstone Global ESG Equity Fund - Class I",
        "price": 22.64,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CALCX",
        "name": "Calvert Conservative Allocation Fund Class C",
        "price": 17.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DPDEX",
        "name": "Macquarie Pooled Trust Large Cap Value Portfolio",
        "price": 17.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CFWCX",
        "name": "Calvert Global Water Fund Class C",
        "price": 21.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYLIX",
        "name": "Rydex Leisure Fund Class Investor",
        "price": 78.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FARFX",
        "name": "Fidelity Advisor Managed Retirement 2025 Fund Class A",
        "price": 54.86,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "THORX",
        "name": "Thornburg Global Opportunities Fund Class R3",
        "price": 31.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DHFCX",
        "name": "Diamond Hill Long Short Fund Class C",
        "price": 22.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FERIX",
        "name": "Fidelity Advisor Emerging Asia Fund I Class",
        "price": 43.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CFWIX",
        "name": "Calvert Global Water Fund Class I",
        "price": 23.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FEATX",
        "name": "Fidelity Advisor Emerging Asia Fund Class M",
        "price": 41.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CFWAX",
        "name": "Calvert Global Water Fund Class A",
        "price": 22.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BINIX",
        "name": "Baron International Growth Fund Institutional Shares",
        "price": 25.3,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYLCX",
        "name": "Rydex Leisure Fund Class C",
        "price": 63.02,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "THOCX",
        "name": "Thornburg Global Opportunities Fund Class C",
        "price": 30.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BIGFX",
        "name": "Baron International Growth Fund Retail Shares",
        "price": 24.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FFFDX",
        "name": "Fidelity Freedom 2020 Fund",
        "price": 16.46,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LCORX",
        "name": "Leuthold Core Investment Fund Retail Class",
        "price": 19.56,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIRFX",
        "name": "Fidelity Advisor Managed Retirement 2025 Fund Class I",
        "price": 55.01,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SPVZX",
        "name": "PGIM QMA Mid-Cap Value Fund- Class Z",
        "price": 18.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HAFCX",
        "name": "Hartford Multi-Asset Income and Growth Fund Class C",
        "price": 20.85,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PMVQX",
        "name": "PGIM QMA Mid-Cap Value Fund- Class R6",
        "price": 18.21,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SDVRX",
        "name": "PGIM QMA Mid-Cap Value Fund- Class R",
        "price": 18.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GLRIX",
        "name": "James Balanced: Golden Rainbow Fund Institutional Class",
        "price": 21.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VASIX",
        "name": "Vanguard LifeStrategy Income Fund Investor Shares",
        "price": 16.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MFMPX",
        "name": "Morgan Stanley Institutional Fund, Inc. Frontier Markets Portfolio Class A",
        "price": 17.15,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MSRFX",
        "name": "Morgan Stanley Institutional Fund, Inc. Frontier Markets Portfolio Class IS",
        "price": 17.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MBESX",
        "name": "AMG Chicago Equity Partners Balanced Fund Class I",
        "price": 17.66,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MBEAX",
        "name": "AMG Chicago Equity Partners Balanced Fund Class N",
        "price": 17.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "EKGCX",
        "name": "Wells Fargo Global Small Cap Fund Class C",
        "price": 26.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AMDVX",
        "name": "American Century Mid Cap Value Fund R6 Class",
        "price": 17.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ACMVX",
        "name": "American Century Mid Cap Value Fund Investor Class",
        "price": 17.25,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "EKGYX",
        "name": "Wells Fargo Global Small Cap Fund Class Admin",
        "price": 42.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSCRX",
        "name": "Fidelity Small Cap Discovery Fund",
        "price": 22.85,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "EKGIX",
        "name": "Wells Fargo Global Small Cap Fund Class Inst",
        "price": 42.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MICDX",
        "name": "Matthews China Dividend Fund Institutional Class",
        "price": 16.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MCDFX",
        "name": "Matthews China Dividend Fund Investor Class",
        "price": 16.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GPRIX",
        "name": "Grandeur Peak Global Reach Fund Institutional Class",
        "price": 16.56,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SAOIX",
        "name": "Guggenheim Alpha Opportunity Fund Institutional Class",
        "price": 24.15,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "EKGAX",
        "name": "Wells Fargo Global Small Cap Fund Class A",
        "price": 40.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FPBFX",
        "name": "Fidelity Pacific Basin Fund",
        "price": 34.23,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HEIFX",
        "name": "Hennessy Equity and Income Fund Investor Class",
        "price": 15.44,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SAOCX",
        "name": "Guggenheim Alpha Opportunity Fund Class C",
        "price": 14.51,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FGTRX",
        "name": "Franklin Growth Allocation Fund Class R",
        "price": 18.35,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGIIX",
        "name": "First Eagle Global Fund Class I",
        "price": 57.83,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FESOX",
        "name": "First Eagle Overseas Fund Class C",
        "price": 22.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SAOAX",
        "name": "Guggenheim Alpha Opportunity Fund Class A",
        "price": 16.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FESGX",
        "name": "First Eagle Global Fund Class C",
        "price": 55.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGENX",
        "name": "First Eagle Global Fund Class A",
        "price": 57.54,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QFVOX",
        "name": "Pear Tree Polaris Foreign Value Fund Class Ordinary",
        "price": 21.37,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QFVIX",
        "name": "Pear Tree Polaris Foreign Value Fund Class Institutional",
        "price": 21.3,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGOIX",
        "name": "First Eagle Overseas Fund Class I",
        "price": 24.04,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRAOX",
        "name": "T. Rowe Price Asia Opportunities Fund",
        "price": 16.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TESRX",
        "name": "Franklin Mutual Shares Fund Class R",
        "price": 27.09,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CNPIX",
        "name": "ProFunds Consumer Goods Ultra Sector Fund Investor Class",
        "price": 123.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CNPSX",
        "name": "ProFunds Consumer Goods Ultra Sector Fund Service Class",
        "price": 111.29,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGOVX",
        "name": "First Eagle Overseas Fund Class A",
        "price": 23.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CMAAX",
        "name": "Calvert Moderate Allocation Fund Class A",
        "price": 20.39,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TESIX",
        "name": "Franklin Mutual Shares Fund Class A",
        "price": 27.19,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ENPSX",
        "name": "ProFunds UltraSector Oil & Gas Fund Service Class",
        "price": 20.97,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NELAX",
        "name": "Nuveen Equity Long\/Short Fund Class A",
        "price": 41.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSBBX",
        "name": "Federated Global Allocation Fund Class B Shares",
        "price": 19.8,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WIIGX",
        "name": "Wasatch International Growth Fund Institutional Class",
        "price": 30.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HHHSX",
        "name": "Hartford Schroders Emerging Markets Equity Fund Class R4",
        "price": 16.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ENPIX",
        "name": "ProFunds UltraSector Oil & Gas Fund Investor Class",
        "price": 24.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TFSCX",
        "name": "Templeton Institutional Foreign Smaller Companies Series Advisor",
        "price": 20.18,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SEMTX",
        "name": "Hartford Schroders Emerging Markets Equity Fund Class SDR",
        "price": 16.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SEMNX",
        "name": "Hartford Schroders Emerging Markets Equity Fund Class I",
        "price": 16.42,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NELIX",
        "name": "Nuveen Equity Long\/Short Fund Class I",
        "price": 42.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NELCX",
        "name": "Nuveen Equity Long\/Short Fund Class C",
        "price": 37.59,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HHHCX",
        "name": "Hartford Schroders Emerging Markets Equity Fund Class C",
        "price": 16.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RMBKX",
        "name": "RMB Mendon Financial Services Fund Class A",
        "price": 40.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PWGAX",
        "name": "PACE International Equity Investments Class A",
        "price": 15.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PWIYX",
        "name": "PACE International Equity Investments Class Y",
        "price": 15.52,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PCIEX",
        "name": "PACE International Equity Investments Class P",
        "price": 15.48,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RMBNX",
        "name": "RMB Mendon Financial Services Fund Class C",
        "price": 36.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYBAX",
        "name": "Rydex Basic Materials Fund Class H",
        "price": 52.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SEMVX",
        "name": "Hartford Schroders Emerging Markets Equity Fund Class A",
        "price": 16.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYBCX",
        "name": "Rydex Basic Materials Fund Class C",
        "price": 47.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DHMYX",
        "name": "Diamond Hill Small-Mid Cap Fund Class Y",
        "price": 22.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DHMIX",
        "name": "Diamond Hill Small Mid Cap Fund Class I",
        "price": 22.29,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DHMAX",
        "name": "Diamond Hill Small Mid Cap Fund Class A",
        "price": 22.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FERCX",
        "name": "Fidelity Advisor Emerging Asia Fund Class C",
        "price": 37.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYBIX",
        "name": "Rydex Basic Materials Fund Class Investor",
        "price": 58.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYBMX",
        "name": "Rydex Basic Materials Fund Class A",
        "price": 54.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DHMCX",
        "name": "Diamond Hill Small Mid Cap Fund Class C",
        "price": 19.9,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WILJX",
        "name": "William Blair International Leaders Fund R6 Class Shares",
        "price": 18.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WILNX",
        "name": "William Blair International Leaders Fund Class N Shares",
        "price": 18.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BPLEX",
        "name": "Boston Partners Long\/Short Equity Fund Investor Class",
        "price": 14.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BPLSX",
        "name": "Boston Partners Long\/Short Equity Fund Institutional Class",
        "price": 16.21,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RLUEX",
        "name": "Lazard US Equity Concentrated Portfolio R6 Shares",
        "price": 17.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TDMTX",
        "name": "Templeton Developing Markets Trust Class C",
        "price": 21.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RMBIX",
        "name": "RMB Mendon Financial Long\/Short Fund Class I",
        "price": 15.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MAPTX",
        "name": "Matthews Pacific Tiger Fund Investor Class",
        "price": 28.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MIPTX",
        "name": "Matthews Pacific Tiger Fund Institutional Class",
        "price": 28.04,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRASX",
        "name": "T. Rowe Price New Asia Fund",
        "price": 19.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WIGTX",
        "name": "Seven Canyons World Innovators Fund Institutional Class",
        "price": 17.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RMBFX",
        "name": "RMB Mendon Financial Long\/Short Fund Class A",
        "price": 15.52,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WAGTX",
        "name": "Seven Canyons World Innovators Fund Investor Class",
        "price": 17.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RLITX",
        "name": "Lazard International Strategic Equity Portfolio R6 Shares",
        "price": 15.43,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GBFAX",
        "name": "VanEck Emerging Markets Fund Class A",
        "price": 18.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ACDHX",
        "name": "AC Alternatives Disciplined Long Short Fund C Class",
        "price": 16.3,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BPIRX",
        "name": "Boston Partners Long\/Short Research Fund Institutional Class",
        "price": 15.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LZOEX",
        "name": "Lazard Emerging Markets Equity Portfolio Open Shares",
        "price": 18.18,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SHSCX",
        "name": "BlackRock Health Sciences Opportunities Portfolio Investor C Shares",
        "price": 57.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SHSKX",
        "name": "BlackRock Health Sciences Opportunities Portfolio Class K",
        "price": 70.48,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SHSSX",
        "name": "BlackRock Health Sciences Opportunities Portfolio Institutional Shares",
        "price": 70.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SHISX",
        "name": "BlackRock Health Sciences Opportunities Portfolio Service Shares",
        "price": 67.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BHSRX",
        "name": "BlackRock Health Sciences Opportunities Portfolio Class R",
        "price": 65.19,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SHSAX",
        "name": "BlackRock Health Sciences Opportunities Portfolio Investor A Shares",
        "price": 66.78,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RLEMX",
        "name": "Lazard Emerging Markets Equity Portfolio R6 Shares",
        "price": 17.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GBATX",
        "name": "GMO Strategic Opportunities Allocation Fund Class III",
        "price": 20.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RISAX",
        "name": "Manning & Napier Rainier International Discovery Series Class S",
        "price": 22.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TCMIX",
        "name": "AMG TimesSquare International Small Cap Fund Class Z",
        "price": 15.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TCMPX",
        "name": "AMG TimesSquare International Small Cap Fund Class N",
        "price": 15.9,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JEMSX",
        "name": "JPMorgan Emerging Markets Equity Fund Class I",
        "price": 32.51,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NIMEX",
        "name": "Nuveen Equity Market Neutral Fund Class I",
        "price": 22.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NMAEX",
        "name": "Nuveen Equity Market Neutral Fund Class A",
        "price": 21.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DREGX",
        "name": "Driehaus Emerging Markets Growth Fund Investor Class",
        "price": 39.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RAIIX",
        "name": "Manning & Napier Rainier International Discovery Series Class I",
        "price": 22.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HLEMX",
        "name": "Harding Loevner Emerging Markets Portfolio Advisor Class",
        "price": 58.14,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HLMEX",
        "name": "Harding Loevner Institutional Emerging Markets Portfolio Class I",
        "price": 22.18,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SBYEX",
        "name": "BNY Mellon Diversified Emerging Markets Fund Class Y",
        "price": 24.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DBECX",
        "name": "BNY Mellon Diversified Emerging Markets Fund Class C",
        "price": 23.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "IEMFX",
        "name": "T. Rowe Price Institutional Emerging Markets Equity Fund",
        "price": 41.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "IHOAX",
        "name": "The Hartford International Opportunities Fund Class A",
        "price": 16.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AILCX",
        "name": "American Beacon International Equity Fund Class C",
        "price": 16.98,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CLIFX",
        "name": "Clifford Capital Partners Fund Institutional Class",
        "price": 15.1,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AAISX",
        "name": "American Beacon International Equity Fund Advisor Class",
        "price": 18.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRZIX",
        "name": "T. Rowe Price Emerging Markets Stock Fund I Class",
        "price": 46.04,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "IHOIX",
        "name": "The Hartford International Opportunities Fund Class I",
        "price": 16.46,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRMSX",
        "name": "T. Rowe Price Emerging Markets Stock Fund",
        "price": 45.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SBCEX",
        "name": "BNY Mellon Diversified Emerging Markets Fund Class I",
        "price": 24.49,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AAIEX",
        "name": "American Beacon International Equity Fund Institutional Class",
        "price": 17.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "IHOTX",
        "name": "The Hartford International Opportunities Fund Class R5",
        "price": 17.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AIEAX",
        "name": "American Beacon International Equity Fund Class A",
        "price": 17.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "IHOSX",
        "name": "The Hartford International Opportunities Fund Class R4",
        "price": 17.18,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "IHORX",
        "name": "The Hartford International Opportunities Fund Class R3",
        "price": 16.88,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SABTX",
        "name": "SA U.S. Value Fund Investor Class",
        "price": 17.72,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SVUBX",
        "name": "PGIM QMA Mid-Cap Value Fund- Class B",
        "price": 15.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NCBVX",
        "name": "PGIM QMA Mid-Cap Value Fund- Class C",
        "price": 15.14,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SPRAX",
        "name": "PGIM QMA Mid-Cap Value Fund- Class A",
        "price": 18.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HLMNX",
        "name": "Harding Loevner International Equity Portfolio Investor Class",
        "price": 23.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HLMIX",
        "name": "Harding Loevner International Equity Portfolio Institutional Class",
        "price": 23.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HJPIX",
        "name": "Hennessy Japan Fund Institutional Class",
        "price": 37.41,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HJPNX",
        "name": "Hennessy Japan Fund Investor Class",
        "price": 36.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AEMZX",
        "name": "Acadian Emerging Markets Portfolio Class I",
        "price": 20.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GEDTX",
        "name": "GMO Emerging Domestic Opportunities Fund Class II",
        "price": 22.44,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HJPSX",
        "name": "Hennessy Japan Small Cap Fund Investor Class",
        "price": 14.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HJSIX",
        "name": "Hennessy Japan Small Cap Fund Institutional Class",
        "price": 14.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRLAX",
        "name": "T. Rowe Price Latin America Fund",
        "price": 23.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WESJX",
        "name": "William Blair Emerging Markets Small Cap Growth Fund R6 Class",
        "price": 17.86,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WESNX",
        "name": "William Blair Emerging Markets Small Cap Growth Fund Class N",
        "price": 17.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BESIX",
        "name": "William Blair Emerging Markets Small Cap Growth Fund Class I",
        "price": 17.83,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FFFCX",
        "name": "Fidelity Freedom 2010 Fund",
        "price": 15.83,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CTFAX",
        "name": "Columbia Thermostat Fund Class A",
        "price": 15.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FZAEX",
        "name": "Fidelity Advisor Emerging Markets Fund Class Z",
        "price": 28.25,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VWINX",
        "name": "Vanguard Wellesley Income Fund Investor Shares",
        "price": 28.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GIBRX",
        "name": "Guggenheim Total Return Bond Fund Class R6",
        "price": 27.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MGBIX",
        "name": "AMG Managers Loomis Sayles Bond Fund Class I",
        "price": 27.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MGFIX",
        "name": "AMG Managers Loomis Sayles Bond Fund Class N",
        "price": 27.59,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GIBAX",
        "name": "Guggenheim Total Return Bond Fund Class A",
        "price": 27.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GMCDX",
        "name": "GMO Emerging Country Debt Fund Class III",
        "price": 27.97,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GMDFX",
        "name": "GMO Emerging Country Debt Fund Class IV",
        "price": 27.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMCKX",
        "name": "Fidelity Advisor Emerging Markets Fund Class C",
        "price": 26.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BTTRX",
        "name": "American Century Zero Coupon 2025 Fund Investor Class",
        "price": 109.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VWIAX",
        "name": "Vanguard Wellesley Income Fund Admiral Shares",
        "price": 67.84,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TIDDX",
        "name": "T. Rowe Price International Discovery Fund I Class",
        "price": 70.1,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TIBRX",
        "name": "Thornburg Investment Income Builder Fund Class R3",
        "price": 22.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TIBCX",
        "name": "Thornburg Investment Income Builder Fund Class C",
        "price": 22.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SAISX",
        "name": "SA International Small Company Fund Investor Class",
        "price": 19.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRIDX",
        "name": "T. Rowe Price International Discovery Fund",
        "price": 69.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VMNVX",
        "name": "Vanguard Global Minimum Volatility Fund Admiral Shares",
        "price": 30.29,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIMKX",
        "name": "Fidelity Advisor Emerging Markets Fund I Class",
        "price": 28.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FAMKX",
        "name": "Fidelity Advisor Emerging Markets Fund Class A",
        "price": 28.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTMKX",
        "name": "Fidelity Advisor Emerging Markets Fund Class M",
        "price": 27.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "APHKX",
        "name": "Artisan International Value Fund Institutional Class",
        "price": 36.83,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ARTKX",
        "name": "Artisan International Value Fund Investor Class",
        "price": 36.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SVOAX",
        "name": "SEI Institutional Managed Trust U.S. Managed Volatility Fund Class F",
        "price": 18.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MIPIX",
        "name": "Matthews Asia Dividend Fund Institutional Class",
        "price": 16.86,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DNINX",
        "name": "Dunham International Stock Fund Class N",
        "price": 15.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RWDYX",
        "name": "Redwood Managed Volatility Fund Class Y",
        "price": 15.49,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SIIDX",
        "name": "Bernstein Intermediate Duration Institutional Portfolio",
        "price": 15.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RWDIX",
        "name": "Redwood Managed Volatility Fund Class I",
        "price": 15.37,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "APDKX",
        "name": "Artisan International Value Fund Advisor Class",
        "price": 36.67,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SGGDX",
        "name": "First Eagle Gold Fund Class A",
        "price": 20.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VRISX",
        "name": "Virtus KAR International Small-Cap Fund Class R6",
        "price": 19.01,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VIISX",
        "name": "Virtus KAR International Small-Cap Fund Class I",
        "price": 19.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FEGOX",
        "name": "First Eagle Gold Fund Class C",
        "price": 18.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HFSAX",
        "name": "Hundredfold Select Alternative Fund Investor Class",
        "price": 23.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JIBFX",
        "name": "Johnson Institutional Core Bond Fund",
        "price": 16.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HRMVX",
        "name": "Harbor Mid Cap Value Fund Administrative Class",
        "price": 21.14,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TFESX",
        "name": "Templeton Institutional Fund International Equity Series Service Shares",
        "price": 15.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HIMVX",
        "name": "Harbor Mid Cap Value Fund Investor Class",
        "price": 20.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HAMVX",
        "name": "Harbor Mid Cap Value Fund Institutional Class",
        "price": 20.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HNMVX",
        "name": "Harbor Mid Cap Value Fund Retirement Class",
        "price": 20.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TFEQX",
        "name": "Templeton Institutional Fund International Equity Series Primary Shares",
        "price": 15.14,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FEGIX",
        "name": "First Eagle Gold Fund Class I",
        "price": 20.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FHKIX",
        "name": "Fidelity Advisor China Region Fund I Class",
        "price": 40.15,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FHKAX",
        "name": "Fidelity Advisor China Region Fund Class A",
        "price": 40.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RINPX",
        "name": "Royce International Premier Fund Consultant Class",
        "price": 19.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NMMTX",
        "name": "Nuveen Large-Cap Value Fund Class R3",
        "price": 23.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NNGRX",
        "name": "Nuveen Large-Cap Value Fund Class I",
        "price": 23.59,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DAMDX",
        "name": "Dunham Monthly Distribution Fund Class A",
        "price": 33.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NNGAX",
        "name": "Nuveen Large-Cap Value Fund Class A",
        "price": 23.49,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRIUX",
        "name": "T. Rowe Price International Stock Fund I Class",
        "price": 18.56,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "IFPUX",
        "name": "Independent Franchise Partners US Equity Fund",
        "price": 19.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSMVX",
        "name": "Fidelity Mid Cap Value Fund",
        "price": 22.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FMPOX",
        "name": "Fidelity Advisor Mid Cap Value Fund Class I",
        "price": 22.62,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "THOIX",
        "name": "Thornburg Global Opportunities Fund Class I",
        "price": 31.94,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MBEYX",
        "name": "AMG Chicago Equity Partners Balanced Fund Class Z",
        "price": 17.66,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DCMDX",
        "name": "Dunham Monthly Distribution Fund Class C",
        "price": 25.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DNMDX",
        "name": "Dunham Monthly Distribution Fund Class N",
        "price": 34.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AVUAX",
        "name": "American Century Mid Cap Value Fund I Class",
        "price": 17.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AMVRX",
        "name": "American Century Mid Cap Value Fund R Class",
        "price": 17.15,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ACCLX",
        "name": "American Century Mid Cap Value Fund C Class",
        "price": 16.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LVAEX",
        "name": "LSV Value Equity Fund Investor Class",
        "price": 26.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LCRIX",
        "name": "Leuthold Core Investment Fund Class Institutional",
        "price": 19.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VAIPX",
        "name": "Vanguard Inflation-Protected Securities Fund Admiral Shares",
        "price": 26.41,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SAOSX",
        "name": "Guggenheim Alpha Opportunity Fund Class P",
        "price": 16.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SSIRX",
        "name": "Sierra Tactical Core Income Fund Institutional Class",
        "price": 21.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RRTBX",
        "name": "T. Rowe Price Retirement 2020 Fund Class R",
        "price": 22.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PARBX",
        "name": "T. Rowe Price Retirement 2020 Fund Advisor Class",
        "price": 22.41,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRRBX",
        "name": "T. Rowe Price Retirement 2020 Fund",
        "price": 22.59,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIOTX",
        "name": "Fidelity Advisor Managed Retirement 2005 Fund Class M",
        "price": 58.72,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FNORX",
        "name": "Fidelity Nordic Fund",
        "price": 49.02,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GILPX",
        "name": "Guggenheim Limited Duration Fund Class P",
        "price": 24.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GMODX",
        "name": "GMO Opportunistic Income Fund Class VI",
        "price": 26.02,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PKSAX",
        "name": "Virtus KAR Small-Cap Core Fund Class A",
        "price": 40.48,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RRMVX",
        "name": "T. Rowe Price Mid-Cap Value Fund R Class",
        "price": 27.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PKSFX",
        "name": "Virtus KAR Small-Cap Core Fund Class I",
        "price": 42.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VSCRX",
        "name": "Virtus KAR Small-Cap Core Fund Class R6",
        "price": 43.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TAMVX",
        "name": "T. Rowe Price Mid-Cap Value Fund Advisor Class",
        "price": 27.97,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRMIX",
        "name": "T. Rowe Price Mid-Cap Value Fund I Class",
        "price": 28.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRMCX",
        "name": "T. Rowe Price Mid-Cap Value Fund",
        "price": 28.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FRNCX",
        "name": "Fidelity Advisor Simplicity RMD Income Fund Class C",
        "price": 58.17,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CUBAX",
        "name": "Calvert Absolute Return Bond Fund Class A",
        "price": 15.23,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TSSCX",
        "name": "Thornburg Strategic Municipal Income Fund Class C",
        "price": 15.54,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FDLSX",
        "name": "Fidelity Select Leisure Portfolio",
        "price": 16.21,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AADBX",
        "name": "American Beacon Balanced Fund Institutional Class",
        "price": 15.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PKSCX",
        "name": "Virtus KAR Small-Cap Core Fund Class C",
        "price": 33.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BPGIX",
        "name": "Boston Partners Global Equity Institutional Class",
        "price": 17.1,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NPSFX",
        "name": "Nuveen Preferred Securities & Income Fund Class R6",
        "price": 17.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FFFEX",
        "name": "Fidelity Freedom 2030 Fund",
        "price": 18.11,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RRTAX",
        "name": "T. Rowe Price Retirement 2010 Fund Class R",
        "price": 18.19,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PARAX",
        "name": "T. Rowe Price Retirement 2010 Fund Advisor Class",
        "price": 18.3,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SUSYX",
        "name": "SEI Institutional Managed Trust U.S. Managed Volatility Fund Class Y",
        "price": 18.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JIBBX",
        "name": "JPMorgan SmartRetirement Blend Income Fund Class R5",
        "price": 18.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JIJSX",
        "name": "JPMorgan SmartRetirement Blend Income Fund Class I",
        "price": 18.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRRAX",
        "name": "T. Rowe Price Retirement 2010 Fund",
        "price": 18.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NFRFX",
        "name": "Nuveen Symphony Floating Rate Income Fund Class R6",
        "price": 19.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSBCX",
        "name": "Federated Global Allocation Fund Class C Shares",
        "price": 19.72,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSBKX",
        "name": "Federated Global Allocation Fund Class R Shares",
        "price": 20.18,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSTBX",
        "name": "Federated Global Allocation Fund Class A Shares",
        "price": 20.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRSIX",
        "name": "T. Rowe Price Personal Strategy Income Fund",
        "price": 20.39,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SBFIX",
        "name": "Federated Global Allocation Fund Institutional Shares",
        "price": 20.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYHHX",
        "name": "Rydex High Yield Strategy Fund Class C",
        "price": 21.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "IPFPX",
        "name": "Poplar Forest Partners Fund Institutional Class",
        "price": 43.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PFPFX",
        "name": "Poplar Forest Partners Fund Class A",
        "price": 43.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "KWICX",
        "name": "Kinetics Alternative Income Fund Advisor Class C",
        "price": 93.62,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "KWIAX",
        "name": "Kinetics Alternative Income Fund Advisor Class A",
        "price": 97.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GILDX",
        "name": "Guggenheim Limited Duration Fund A-Class",
        "price": 24.7,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYHGX",
        "name": "Rydex High Yield Strategy Fund Class H",
        "price": 25.02,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYHDX",
        "name": "Rydex High Yield Strategy Fund Class A",
        "price": 25.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GIFCX",
        "name": "Guggenheim Floating Rate Strategies Fund Class C",
        "price": 25.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GIFAX",
        "name": "Guggenheim Floating Rate Strategies Fund Class A",
        "price": 25.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GIFPX",
        "name": "Guggenheim Floating Rate Strategies Fund Class P",
        "price": 25.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GIFIX",
        "name": "Guggenheim Floating Rate Strategies Fund Institutional Class",
        "price": 25.35,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GIOCX",
        "name": "Guggenheim Macro Opportunities Fund Class C",
        "price": 25.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GIOAX",
        "name": "Guggenheim Macro Opportunities Fund Class A",
        "price": 25.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GIOPX",
        "name": "Guggenheim Macro Opportunities Fund Class P",
        "price": 25.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GIOIX",
        "name": "Guggenheim Macro Opportunities Fund Institutional Class",
        "price": 25.79,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MIOPX",
        "name": "Morgan Stanley Institutional Fund, Inc. International Opportunity Portfolio Class A",
        "price": 26.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIIVX",
        "name": "Fidelity Advisor Managed Retirement 2020 Fund Class I",
        "price": 53.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FARVX",
        "name": "Fidelity Advisor Managed Retirement 2020 Fund Class A",
        "price": 53.37,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BTTTX",
        "name": "American Century Zero Coupon 2020 Fund Investor Class",
        "price": 107.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIRVX",
        "name": "Fidelity Managed Retirement 2020 Fund",
        "price": 53.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIRSX",
        "name": "Fidelity Managed Retirement 2015 Fund",
        "price": 54.84,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NFFCX",
        "name": "Nuveen Symphony Floating Rate Income Fund Class C",
        "price": 19.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NFRIX",
        "name": "Nuveen Symphony Floating Rate Income Fund Class I",
        "price": 19.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NCOIX",
        "name": "Nuveen Symphony High Yield Income Fund Class I",
        "price": 20.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NFRAX",
        "name": "Nuveen Symphony Floating Rate Income Fund Class A",
        "price": 19.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ACTEX",
        "name": "American Century Zero Coupon 2020 Fund Advisor Class",
        "price": 101.86,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FRQIX",
        "name": "Fidelity Advisor Managed Retirement 2010 Fund Class I",
        "price": 57.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIRRX",
        "name": "Fidelity Simplicity RMD 2010 Fund",
        "price": 54.94,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SEGPX",
        "name": "Guggenheim Large Cap Value Fund Class P",
        "price": 43.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CBMSX",
        "name": "Wells Fargo C&B Mid Cap Value Fund - Class Inst",
        "price": 42.29,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VEVRX",
        "name": "Victory Sycamore Established Value Fund Class R6",
        "price": 40.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VEVIX",
        "name": "Victory Sycamore Established Value Fund Class I",
        "price": 40.52,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIROX",
        "name": "Fidelity Managed Retirement 2005 Fund",
        "price": 60.09,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIOAX",
        "name": "Fidelity Advisor Managed Retirement 2005 Fund Class A",
        "price": 60.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIOIX",
        "name": "Fidelity Advisor Managed Retirement 2005 Fund Class I",
        "price": 60.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FRIMX",
        "name": "Fidelity Advisor Managed Retirement Income Fund Class I",
        "price": 59.23,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIRMX",
        "name": "Fidelity Managed Retirement Income Fund",
        "price": 59.23,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIXIX",
        "name": "Fidelity Advisor International Small Cap Fund Class I",
        "price": 27.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FISMX",
        "name": "Fidelity International Small Cap Fund",
        "price": 27.1,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIASX",
        "name": "Fidelity Advisor International Small Cap Fund Class A",
        "price": 26.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTISX",
        "name": "Fidelity Advisor International Small Cap Fund Class M",
        "price": 26.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GIBIX",
        "name": "Guggenheim Total Return Bond Fund Institutional Class",
        "price": 27.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GIBCX",
        "name": "Guggenheim Total Return Bond Fund Class C",
        "price": 27.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GIBLX",
        "name": "Guggenheim Total Return Bond Fund Class P",
        "price": 27.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FICSX",
        "name": "Fidelity Advisor International Small Cap Fund Class C",
        "price": 25.7,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PTIAX",
        "name": "Performance Trust Strategic Bond Fund",
        "price": 23.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NQWFX",
        "name": "Nuveen NWQ Flexible Income Fund Class R6",
        "price": 22.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NWQIX",
        "name": "Nuveen NWQ Flexible Income Fund Class I",
        "price": 22.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NWQAX",
        "name": "Nuveen NWQ Flexible Income Fund Class A",
        "price": 22.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NWQCX",
        "name": "Nuveen NWQ Flexible Income Fund Class C",
        "price": 22.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GILCX",
        "name": "Guggenheim Large Cap Value Fund Class Institutional",
        "price": 43.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VSCGX",
        "name": "Vanguard LifeStrategy Conservative Growth Fund Investor Shares",
        "price": 21.52,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FGADX",
        "name": "Franklin Gold and Precious Metals Fund Advisor Class",
        "price": 20.84,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ITTIX",
        "name": "Hartford Multi-Asset Income and Growth Fund Class I",
        "price": 20.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MAPOX",
        "name": "Mairs & Power Balanced Fund Investor Class",
        "price": 101.42,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIRNX",
        "name": "Fidelity Simplicity RMD Income Fund",
        "price": 59.95,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MTINX",
        "name": "MainStay Income Builder Fund Investor Class",
        "price": 19.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MTXVX",
        "name": "MainStay Income Builder Fund Class R3",
        "price": 19.94,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GETGX",
        "name": "Victory Sycamore Established Value Fund Class R",
        "price": 39.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VEVCX",
        "name": "Victory Sycamore Established Value Fund Class C",
        "price": 39.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SIUPX",
        "name": "Guggenheim Investment Grade Bond Fund Class P",
        "price": 19.08,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SIUSX",
        "name": "Guggenheim Investment Grade Bond Fund Class A",
        "price": 19.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GIUSX",
        "name": "Guggenheim Investment Grade Bond Fund Institutional Class",
        "price": 19.04,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SDICX",
        "name": "Guggenheim Investment Grade Bond Fund Class C",
        "price": 18.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QGRNX",
        "name": "Invesco Oppenheimer Global Allocation Fund Class R",
        "price": 18.64,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SEVIX",
        "name": "SEI Institutional Managed Trust U.S. Managed Volatility Fund Class I",
        "price": 18.35,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "QGRCX",
        "name": "Invesco Oppenheimer Global Allocation Fund Class C",
        "price": 18.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CFAIX",
        "name": "Calvert Conservative Allocation Fund Class I",
        "price": 18.04,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CCLAX",
        "name": "Calvert Conservative Allocation Fund Class A",
        "price": 18.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SBFCX",
        "name": "Victory INCORE Investment Grade Convertible Fund Class A",
        "price": 17.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HAOYX",
        "name": "The Hartford International Opportunities Fund Class Y",
        "price": 17.42,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "IVWAX",
        "name": "IVA Worldwide Fund Class A",
        "price": 16.35,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VGIVX",
        "name": "Vanguard Emerging Markets Government Bond Index Fund Institutional Shares",
        "price": 33.41,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JBFRX",
        "name": "John Hancock Bond Fund Class R4",
        "price": 16.45,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JHNBX",
        "name": "John Hancock Bond Fund Class A",
        "price": 16.42,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CDICX",
        "name": "Calvert Short Duration Income Fund Class C",
        "price": 16.18,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DAINX",
        "name": "Dunham International Stock Fund Class A",
        "price": 15.64,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JMBRX",
        "name": "JPMorgan SmartRetirement Blend 2045 Fund Class R5",
        "price": 25.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JMYAX",
        "name": "JPMorgan SmartRetirement Blend 2045 Fund Class R6",
        "price": 25.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTSDX",
        "name": "Fidelity Advisor Strategic Dividend & Income Fund Class M",
        "price": 15.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FASDX",
        "name": "Fidelity Advisor Strategic Dividend & Income Fund Class A",
        "price": 15.76,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSIDX",
        "name": "Fidelity Advisor Strategic Dividend & Income Fund I Class",
        "price": 15.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSDIX",
        "name": "Fidelity Strategic Dividend & Income Fund",
        "price": 15.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYPDX",
        "name": "Rydex Consumer Products Fund Class A",
        "price": 58.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ABLOX",
        "name": "Alger Balanced Portfolio Class I-2",
        "price": 16.13,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SIIEX",
        "name": "Touchstone International Equity Fund Class Y",
        "price": 15.35,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYCPX",
        "name": "Rydex Consumer Products Fund Class C",
        "price": 48.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SWRLX",
        "name": "Touchstone International Equity Fund Class A",
        "price": 15.59,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SLVIX",
        "name": "Columbia Select Large Cap Value Fund Institutional 2 Class",
        "price": 27.09,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "EGOAX",
        "name": "Wells Fargo Large Cap Core Fund - Class A",
        "price": 17.01,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "EGOHX",
        "name": "Wells Fargo Large Cap Core Fund - Class R",
        "price": 17.02,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WFLLX",
        "name": "Wells Fargo Large Cap Core Fund - Class Admin",
        "price": 17.27,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BIECX",
        "name": "Brandes International Equity Fund Class C",
        "price": 16.16,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "WPLCX",
        "name": "WP Large Cap Income Plus Fund Institutional Class",
        "price": 17.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HCYAX",
        "name": "Hilton Tactical Income Fund Investor Class",
        "price": 18.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HCYIX",
        "name": "Hilton Tactical Income Fund Institutional Class",
        "price": 18.08,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCRSX",
        "name": "Fidelity Advisor Managed Retirement 2015 Fund Class C",
        "price": 53.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JOBBX",
        "name": "JPMorgan SmartRetirement Blend 2040 Fund Class R5",
        "price": 25.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "OMOIX",
        "name": "Vivaldi Multi-Strategy Fund Class I",
        "price": 25.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LOGBX",
        "name": "Scharf Multi-Asset Opportunity Fund Retail Class",
        "price": 34.28,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FDIGX",
        "name": "Fidelity Advisor Consumer Staples Fund I Class",
        "price": 89.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FDFAX",
        "name": "Fidelity Select Consumer Staples Portfolio",
        "price": 89.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FPACX",
        "name": "FPA Crescent Fund",
        "price": 34.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ITTAX",
        "name": "Hartford Multi-Asset Income and Growth Fund Class A",
        "price": 20.83,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "IHAYX",
        "name": "Hartford Multi-Asset Income and Growth Fund Class Y",
        "price": 21.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FDCGX",
        "name": "Fidelity Advisor Consumer Staples Fund Class C",
        "price": 86.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FGFRX",
        "name": "Federated International Leaders Fund Class R",
        "price": 34.83,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FGRSX",
        "name": "Federated International Leaders Fund Class R6 Shares",
        "price": 34.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FGFAX",
        "name": "Federated International Leaders Fund Class A Shares",
        "price": 35.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSPSX",
        "name": "Fidelity International Index Fund",
        "price": 42.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SSIZX",
        "name": "Sierra Tactical Core Income Fund Class A",
        "price": 21.97,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CYYYX",
        "name": "Columbia Thermostat Fund Institutional 3 Class",
        "price": 15.3,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CTORX",
        "name": "Columbia Thermostat Fund Advisor Class",
        "price": 15.3,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RSMRX",
        "name": "RBC SMID Cap Growth Fund Class R6",
        "price": 15.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCSDX",
        "name": "Fidelity Advisor Strategic Dividend & Income Fund Class C",
        "price": 15.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JRBYX",
        "name": "JPMorgan SmartRetirement Blend 2030 Fund Class R6",
        "price": 23.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JPBRX",
        "name": "JPMorgan SmartRetirement Blend 2035 Fund Class R5",
        "price": 24.67,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JPYRX",
        "name": "JPMorgan SmartRetirement Blend 2035 Fund Class R6",
        "price": 24.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LKBAX",
        "name": "LKCM Balanced Fund",
        "price": 24.9,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PALRX",
        "name": "PGIM Balanced Fund- Class R",
        "price": 16.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JDVAX",
        "name": "JPMorgan Diversified Fund Class A",
        "price": 16.62,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CDSIX",
        "name": "Calvert Short Duration Income Fund Class I",
        "price": 16.35,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JPDVX",
        "name": "JPMorgan Diversified Fund Class L",
        "price": 16.7,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JDVSX",
        "name": "JPMorgan Diversified Fund Class I",
        "price": 16.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GILHX",
        "name": "Guggenheim Limited Duration Fund Institutional Class",
        "price": 24.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VWENX",
        "name": "Vanguard Wellington Fund Admiral Shares",
        "price": 76.91,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PTIMX",
        "name": "Performance Trust Municipal Bond Fund - Institutional Class",
        "price": 25.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PTRMX",
        "name": "Performance Trust Municipal Bond Fund - A Class",
        "price": 25.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FJSCX",
        "name": "Fidelity Japan Smaller Companies Fund",
        "price": 15.75,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "OMOAX",
        "name": "Vivaldi Multi-Strategy Fund Class A",
        "price": 25.43,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VWELX",
        "name": "Vanguard Wellington Fund Investor Shares",
        "price": 44.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PARJX",
        "name": "T. Rowe Price Retirement 2025 Fund Advisor Class",
        "price": 18.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRRHX",
        "name": "T. Rowe Price Retirement 2025 Fund",
        "price": 18.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DHLSX",
        "name": "Diamond Hill Long Short Fund Class I",
        "price": 26.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DIAYX",
        "name": "Diamond Hill Long-Short Fund Class Y",
        "price": 26.83,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FFTMX",
        "name": "Fidelity Advisor Asset Manager 50% Fund Class M",
        "price": 19.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PPIPX",
        "name": "T. Rowe Price Personal Strategy Income Fund I Class",
        "price": 20.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BSPIX",
        "name": "iShares S&P 500 Index Fund Institutional Shares",
        "price": 400.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MRAGX",
        "name": "Meridian Growth Fund A Class",
        "price": 37.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BSPAX",
        "name": "iShares S&P 500 Index Fund Investor A Shares",
        "price": 400.24,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MSGCX",
        "name": "Meridian Small Cap Growth Fund Class C",
        "price": 15.03,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MIJFX",
        "name": "Matthews Japan Fund Institutional Class",
        "price": 20.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LISIX",
        "name": "Lazard International Strategic Equity Portfolio Institutional Shares",
        "price": 15.42,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SMMOX",
        "name": "Western Asset Managed Municipals Fund Class 1",
        "price": 16.67,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SHMMX",
        "name": "Western Asset Managed Municipals Fund Class A",
        "price": 16.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SMMCX",
        "name": "Western Asset Managed Municipals Fund Class C",
        "price": 16.74,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FLCSX",
        "name": "Fidelity Large Cap Stock Fund",
        "price": 33.95,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FLCCX",
        "name": "Fidelity Advisor Large Cap Fund Class C",
        "price": 27.7,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FALAX",
        "name": "Fidelity Advisor Large Cap Fund Class A",
        "price": 31.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRWCX",
        "name": "T. Rowe Price Capital Appreciation Fund",
        "price": 32.43,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TRAIX",
        "name": "T. Rowe Price Capital Appreciation Fund I Class",
        "price": 32.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MJFOX",
        "name": "Matthews Japan Fund Investor Class",
        "price": 20.18,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NHCCX",
        "name": "Nuveen High Yield Municipal Bond Fund Class C",
        "price": 18.54,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NHMCX",
        "name": "Nuveen High Yield Municipal Bond Fund Class C2",
        "price": 18.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NHMAX",
        "name": "Nuveen High Yield Municipal Bond Fund Class A",
        "price": 18.56,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NHMRX",
        "name": "Nuveen High Yield Municipal Bond Fund Class I",
        "price": 18.56,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NHMFX",
        "name": "Nuveen High Yield Municipal Bond Fund Class R6",
        "price": 18.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIDLX",
        "name": "Fidelity Advisor Large Cap Fund Class Z",
        "price": 33.17,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FALIX",
        "name": "Fidelity Advisor Large Cap Fund I Class",
        "price": 33.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FETKX",
        "name": "Fidelity Equity Dividend Income Fund Class K",
        "price": 25.72,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FVDKX",
        "name": "Fidelity Value Discovery Fund Class K",
        "price": 30.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PACLX",
        "name": "T. Rowe Price Capital Appreciation Fund Advisor Class",
        "price": 32.07,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MSGAX",
        "name": "Meridian Small Cap Growth Fund A Class",
        "price": 15.53,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MSGGX",
        "name": "Meridian Small Cap Growth Fund Legacy Class",
        "price": 15.92,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MSGRX",
        "name": "Meridian Small Cap Growth Fund Institutional Class",
        "price": 15.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NRIAX",
        "name": "Nuveen Real Asset Income Fund Class A",
        "price": 25.37,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NRIIX",
        "name": "Nuveen Real Asset Income Fund Class I",
        "price": 25.37,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NRICX",
        "name": "Nuveen Real Asset Income Fund Class C",
        "price": 25.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NRIFX",
        "name": "Nuveen Real Asset Income Fund Class R6",
        "price": 25.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JHQCX",
        "name": "JPMorgan Hedged Equity Fund Class C",
        "price": 21.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LEVIX",
        "name": "Lazard US Equity Concentrated Portfolio Institutional Shares",
        "price": 17.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LEVOX",
        "name": "Lazard US Equity Concentrated Portfolio Open Shares",
        "price": 17.78,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JHQPX",
        "name": "JPMorgan Hedged Equity Fund Class R5",
        "price": 21.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JHQRX",
        "name": "JPMorgan Hedged Equity Fund Class R6",
        "price": 22.0,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTRVX",
        "name": "Fidelity Advisor Managed Retirement 2020 Fund Class M",
        "price": 51.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BIEAX",
        "name": "Brandes International Equity Fund A",
        "price": 16.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BIIEX",
        "name": "Brandes International Equity Fund Class I",
        "price": 16.54,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "USBLX",
        "name": "USAA Growth and Tax Strategy Fund",
        "price": 22.64,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MXXVX",
        "name": "Matthew 25 Fund",
        "price": 32.95,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GMOKX",
        "name": "GMO Risk Premium Fund Class VI",
        "price": 28.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BVEFX",
        "name": "Becker Value Equity Fund Retail Class",
        "price": 18.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BVEIX",
        "name": "Becker Value Equity Fund Institutional Class",
        "price": 18.55,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GMRPX",
        "name": "GMO Risk Premium Fund Class III",
        "price": 28.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FAMFX",
        "name": "FAM Small Cap Fund Investor Class",
        "price": 18.64,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYCIX",
        "name": "Rydex Consumer Products Fund Class Investor",
        "price": 64.46,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VTMFX",
        "name": "Vanguard Tax-Managed Balanced Fund Admiral Shares",
        "price": 35.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JOBEX",
        "name": "JPMorgan SmartRetirement Blend 2040 Fund Class I",
        "price": 25.29,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VGENX",
        "name": "Vanguard Energy Fund Investor Shares",
        "price": 44.35,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VGELX",
        "name": "Vanguard Energy Fund Admiral Shares",
        "price": 83.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FANIX",
        "name": "Fidelity Advisor Energy Fund I Class",
        "price": 26.06,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FAGNX",
        "name": "Fidelity Advisor Energy Fund Class M",
        "price": 25.36,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSENX",
        "name": "Fidelity Select Energy Portfolio",
        "price": 31.96,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "RYOIX",
        "name": "Rydex Biotechnology Fund Class Investor",
        "price": 84.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "PRHSX",
        "name": "T. Rowe Price Health Sciences Fund",
        "price": 84.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "THISX",
        "name": "T. Rowe Price Health Sciences Fund I Class",
        "price": 84.51,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JFNSX",
        "name": "Janus Henderson Global Life Sciences Fund Class S",
        "price": 60.3,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JAGLX",
        "name": "Janus Henderson Global Life Sciences Fund Class T",
        "price": 62.22,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JNGLX",
        "name": "Janus Henderson Global Life Sciences Fund Class D",
        "price": 62.52,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JFNIX",
        "name": "Janus Henderson Global Life Sciences Fund Class I",
        "price": 62.63,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JFNAX",
        "name": "Janus Henderson Global Life Sciences Fund Class A",
        "price": 61.41,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JFNCX",
        "name": "Janus Henderson Global Life Sciences Fund Class C",
        "price": 55.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FBTTX",
        "name": "Fidelity Advisor Biotechnology Fund Class M",
        "price": 26.99,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FBTAX",
        "name": "Fidelity Advisor Biotechnology Fund Class A",
        "price": 28.77,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DDDAX",
        "name": "13D Activist Fund Class A",
        "price": 22.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DDDIX",
        "name": "13D Activist Fund Class I",
        "price": 22.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DDDCX",
        "name": "13D Activist Fund Class C",
        "price": 21.71,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ADKSX",
        "name": "Adirondack Small Cap Fund",
        "price": 17.25,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GMDZX",
        "name": "GuideStone Funds Medium-Duration Bond Fund Investor Class",
        "price": 15.39,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MRIGX",
        "name": "Meridian Growth Fund Investor Class",
        "price": 38.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCRVX",
        "name": null,
        "price": 50.93,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FURCX",
        "name": null,
        "price": 58.73,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CLFFX",
        "name": "Clifford Capital Partners Fund Investor Class",
        "price": 15.05,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HBLRX",
        "name": "The Hartford Balanced Income Fund Class R3",
        "price": 15.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FFTHX",
        "name": "Fidelity Freedom 2035 Fund",
        "price": 15.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HBLTX",
        "name": "The Hartford Balanced Income Fund Class R5",
        "price": 15.35,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HBLVX",
        "name": "The Hartford Balanced Income Fund Class R6",
        "price": 15.44,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MTILX",
        "name": "Morgan Stanley Institutional Fund, Inc. Global Infrastructure Portfolio Class L",
        "price": 16.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JLVZX",
        "name": "JPMorgan Large Cap Value Fund Class R2",
        "price": 15.49,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "BDSCX",
        "name": "BlackRock Advantage Small Cap Core Fund Investor C Shares",
        "price": 15.5,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "LMIYX",
        "name": "Lord Abbett Micro Cap Growth Fund Class I",
        "price": 17.2,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "OLVAX",
        "name": "JPMorgan Large Cap Value Fund Class A",
        "price": 15.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DCINX",
        "name": "Dunham International Stock Fund Class C",
        "price": 14.81,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MSGTX",
        "name": "Morgan Stanley Institutional Fund, Inc. Global Infrastructure Portfolio Class C",
        "price": 15.89,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HILRX",
        "name": "Hartford International Value Fund Class R3",
        "price": 13.86,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SWFCX",
        "name": "Touchstone International Equity Fund Class C",
        "price": 14.6,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "HLQVX",
        "name": "JPMorgan Large Cap Value Fund Class I",
        "price": 15.37,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "DRNYX",
        "name": "BNY Mellon New York Tax Exempt Bond Fund, Inc.",
        "price": 15.25,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FNMIX",
        "name": "Fidelity New Markets Income Fund",
        "price": 15.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "JLVMX",
        "name": "JPMorgan Large Cap Value Fund Class R6",
        "price": 15.43,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "AMCCX",
        "name": "American Beacon Mid-Cap Value Fund C Class",
        "price": 15.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "VMRGX",
        "name": null,
        "price": 27.82,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FRAPX",
        "name": null,
        "price": 58.31,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SFECX",
        "name": "Guggenheim StylePlus - Large Core Fund Class C",
        "price": 15.84,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NSEPX",
        "name": "Columbia Select Large Cap Equity Fund Institutional Class",
        "price": 16.12,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "EIPIX",
        "name": "EIP Growth and Income Fund Class I",
        "price": 16.19,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "EIPFX",
        "name": "EIP Growth and Income Fund Investor Class",
        "price": 16.16,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NSGAX",
        "name": "Columbia Select Large Cap Equity Fund Class A",
        "price": 16.26,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "USMCX",
        "name": "Natixis ASG Tactical U.S. Market Fund Class C",
        "price": 16.65,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCRFX",
        "name": null,
        "price": 52.44,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FARPX",
        "name": "Fidelity Advisor Simplicity RMD 2005 Fund Class A",
        "price": 58.34,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FURAX",
        "name": null,
        "price": 59.69,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIOCX",
        "name": null,
        "price": 58.4,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FRNTX",
        "name": null,
        "price": 58.58,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIARX",
        "name": null,
        "price": 53.67,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FURIX",
        "name": null,
        "price": 59.77,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FITTX",
        "name": null,
        "price": 53.19,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FIIRX",
        "name": null,
        "price": 53.68,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FCRWX",
        "name": null,
        "price": 59.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FARWX",
        "name": null,
        "price": 60.29,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FRNIX",
        "name": null,
        "price": 58.61,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "ILLLX",
        "name": "Transamerica Capital Growth Fund Class C",
        "price": 23.35,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GEDIX",
        "name": null,
        "price": 22.37,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GSMJX",
        "name": null,
        "price": 31.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTRSX",
        "name": null,
        "price": 53.42,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "GEDFX",
        "name": null,
        "price": 23.709,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTRWX",
        "name": null,
        "price": 60.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FSIMX",
        "name": null,
        "price": 23.57,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FRNAX",
        "name": null,
        "price": 58.59,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "FTIRX",
        "name": null,
        "price": 53.7,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CBECX",
        "name": "Wells Fargo C&B Large Cap Value Fund - Class C",
        "price": 14.32,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "STARX",
        "name": "Astor Sector Allocation Fund Class I",
        "price": 15.33,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TDEYX",
        "name": "Touchstone Dynamic Equity Fund Class Y",
        "price": 13.87,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "SSIYX",
        "name": null,
        "price": 21.38,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "COTZX",
        "name": "Columbia Thermostat Fund Institutional Class",
        "price": 15.21,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "MCMVX",
        "name": "Monongahela All Cap Value Fund",
        "price": 15.21,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "NCVLX",
        "name": "Nuance Concentrated Value Fund Institutional Class",
        "price": 14.49,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CBLSX",
        "name": "Wells Fargo C&B Large Cap Value Fund - Class Inst",
        "price": 14.49,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TDELX",
        "name": "Touchstone Dynamic Equity Fund Institutional Class",
        "price": 14.04,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "CBLLX",
        "name": "Wells Fargo C&B Large Cap Value Fund - Class Admin",
        "price": 14.47,
        "exchange": "Nasdaq"
    },
    {
        "symbol": "TDEAX",
        "name": "Touchstone Dynamic Equity Fund Class A",
        "price": 13.71,
        "exchange": "Nasdaq"
    }
]

export default stocks