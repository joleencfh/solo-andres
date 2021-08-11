export const defaultMainContext: MainContextType = {
  userState: {} as UserType,
  setUserState: () => {},
  authentication: false,
  setAuthentication: () => {},
};

export const defaultAuthContext: AuthContextType = {
  emailState: '',
  setEmailState: (e: string) => {},
  passwordState: '',
  setPasswordState: (e: string) => {},
  firstNameState: '',
  setFirstNameState: () => {},
  lastNameState: '',
  setLastNameState: () => {},
};

type ExpirationType = {
  symbol: string;
  description: string;
  bid: number;
  ask: number;
  strike: number;
  contract_size: number;
  expiration_date: string;
  option_type: string;
};

export type CompanyType = {
  _id: string;
  symbol: string;
  description: string;
  chain: {
    expiration1: [ExpirationType];
    expiration2: [ExpirationType];
  };
};
// const defaultUserState: UserType = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   password: '',
//   balance: defaultBalance,
//   watchlist: defaultWatchlist,
//   portfolio: defaultPortfolio,
// }

// const defaultBalance = {
//     type: 0,
//     default: 0,
// }

// const defaultWatchlist = {

// }

// const defaultPortfolio = {

// }
// const defaultBalanceState:
// export type OptionChainType = {
//     company: <Companytype>;
//     setSelectedview:
// }

export type BalanceType = {
  type: number | string;
  default: number | string;
};

export type WatchlistType = {
  symbol: string;
  description: string;
};

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  balance: BalanceType;
  watchlist: WatchlistType;
  portfolio: PortfolioType;
};

export type PortfolioType = {
  symbol: string; // long symbol
  description: string;
  option_type: string;
  contract_size: number;
  bid: number;
  ask: number;
  buy_price: number; // equal to ask at the time you bought
  strike: number;
  expiration_date: string;
};

export type MainContextType = {
  userState: UserType;
  setUserState: React.Dispatch<React.SetStateAction<UserType | undefined>>;
  authentication: boolean;
  setAuthentication: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AuthContextType = {
  emailState: string;
  setEmailState: (e: string) => void;
  passwordState: string;
  setPasswordState: (e: string) => void;
  firstNameState: string;
  setFirstNameState: () => void;
  lastNameState: string;
  setLastNameState: () => void;
};
