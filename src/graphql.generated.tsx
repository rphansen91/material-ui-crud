import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** Mongo Object Id */
  ObjectId: any;
};

export type FirebaseUser = {
  __typename?: 'FirebaseUser';
  uid: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  permissions?: Maybe<Permissions>;
};

export type Permissions = {
  __typename?: 'Permissions';
  uid: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<FirebaseUser>;
  userById?: Maybe<FirebaseUser>;
  userByEmail?: Maybe<FirebaseUser>;
  about?: Maybe<About>;
  backgroundLocations?: Maybe<BackgroundLocationPage>;
  backgroundRegions?: Maybe<BackgroundRegionPage>;
  getCategories?: Maybe<Array<PlaidCategory>>;
  getInstitutions?: Maybe<PlaidInstitutionsResponse>;
  getPublicToken?: Maybe<PlaidAccessToken>;
  getAccessToken?: Maybe<PlaidAccessToken>;
  getAccessTokens?: Maybe<Array<Maybe<PlaidAccessToken>>>;
  getAuth?: Maybe<PlaidAccountsResponse>;
  getIdentity?: Maybe<PlaidIdentityResponse>;
  getBalance?: Maybe<PlaidAccountsResponse>;
  getAccounts?: Maybe<PlaidAccountsResponse>;
  getHoldings?: Maybe<PlaidHoldingsResponse>;
  getTransactions?: Maybe<PlaidTransactionsResponse>;
  getCachedTransactions?: Maybe<PlaidTransactionsResponse>;
  getInvestmentTransactions?: Maybe<PlaidInvestmentTransactionResponse>;
  verifiableTransactionsPage?: Maybe<VerifiableTransactionsResponse>;
  verifiableTransactionsPageAdmin?: Maybe<VerifiableTransactionsResponseAdmin>;
  verifyTransactionLocation?: Maybe<TransactionLocationVerification>;
  verifyTransactionsLocation?: Maybe<Array<Maybe<TransactionLocationVerification>>>;
  prime?: Maybe<Scalars['Float']>;
  fibonacci?: Maybe<Scalars['Float']>;
  settings?: Maybe<UserSettings>;
  cardUserByDeviceId?: Maybe<CardUserDevice>;
  cardUserById?: Maybe<CardUser>;
  cardUserList?: Maybe<CardUserListResult>;
  getSubscriptionHistory?: Maybe<InAppSubscriptionPage>;
  getSubscriptionErrorHistory?: Maybe<InAppSubscriptionErrorPage>;
  verifyReceiptIOS?: Maybe<IosVerifyReceipt>;
  verifyReceiptAndroid?: Maybe<AndroidVerifyReceipt>;
};


export type QueryUserByIdArgs = {
  id: Scalars['String'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};


export type QueryBackgroundLocationsArgs = {
  filter?: Maybe<BackgroundLocationFilter>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
};


export type QueryBackgroundRegionsArgs = {
  filter?: Maybe<BackgroundRegionFilter>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
};


export type QueryGetInstitutionsArgs = {
  count?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryGetPublicTokenArgs = {
  accessToken: Scalars['String'];
};


export type QueryGetAccessTokenArgs = {
  publicToken: Scalars['String'];
};


export type QueryGetAuthArgs = {
  accessToken: Scalars['String'];
};


export type QueryGetIdentityArgs = {
  accessToken: Scalars['String'];
};


export type QueryGetBalanceArgs = {
  accessToken: Scalars['String'];
};


export type QueryGetAccountsArgs = {
  accessToken: Scalars['String'];
};


export type QueryGetHoldingsArgs = {
  accessToken: Scalars['String'];
};


export type QueryGetTransactionsArgs = {
  accessToken: Scalars['String'];
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type QueryGetCachedTransactionsArgs = {
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type QueryGetInvestmentTransactionsArgs = {
  accessToken: Scalars['String'];
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type QueryVerifiableTransactionsPageArgs = {
  type?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
  filter?: Maybe<VerifiableTransactionsFilter>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
};


export type QueryVerifiableTransactionsPageAdminArgs = {
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
  filter?: Maybe<VerifiableTransactionsFilter>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
};


export type QueryVerifyTransactionLocationArgs = {
  transaction_id: Scalars['String'];
};


export type QueryVerifyTransactionsLocationArgs = {
  transaction_ids: Array<Scalars['String']>;
};


export type QueryPrimeArgs = {
  n?: Maybe<Scalars['Int']>;
};


export type QueryFibonacciArgs = {
  n?: Maybe<Scalars['Int']>;
};


export type QueryCardUserByDeviceIdArgs = {
  deviceId: Scalars['String'];
};


export type QueryCardUserByIdArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryCardUserListArgs = {
  searchText?: Maybe<Scalars['String']>;
  filter?: Maybe<CardUserFilter>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
};


export type QueryGetSubscriptionHistoryArgs = {
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
};


export type QueryGetSubscriptionErrorHistoryArgs = {
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
};


export type QueryVerifyReceiptIosArgs = {
  receipt: Scalars['String'];
};


export type QueryVerifyReceiptAndroidArgs = {
  receipt: Scalars['String'];
};

export type About = {
  __typename?: 'About';
  name?: Maybe<Scalars['String']>;
  git?: Maybe<Git>;
};

export type Git = {
  __typename?: 'Git';
  sha?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Pagination = {
  perPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type Sort = {
  field?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};



export type IntFilter = {
  EQ?: Maybe<Scalars['Int']>;
  GT?: Maybe<Scalars['Int']>;
  GTE?: Maybe<Scalars['Int']>;
  IN?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ALL?: Maybe<Array<Maybe<Scalars['Int']>>>;
  LT?: Maybe<Scalars['Int']>;
  LTE?: Maybe<Scalars['Int']>;
  NE?: Maybe<Scalars['Int']>;
  NIN?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FloatFilter = {
  EQ?: Maybe<Scalars['Float']>;
  GT?: Maybe<Scalars['Float']>;
  GTE?: Maybe<Scalars['Float']>;
  IN?: Maybe<Array<Maybe<Scalars['Float']>>>;
  ALL?: Maybe<Array<Maybe<Scalars['Float']>>>;
  LT?: Maybe<Scalars['Float']>;
  LTE?: Maybe<Scalars['Float']>;
  NE?: Maybe<Scalars['Float']>;
  NIN?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type StringFilter = {
  EQ?: Maybe<Scalars['String']>;
  GT?: Maybe<Scalars['String']>;
  GTE?: Maybe<Scalars['String']>;
  IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  ALL?: Maybe<Array<Maybe<Scalars['String']>>>;
  LT?: Maybe<Scalars['String']>;
  LTE?: Maybe<Scalars['String']>;
  NE?: Maybe<Scalars['String']>;
  NIN?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DateFilter = {
  EQ?: Maybe<Scalars['Date']>;
  GT?: Maybe<Scalars['Date']>;
  GTE?: Maybe<Scalars['Date']>;
  IN?: Maybe<Array<Maybe<Scalars['Date']>>>;
  ALL?: Maybe<Array<Maybe<Scalars['Date']>>>;
  LT?: Maybe<Scalars['Date']>;
  LTE?: Maybe<Scalars['Date']>;
  NE?: Maybe<Scalars['Date']>;
  NIN?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type ObjectIdFilter = {
  EQ?: Maybe<Scalars['ObjectId']>;
  GT?: Maybe<Scalars['ObjectId']>;
  GTE?: Maybe<Scalars['ObjectId']>;
  IN?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  ALL?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  LT?: Maybe<Scalars['ObjectId']>;
  LTE?: Maybe<Scalars['ObjectId']>;
  NE?: Maybe<Scalars['ObjectId']>;
  NIN?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export type BackgroundLocation = {
  __typename?: 'BackgroundLocation';
  _id?: Maybe<Scalars['ObjectId']>;
  uid?: Maybe<Scalars['String']>;
  accuracy?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  altitude?: Maybe<Scalars['Float']>;
  altitudeAccuracy?: Maybe<Scalars['Float']>;
  heading?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  yyyymmddhh?: Maybe<Scalars['Int']>;
  yyyymmdd?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  platform?: Maybe<Scalars['String']>;
  os?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
  deviceId?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  referrer?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
};

export type BackgroundRegion = {
  __typename?: 'BackgroundRegion';
  _id?: Maybe<Scalars['ObjectId']>;
  uid?: Maybe<Scalars['String']>;
  accuracy?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  altitude?: Maybe<Scalars['Float']>;
  altitudeAccuracy?: Maybe<Scalars['Float']>;
  heading?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  regionIdentifier?: Maybe<Scalars['String']>;
  regionLatitude?: Maybe<Scalars['Float']>;
  regionLongitude?: Maybe<Scalars['Float']>;
  regionRadius?: Maybe<Scalars['Float']>;
  regionState?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['Float']>;
  yyyymmddhh?: Maybe<Scalars['Int']>;
  yyyymmdd?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['Date']>;
  os?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
  deviceId?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  referrer?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
};

export type BackgroundLocationPage = {
  __typename?: 'BackgroundLocationPage';
  total: Scalars['Int'];
  data?: Maybe<Array<Maybe<BackgroundLocation>>>;
};

export type BackgroundRegionPage = {
  __typename?: 'BackgroundRegionPage';
  total: Scalars['Int'];
  data?: Maybe<Array<Maybe<BackgroundRegion>>>;
};

export type BackgroundLocationFilter = {
  date?: Maybe<DateFilter>;
  timestamp?: Maybe<FloatFilter>;
  yyyymmddhh?: Maybe<IntFilter>;
  yyyymmdd?: Maybe<IntFilter>;
  latitude?: Maybe<FloatFilter>;
  longitude?: Maybe<FloatFilter>;
};

export type BackgroundLocationInput = {
  accuracy?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  altitude?: Maybe<Scalars['Float']>;
  altitudeAccuracy?: Maybe<Scalars['Float']>;
  heading?: Maybe<Scalars['Float']>;
  speed?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['Float']>;
  platform?: Maybe<Scalars['String']>;
};

export type BackgroundRegionFilter = {
  date?: Maybe<DateFilter>;
  timestamp?: Maybe<FloatFilter>;
  yyyymmddhh?: Maybe<IntFilter>;
  yyyymmdd?: Maybe<IntFilter>;
  latitude?: Maybe<FloatFilter>;
  longitude?: Maybe<FloatFilter>;
  regionLatitude?: Maybe<FloatFilter>;
  regionLongitude?: Maybe<FloatFilter>;
};

export type BackgroundRegionInput = {
  identifier?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  radius?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  locationPing?: Maybe<Scalars['Boolean']>;
  regionPing?: Maybe<Scalars['Boolean']>;
  subscribeToPush?: Maybe<Scalars['Boolean']>;
  sendVerificationNotifications?: Maybe<Array<Maybe<ExpoPushTokenReceipt>>>;
  setAccountHidden?: Maybe<PlaidAccount>;
  setAccessToken?: Maybe<PlaidAccessToken>;
  createPublicToken?: Maybe<PlaidAccessToken>;
  updateWebhook?: Maybe<PlaidAccessToken>;
  resetLogin?: Maybe<PlaidAccessToken>;
  classifyTransaction?: Maybe<ClassifyTransactionResult>;
  setTransactionVerificationStatus?: Maybe<PlaidTransaction>;
  updateSettings?: Maybe<UserSettings>;
  setDeviceHidden?: Maybe<CardUserDevice>;
  getOrCreateUser?: Maybe<CardUserResult>;
  saveUpdatedPurchaseReceipt?: Maybe<InAppSubscription>;
  savePurchaseError?: Maybe<InAppSubscriptionError>;
};


export type MutationLocationPingArgs = {
  locations: Array<BackgroundLocationInput>;
  userInfo?: Maybe<CardUserInfoInput>;
};


export type MutationRegionPingArgs = {
  region: BackgroundRegionInput;
  location: BackgroundLocationInput;
  userInfo?: Maybe<CardUserInfoInput>;
};


export type MutationSubscribeToPushArgs = {
  token: Scalars['String'];
  userInfo?: Maybe<CardUserInfoInput>;
  os?: Maybe<Scalars['String']>;
};


export type MutationSendVerificationNotificationsArgs = {
  transactionIds: Array<Scalars['String']>;
};


export type MutationSetAccountHiddenArgs = {
  account_id: Scalars['String'];
  hidden: Scalars['Boolean'];
};


export type MutationSetAccessTokenArgs = {
  publicToken: Scalars['String'];
};


export type MutationCreatePublicTokenArgs = {
  accessToken: Scalars['String'];
};


export type MutationUpdateWebhookArgs = {
  accessToken: Scalars['String'];
  webhook: Scalars['String'];
};


export type MutationResetLoginArgs = {
  accessToken: Scalars['String'];
};


export type MutationClassifyTransactionArgs = {
  transaction_id: Scalars['String'];
  hourDelta?: Maybe<Scalars['Int']>;
  dayDelta?: Maybe<Scalars['Int']>;
  latDelta?: Maybe<Scalars['Float']>;
  lonDelta?: Maybe<Scalars['Float']>;
};


export type MutationSetTransactionVerificationStatusArgs = {
  transaction_id: Scalars['String'];
  verification_status?: Maybe<TransactionVerificationStatus>;
};


export type MutationUpdateSettingsArgs = {
  settings: UserSettingsInput;
};


export type MutationSetDeviceHiddenArgs = {
  id: Scalars['ObjectId'];
  hidden: Scalars['Boolean'];
};


export type MutationGetOrCreateUserArgs = {
  userId: Scalars['String'];
  userInfo?: Maybe<CardUserInfoInput>;
};


export type MutationSaveUpdatedPurchaseReceiptArgs = {
  subscription: InAppSubscriptionInput;
  userInfo?: Maybe<CardUserInfoInput>;
};


export type MutationSavePurchaseErrorArgs = {
  error: InAppSubscriptionErrorInput;
  userInfo?: Maybe<CardUserInfoInput>;
};

export type ExpoPushToken = {
  __typename?: 'ExpoPushToken';
  _id?: Maybe<Scalars['ObjectId']>;
  userId?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  os?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  deviceId?: Maybe<Scalars['String']>;
};

export type ExpoPushTokenReceiptDetails = {
  __typename?: 'ExpoPushTokenReceiptDetails';
  error?: Maybe<Scalars['String']>;
};

export type FirebaseError = {
  __typename?: 'FirebaseError';
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type MessagingDeviceResult = {
  __typename?: 'MessagingDeviceResult';
  canonicalRegistrationToken?: Maybe<Scalars['String']>;
  messageId?: Maybe<Scalars['String']>;
  error?: Maybe<FirebaseError>;
};

export type ExpoPushTokenReceiptPayload = {
  __typename?: 'ExpoPushTokenReceiptPayload';
  verify_transaction_id?: Maybe<Scalars['String']>;
};

export type ExpoPushTokenReceipt = {
  __typename?: 'ExpoPushTokenReceipt';
  _id?: Maybe<Scalars['ObjectId']>;
  userId?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  notificationType?: Maybe<Scalars['String']>;
  ticketId?: Maybe<Scalars['String']>;
  canonicalRegistrationTokenCount?: Maybe<Scalars['Int']>;
  multicastId?: Maybe<Scalars['Float']>;
  successCount?: Maybe<Scalars['Int']>;
  failureCount?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  payloadData?: Maybe<ExpoPushTokenReceiptPayload>;
  results?: Maybe<Array<Maybe<MessagingDeviceResult>>>;
  details?: Maybe<ExpoPushTokenReceiptDetails>;
};

export type PlaidAccessToken = {
  __typename?: 'PlaidAccessToken';
  _id?: Maybe<Scalars['ObjectId']>;
  userId?: Maybe<Scalars['String']>;
  publicToken?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  itemId?: Maybe<Scalars['String']>;
  env?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  item?: Maybe<PlaidItem>;
  status?: Maybe<PlaidItemStatus>;
  institution_id?: Maybe<Scalars['String']>;
  institution?: Maybe<PlaidInstitution>;
};

export type PlaidTransactionLocation = {
  __typename?: 'PlaidTransactionLocation';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
  region?: Maybe<Scalars['String']>;
  store_number?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
};

export type PlaidTransactionPaymentMeta = {
  __typename?: 'PlaidTransactionPaymentMeta';
  by_order_of?: Maybe<Scalars['String']>;
  payee?: Maybe<Scalars['String']>;
  payer?: Maybe<Scalars['String']>;
  payment_method?: Maybe<Scalars['String']>;
  payment_processor?: Maybe<Scalars['String']>;
  ppd_id?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  reference_number?: Maybe<Scalars['String']>;
};

export type PlaidTransaction = {
  __typename?: 'PlaidTransaction';
  _id?: Maybe<Scalars['ObjectId']>;
  userId?: Maybe<Scalars['String']>;
  env?: Maybe<Scalars['String']>;
  last_sync?: Maybe<Scalars['Date']>;
  created_date?: Maybe<Scalars['Date']>;
  updated_date?: Maybe<Scalars['Date']>;
  verification_date?: Maybe<Scalars['Date']>;
  verification_status?: Maybe<TransactionVerificationStatus>;
  verification_reason?: Maybe<Scalars['String']>;
  verification_by?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['String']>;
  account_id?: Maybe<Scalars['String']>;
  account_owner?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  iso_currency_code?: Maybe<Scalars['String']>;
  unofficial_currency_code?: Maybe<Scalars['String']>;
  category?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  location?: Maybe<PlaidTransactionLocation>;
  name?: Maybe<Scalars['String']>;
  payment_meta?: Maybe<PlaidTransactionPaymentMeta>;
  pending?: Maybe<Scalars['Boolean']>;
  pending_transaction_id?: Maybe<Scalars['String']>;
  transaction_type?: Maybe<Scalars['String']>;
};

export type PlaidInvestmentTransaction = {
  __typename?: 'PlaidInvestmentTransaction';
  investment_transaction_id?: Maybe<Scalars['String']>;
  account_id?: Maybe<Scalars['String']>;
  security_id?: Maybe<Scalars['String']>;
  cancel_transaction_id?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
  iso_currency_code?: Maybe<Scalars['String']>;
  unofficial_currency_code?: Maybe<Scalars['String']>;
};

export type PlaidSecurity = {
  __typename?: 'PlaidSecurity';
  security_id?: Maybe<Scalars['String']>;
  cusip?: Maybe<Scalars['String']>;
  sedol?: Maybe<Scalars['String']>;
  isin?: Maybe<Scalars['String']>;
  institution_security_id?: Maybe<Scalars['String']>;
  institution_id?: Maybe<Scalars['String']>;
  proxy_security_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ticker_symbol?: Maybe<Scalars['String']>;
  is_cash_equivalent?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  close_price?: Maybe<Scalars['Float']>;
  close_price_as_of?: Maybe<Scalars['String']>;
  iso_currency_code?: Maybe<Scalars['String']>;
  unofficial_currency_code?: Maybe<Scalars['String']>;
};

export type PlaidCredential = {
  __typename?: 'PlaidCredential';
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type PlaidInstitution = {
  __typename?: 'PlaidInstitution';
  name?: Maybe<Scalars['String']>;
  institution_id?: Maybe<Scalars['String']>;
  country_codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  credentials?: Maybe<Array<Maybe<PlaidCredential>>>;
  has_mfa?: Maybe<Scalars['Boolean']>;
  mfa?: Maybe<Array<Maybe<Scalars['String']>>>;
  products?: Maybe<Array<Maybe<Scalars['String']>>>;
  routing_numbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  oauth?: Maybe<Scalars['Boolean']>;
  status?: Maybe<PlaidInstitutionStatus>;
  primary_color?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  created_date?: Maybe<Scalars['Date']>;
  updated_date?: Maybe<Scalars['Date']>;
};

export type PlaidInstitutionStatus = {
  __typename?: 'PlaidInstitutionStatus';
  item_logins?: Maybe<PlaidInstitutionServiceStatus>;
  transactions_updates?: Maybe<PlaidInstitutionServiceStatus>;
  auth?: Maybe<PlaidInstitutionServiceStatus>;
  balance?: Maybe<PlaidInstitutionServiceStatus>;
  identity?: Maybe<PlaidInstitutionServiceStatus>;
};

export type PlaidInstitutionServiceStatus = {
  __typename?: 'PlaidInstitutionServiceStatus';
  status?: Maybe<Scalars['String']>;
  last_status_change?: Maybe<Scalars['Date']>;
  breakdown?: Maybe<PlaidInstitutionServiceStatusBreakDown>;
};

export type PlaidInstitutionServiceStatusBreakDown = {
  __typename?: 'PlaidInstitutionServiceStatusBreakDown';
  success?: Maybe<Scalars['Float']>;
  error_plaid?: Maybe<Scalars['Float']>;
  error_institution?: Maybe<Scalars['Float']>;
};

export type PlaidInvestmentsResponse = {
  __typename?: 'PlaidInvestmentsResponse';
  accounts?: Maybe<Array<Maybe<PlaidAccount>>>;
  securities?: Maybe<Array<Maybe<PlaidSecurity>>>;
  item?: Maybe<PlaidItem>;
};

export type PlaidAddressData = {
  __typename?: 'PlaidAddressData';
  city?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
};

export type PlaidAddress = {
  __typename?: 'PlaidAddress';
  data?: Maybe<PlaidAddressData>;
  primary?: Maybe<Scalars['Boolean']>;
};

export type PlaidEmail = {
  __typename?: 'PlaidEmail';
  data?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
};

export type PlaidPhoneNumber = {
  __typename?: 'PlaidPhoneNumber';
  data?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
};

export type PlaidIdentity = {
  __typename?: 'PlaidIdentity';
  addresses?: Maybe<Array<Maybe<PlaidAddress>>>;
  emails?: Maybe<Array<Maybe<PlaidEmail>>>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_numbers?: Maybe<Array<Maybe<PlaidPhoneNumber>>>;
};

export type PlaidIdentityResponse = {
  __typename?: 'PlaidIdentityResponse';
  accounts?: Maybe<Array<Maybe<PlaidAccountWithOwners>>>;
  item?: Maybe<PlaidItem>;
};

export enum VerificationStatus {
  PendingAutomaticVerification = 'pending_automatic_verification',
  PendingManualVerification = 'pending_manual_verification',
  ManuallyVerified = 'manually_verified',
  AutomaticallyVerified = 'automatically_verified'
}

export type PlaidAccountBalance = {
  __typename?: 'PlaidAccountBalance';
  available?: Maybe<Scalars['Float']>;
  current?: Maybe<Scalars['Float']>;
  limit?: Maybe<Scalars['Float']>;
  iso_currency_code?: Maybe<Scalars['String']>;
  unofficial_currency_code?: Maybe<Scalars['String']>;
};

export type PlaidAccount = {
  __typename?: 'PlaidAccount';
  _id?: Maybe<Scalars['ObjectId']>;
  userId?: Maybe<Scalars['String']>;
  env?: Maybe<Scalars['String']>;
  last_sync?: Maybe<Scalars['Date']>;
  created_date?: Maybe<Scalars['Date']>;
  updated_date?: Maybe<Scalars['Date']>;
  transactions_ready?: Maybe<Scalars['Boolean']>;
  item_id?: Maybe<Scalars['String']>;
  institution_id?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
  account_id?: Maybe<Scalars['String']>;
  mask?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  official_name?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  verification_status?: Maybe<Scalars['String']>;
  balances?: Maybe<PlaidAccountBalance>;
};

export type PlaidAccountWithOwners = {
  __typename?: 'PlaidAccountWithOwners';
  account_id?: Maybe<Scalars['String']>;
  mask?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  official_name?: Maybe<Scalars['String']>;
  subtype?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  verification_status?: Maybe<Scalars['String']>;
  balances?: Maybe<PlaidAccountBalance>;
  owners?: Maybe<Array<Maybe<PlaidIdentity>>>;
};

export type PlaidAccountsResponse = {
  __typename?: 'PlaidAccountsResponse';
  accounts?: Maybe<Array<Maybe<PlaidAccount>>>;
  item?: Maybe<PlaidItem>;
};

export type PlaidHolding = {
  __typename?: 'PlaidHolding';
  account_id?: Maybe<Scalars['String']>;
  security_id?: Maybe<Scalars['String']>;
  institution_value?: Maybe<Scalars['Float']>;
  institution_price?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  institution_price_as_of?: Maybe<Scalars['String']>;
  cost_basis?: Maybe<Scalars['Float']>;
  iso_currency_code?: Maybe<Scalars['String']>;
  unofficial_currency_code?: Maybe<Scalars['String']>;
};

export type PlaidHoldingsResponse = {
  __typename?: 'PlaidHoldingsResponse';
  securities?: Maybe<Array<Maybe<PlaidSecurity>>>;
  holdings?: Maybe<Array<Maybe<PlaidHolding>>>;
};

export type PlaidItem = {
  __typename?: 'PlaidItem';
  _id?: Maybe<Scalars['ObjectId']>;
  userId?: Maybe<Scalars['String']>;
  env?: Maybe<Scalars['String']>;
  created_date?: Maybe<Scalars['Date']>;
  updated_date?: Maybe<Scalars['Date']>;
  item_id?: Maybe<Scalars['String']>;
  institution_id?: Maybe<Scalars['String']>;
  available_products?: Maybe<Array<Maybe<Scalars['String']>>>;
  billed_products?: Maybe<Array<Maybe<Scalars['String']>>>;
  error?: Maybe<PlaidError>;
  webhook?: Maybe<Scalars['String']>;
  consent_expiration_time?: Maybe<Scalars['Date']>;
  institution?: Maybe<PlaidInstitution>;
};

export type PlaidItemStatus = {
  __typename?: 'PlaidItemStatus';
  transactions?: Maybe<PlaidTransactionsStatus>;
  last_webhook?: Maybe<PlaidWebhookStatus>;
};

export type PlaidTransactionsStatus = {
  __typename?: 'PlaidTransactionsStatus';
  last_successful_update?: Maybe<Scalars['String']>;
  last_failed_update?: Maybe<Scalars['String']>;
};

export type PlaidWebhookStatus = {
  __typename?: 'PlaidWebhookStatus';
  sent_at?: Maybe<Scalars['String']>;
  code_sent?: Maybe<Scalars['String']>;
};

export type PlaidTransactionsResponse = {
  __typename?: 'PlaidTransactionsResponse';
  accounts?: Maybe<Array<Maybe<PlaidAccount>>>;
  total_transactions?: Maybe<Scalars['Int']>;
  transactions?: Maybe<Array<Maybe<PlaidTransaction>>>;
  item?: Maybe<PlaidItem>;
};

export type PlaidInvestmentTransactionResponse = {
  __typename?: 'PlaidInvestmentTransactionResponse';
  accounts?: Maybe<Array<Maybe<PlaidAccount>>>;
  securities?: Maybe<Array<Maybe<PlaidSecurity>>>;
  item?: Maybe<PlaidItem>;
  investment_transactions?: Maybe<Array<Maybe<PlaidInvestmentTransaction>>>;
  total_investment_transactions?: Maybe<Scalars['Int']>;
};

export type Cause = {
  __typename?: 'Cause';
  error_type?: Maybe<Scalars['String']>;
  error_code?: Maybe<Scalars['String']>;
  error_message?: Maybe<Scalars['String']>;
  display_message?: Maybe<Scalars['String']>;
  item_id?: Maybe<Scalars['String']>;
};

export type PlaidError = {
  __typename?: 'PlaidError';
  error_type?: Maybe<Scalars['String']>;
  error_code?: Maybe<Scalars['String']>;
  error_message?: Maybe<Scalars['String']>;
  display_message?: Maybe<Scalars['String']>;
  causes?: Maybe<Array<Maybe<Cause>>>;
};

export type PlaidCategory = {
  __typename?: 'PlaidCategory';
  group?: Maybe<Scalars['String']>;
  hierarchy?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_id?: Maybe<Scalars['String']>;
};

export type PlaidInstitutionsResponse = {
  __typename?: 'PlaidInstitutionsResponse';
  total?: Maybe<Scalars['Int']>;
  institutions?: Maybe<Array<PlaidInstitution>>;
};

export enum TransactionVerificationStatus {
  Verified = 'VERIFIED',
  Undetermined = 'UNDETERMINED',
  Falsified = 'FALSIFIED'
}

export type TransactionLocationVerification = {
  __typename?: 'TransactionLocationVerification';
  transaction_id?: Maybe<Scalars['String']>;
  transaction?: Maybe<PlaidTransaction>;
  account?: Maybe<PlaidAccount>;
  institution?: Maybe<PlaidInstitution>;
  near?: Maybe<BackgroundLocationPage>;
  during?: Maybe<BackgroundLocationPage>;
  activity?: Maybe<TransactionActivityPage>;
};


export type TransactionLocationVerificationNearArgs = {
  hourDelta?: Maybe<Scalars['Int']>;
  dayDelta?: Maybe<Scalars['Int']>;
  latDelta?: Maybe<Scalars['Float']>;
  lonDelta?: Maybe<Scalars['Float']>;
  filter?: Maybe<BackgroundLocationFilter>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
};


export type TransactionLocationVerificationDuringArgs = {
  hourDelta?: Maybe<Scalars['Int']>;
  dayDelta?: Maybe<Scalars['Int']>;
  filter?: Maybe<BackgroundLocationFilter>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
};


export type TransactionLocationVerificationActivityArgs = {
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
};

export type BooleanUpdate = {
  __typename?: 'BooleanUpdate';
  previous?: Maybe<Scalars['Boolean']>;
  current?: Maybe<Scalars['Boolean']>;
};

export type StringUpdate = {
  __typename?: 'StringUpdate';
  previous?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type IntUpdate = {
  __typename?: 'IntUpdate';
  previous?: Maybe<Scalars['Int']>;
  current?: Maybe<Scalars['Int']>;
};

export type FloatUpdate = {
  __typename?: 'FloatUpdate';
  previous?: Maybe<Scalars['Float']>;
  current?: Maybe<Scalars['Float']>;
};

export type AccountActivity = {
  __typename?: 'AccountActivity';
  _id?: Maybe<Scalars['ObjectId']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  account_id?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['String']>;
  created_date?: Maybe<Scalars['Date']>;
  hidden?: Maybe<BooleanUpdate>;
};

export type TransactionActivity = {
  __typename?: 'TransactionActivity';
  _id?: Maybe<Scalars['ObjectId']>;
  type?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['String']>;
  pending_transaction_id?: Maybe<StringUpdate>;
  verification_status?: Maybe<StringUpdate>;
  verification_reason?: Maybe<StringUpdate>;
  verification_by?: Maybe<StringUpdate>;
  created_by?: Maybe<Scalars['String']>;
  created_date?: Maybe<Scalars['Date']>;
};

export type TransactionActivityPage = {
  __typename?: 'TransactionActivityPage';
  total?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<TransactionActivity>>>;
};

export type VerifiableTransactionsFilter = {
  name?: Maybe<StringFilter>;
  amount?: Maybe<IntFilter>;
  verification_status?: Maybe<StringFilter>;
  startDate?: Maybe<DateFilter>;
  endDate?: Maybe<DateFilter>;
};

export type VerifiableTransactionsResponse = {
  __typename?: 'VerifiableTransactionsResponse';
  total_transactions?: Maybe<Scalars['Int']>;
  transactions?: Maybe<Array<Maybe<PlaidTransaction>>>;
  accounts?: Maybe<Array<Maybe<PlaidAccount>>>;
};

export type VerifiableTransactionsResponseAdmin = {
  __typename?: 'VerifiableTransactionsResponseAdmin';
  total_transactions?: Maybe<Scalars['Int']>;
  transactions?: Maybe<Array<Maybe<PlaidTransaction>>>;
  accounts?: Maybe<Array<Maybe<PlaidAccount>>>;
  institutions?: Maybe<Array<Maybe<PlaidInstitution>>>;
  cardUsers?: Maybe<Array<Maybe<CardUser>>>;
};

export type ClassifyTransactionResult = {
  __typename?: 'ClassifyTransactionResult';
  transaction_id?: Maybe<Scalars['String']>;
  transaction?: Maybe<PlaidTransaction>;
  account?: Maybe<PlaidAccount>;
  institution?: Maybe<PlaidInstitution>;
  nearCount?: Maybe<Scalars['Int']>;
  undeterminedCount?: Maybe<Scalars['Int']>;
  duringCount?: Maybe<Scalars['Int']>;
  previousValue?: Maybe<TransactionVerificationStatus>;
  updatedValue?: Maybe<TransactionVerificationStatus>;
  previousReason?: Maybe<Scalars['String']>;
  updatedReason?: Maybe<Scalars['String']>;
};

export type Cpu = {
  __typename?: 'CPU';
  value?: Maybe<Scalars['Float']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  cpuUsage?: Maybe<Cpu>;
};

export type UserSettings = {
  __typename?: 'UserSettings';
  userId?: Maybe<Scalars['String']>;
  billing_status?: Maybe<Scalars['String']>;
  notifications_email?: Maybe<Scalars['Boolean']>;
  notifications_push?: Maybe<Scalars['Boolean']>;
  notifications_filter?: Maybe<NotificationsFilter>;
  created_date?: Maybe<Scalars['Date']>;
  updated_date?: Maybe<Scalars['Date']>;
};

export type NotificationsFilter = {
  __typename?: 'NotificationsFilter';
  falsified?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  undetermined?: Maybe<Scalars['Boolean']>;
  pending?: Maybe<Scalars['Boolean']>;
};

export type NotificationsFilterInput = {
  falsified?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  undetermined?: Maybe<Scalars['Boolean']>;
  pending?: Maybe<Scalars['Boolean']>;
};

export type UserSettingsInput = {
  notifications_email?: Maybe<Scalars['Boolean']>;
  notifications_push?: Maybe<Scalars['Boolean']>;
  notifications_filter?: Maybe<NotificationsFilterInput>;
};

export type CardUserDevice = {
  __typename?: 'CardUserDevice';
  _id?: Maybe<Scalars['ObjectId']>;
  os?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
  deviceId?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  referrer?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  hidden?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
};

export type UserConfig = {
  __typename?: 'UserConfig';
  plaidEnv?: Maybe<Scalars['String']>;
  activeSubscription?: Maybe<Scalars['String']>;
  activeSubscriptionInTrial?: Maybe<Scalars['Boolean']>;
  plaidLinkUnavailable?: Maybe<Scalars['Boolean']>;
  maxTrialInstitutions?: Maybe<Scalars['Int']>;
  maxInstitutions?: Maybe<Scalars['Int']>;
};

export type CardUser = {
  __typename?: 'CardUser';
  _id?: Maybe<Scalars['ObjectId']>;
  os?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
  deviceId?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  referrer?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  config?: Maybe<UserConfig>;
  settings?: Maybe<UserSettings>;
  getAccessTokens?: Maybe<Array<Maybe<PlaidAccessToken>>>;
  getCachedTransactions?: Maybe<PlaidTransactionsResponse>;
  getSubscriptionHistory?: Maybe<InAppSubscriptionPage>;
  getSubscriptionErrorHistory?: Maybe<InAppSubscriptionErrorPage>;
  backgroundLocations?: Maybe<BackgroundLocationPage>;
  devices?: Maybe<CardUserDevicePage>;
};


export type CardUserGetCachedTransactionsArgs = {
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
};


export type CardUserGetSubscriptionHistoryArgs = {
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
};


export type CardUserGetSubscriptionErrorHistoryArgs = {
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
};


export type CardUserBackgroundLocationsArgs = {
  filter?: Maybe<BackgroundLocationFilter>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
};


export type CardUserDevicesArgs = {
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
};

export type CardUserDevicePage = {
  __typename?: 'CardUserDevicePage';
  total?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<CardUserDevice>>>;
};

export type CardUserFilter = {
  deviceId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type CardUserInfoInput = {
  os?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
  deviceId?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  referrer?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
};

export type CardUserListResult = {
  __typename?: 'CardUserListResult';
  total?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<CardUser>>;
};

export type CardUserResult = {
  __typename?: 'CardUserResult';
  created?: Maybe<Scalars['Boolean']>;
  cardUser?: Maybe<CardUser>;
};

export type InAppSubscription = {
  __typename?: 'InAppSubscription';
  _id?: Maybe<Scalars['ObjectId']>;
  os?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
  deviceId?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  referrer?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
  transactionDate?: Maybe<Scalars['Date']>;
  transactionReceipt?: Maybe<Scalars['String']>;
  purchaseToken?: Maybe<Scalars['String']>;
  dataAndroid?: Maybe<Scalars['String']>;
  signatureAndroid?: Maybe<Scalars['String']>;
  autoRenewingAndroid?: Maybe<Scalars['Boolean']>;
  purchaseStateAndroid?: Maybe<Scalars['Int']>;
  originalTransactionDateIOS?: Maybe<Scalars['Date']>;
  originalTransactionIdentifierIOS?: Maybe<Scalars['String']>;
  isAcknowledgedAndroid?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  isTrialPeriod?: Maybe<Scalars['Boolean']>;
};

export type InAppSubscriptionError = {
  __typename?: 'InAppSubscriptionError';
  _id?: Maybe<Scalars['ObjectId']>;
  os?: Maybe<Scalars['String']>;
  device?: Maybe<Scalars['String']>;
  deviceId?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
  referrer?: Maybe<Scalars['String']>;
  ip?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  responseCode?: Maybe<Scalars['Int']>;
  debugMessage?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type InAppSubscriptionInput = {
  productId?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
  transactionDate?: Maybe<Scalars['Date']>;
  transactionReceipt?: Maybe<Scalars['String']>;
  purchaseToken?: Maybe<Scalars['String']>;
  dataAndroid?: Maybe<Scalars['String']>;
  signatureAndroid?: Maybe<Scalars['String']>;
  autoRenewingAndroid?: Maybe<Scalars['Boolean']>;
  purchaseStateAndroid?: Maybe<Scalars['Int']>;
  originalTransactionDateIOS?: Maybe<Scalars['Date']>;
  originalTransactionIdentifierIOS?: Maybe<Scalars['String']>;
  isAcknowledgedAndroid?: Maybe<Scalars['Boolean']>;
};

export type InAppSubscriptionErrorInput = {
  responseCode?: Maybe<Scalars['Int']>;
  debugMessage?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type IosReceipt = {
  __typename?: 'IosReceipt';
  receipt_type?: Maybe<Scalars['String']>;
  adam_id?: Maybe<Scalars['Int']>;
  app_item_id?: Maybe<Scalars['Int']>;
  bundle_id?: Maybe<Scalars['String']>;
  application_version?: Maybe<Scalars['String']>;
  download_id?: Maybe<Scalars['Int']>;
  version_external_identifier?: Maybe<Scalars['Int']>;
  receipt_creation_date?: Maybe<Scalars['String']>;
  receipt_creation_date_ms?: Maybe<Scalars['String']>;
  receipt_creation_date_pst?: Maybe<Scalars['String']>;
  request_date?: Maybe<Scalars['String']>;
  request_date_ms?: Maybe<Scalars['String']>;
  request_date_pst?: Maybe<Scalars['String']>;
  original_purchase_date?: Maybe<Scalars['String']>;
  original_purchase_date_ms?: Maybe<Scalars['String']>;
  original_purchase_date_pst?: Maybe<Scalars['String']>;
  original_application_version?: Maybe<Scalars['String']>;
};

export type IosLatestReceiptInfo = {
  __typename?: 'IosLatestReceiptInfo';
  quantity?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['String']>;
  transaction_id?: Maybe<Scalars['String']>;
  original_transaction_id?: Maybe<Scalars['String']>;
  purchase_date?: Maybe<Scalars['String']>;
  purchase_date_ms?: Maybe<Scalars['String']>;
  purchase_date_pst?: Maybe<Scalars['String']>;
  original_purchase_date?: Maybe<Scalars['String']>;
  original_purchase_date_ms?: Maybe<Scalars['String']>;
  original_purchase_date_pst?: Maybe<Scalars['String']>;
  expires_date?: Maybe<Scalars['String']>;
  expires_date_ms?: Maybe<Scalars['String']>;
  expires_date_pst?: Maybe<Scalars['String']>;
  web_order_line_item_id?: Maybe<Scalars['String']>;
  is_trial_period?: Maybe<Scalars['String']>;
  is_in_intro_offer_period?: Maybe<Scalars['String']>;
  subscription_group_identifier?: Maybe<Scalars['String']>;
};

export type IosPendingRenewalInfo = {
  __typename?: 'IosPendingRenewalInfo';
  expiration_intent?: Maybe<Scalars['String']>;
  auto_renew_product_id?: Maybe<Scalars['String']>;
  original_transaction_id?: Maybe<Scalars['String']>;
  is_in_billing_retry_period?: Maybe<Scalars['String']>;
  product_id?: Maybe<Scalars['String']>;
  auto_renew_status?: Maybe<Scalars['String']>;
};

export type IosVerifyReceipt = {
  __typename?: 'IosVerifyReceipt';
  status?: Maybe<Scalars['Int']>;
  environment?: Maybe<Scalars['String']>;
  receipt?: Maybe<IosReceipt>;
  pending_renewal_info?: Maybe<Array<Maybe<IosPendingRenewalInfo>>>;
  latest_receipt_info?: Maybe<Array<Maybe<IosLatestReceiptInfo>>>;
};

export type AndroidVerifyReceipt = {
  __typename?: 'AndroidVerifyReceipt';
  status?: Maybe<Scalars['Int']>;
  environment?: Maybe<Scalars['String']>;
};

export type InAppSubscriptionPage = {
  __typename?: 'InAppSubscriptionPage';
  total?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<InAppSubscription>>>;
};

export type InAppSubscriptionErrorPage = {
  __typename?: 'InAppSubscriptionErrorPage';
  total?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<InAppSubscriptionError>>>;
};

export type PlaidAccessTokenFragment = (
  { __typename?: 'PlaidAccessToken' }
  & Pick<PlaidAccessToken, 'publicToken' | 'accessToken' | 'itemId' | 'date' | 'env'>
);

export type PlaidAccountFragment = (
  { __typename?: 'PlaidAccount' }
  & Pick<PlaidAccount, 'account_id' | 'mask' | 'name' | 'official_name' | 'subtype' | 'hidden' | 'type' | 'verification_status'>
  & { balances?: Maybe<(
    { __typename?: 'PlaidAccountBalance' }
    & Pick<PlaidAccountBalance, 'available' | 'current' | 'limit' | 'iso_currency_code' | 'unofficial_currency_code'>
  )> }
);

export type AccountActivityFragment = (
  { __typename?: 'AccountActivity' }
  & Pick<AccountActivity, '_id' | 'type' | 'userId' | 'account_id' | 'created_by' | 'created_date'>
);

export type PlaidAccountWithOwnersFragment = (
  { __typename?: 'PlaidAccountWithOwners' }
  & Pick<PlaidAccountWithOwners, 'account_id' | 'mask' | 'name' | 'official_name' | 'subtype' | 'type' | 'verification_status'>
  & { balances?: Maybe<(
    { __typename?: 'PlaidAccountBalance' }
    & Pick<PlaidAccountBalance, 'available' | 'current' | 'limit' | 'iso_currency_code' | 'unofficial_currency_code'>
  )>, owners?: Maybe<Array<Maybe<(
    { __typename?: 'PlaidIdentity' }
    & Pick<PlaidIdentity, 'names'>
    & { addresses?: Maybe<Array<Maybe<(
      { __typename?: 'PlaidAddress' }
      & Pick<PlaidAddress, 'primary'>
      & { data?: Maybe<(
        { __typename?: 'PlaidAddressData' }
        & Pick<PlaidAddressData, 'city' | 'region' | 'postal_code' | 'street' | 'country'>
      )> }
    )>>>, emails?: Maybe<Array<Maybe<(
      { __typename?: 'PlaidEmail' }
      & Pick<PlaidEmail, 'data' | 'primary' | 'type'>
    )>>>, phone_numbers?: Maybe<Array<Maybe<(
      { __typename?: 'PlaidPhoneNumber' }
      & Pick<PlaidPhoneNumber, 'data' | 'primary' | 'type'>
    )>>> }
  )>>> }
);

export type UserConfigFragment = (
  { __typename?: 'UserConfig' }
  & Pick<UserConfig, 'plaidEnv' | 'activeSubscription' | 'activeSubscriptionInTrial' | 'plaidLinkUnavailable' | 'maxTrialInstitutions' | 'maxInstitutions'>
);

export type CardUserDeviceFragment = (
  { __typename?: 'CardUserDevice' }
  & Pick<CardUserDevice, '_id' | 'os' | 'device' | 'deviceId' | 'deviceType' | 'userAgent' | 'referrer' | 'ip' | 'host' | 'userId' | 'active' | 'hidden' | 'email' | 'date'>
);

export type InAppSubscriptionFragment = (
  { __typename?: 'InAppSubscription' }
  & Pick<InAppSubscription, '_id' | 'os' | 'device' | 'deviceId' | 'deviceType' | 'userAgent' | 'referrer' | 'ip' | 'host' | 'userId' | 'productId' | 'transactionId' | 'transactionDate' | 'transactionReceipt' | 'purchaseToken' | 'dataAndroid' | 'signatureAndroid' | 'autoRenewingAndroid' | 'purchaseStateAndroid' | 'originalTransactionDateIOS' | 'originalTransactionIdentifierIOS' | 'isAcknowledgedAndroid' | 'verified' | 'isTrialPeriod'>
);

export type InAppSubscriptionErrorFragment = (
  { __typename?: 'InAppSubscriptionError' }
  & Pick<InAppSubscriptionError, '_id' | 'os' | 'device' | 'deviceId' | 'deviceType' | 'userAgent' | 'referrer' | 'ip' | 'host' | 'responseCode' | 'debugMessage' | 'code' | 'message'>
);

export type PlaidInstitutionFragment = (
  { __typename?: 'PlaidInstitution' }
  & Pick<PlaidInstitution, 'name' | 'institution_id' | 'primary_color' | 'url' | 'logo'>
);

export type PlaidInstitutionStatusFragment = (
  { __typename?: 'PlaidInstitutionStatus' }
  & { item_logins?: Maybe<(
    { __typename?: 'PlaidInstitutionServiceStatus' }
    & Pick<PlaidInstitutionServiceStatus, 'status'>
  )>, transactions_updates?: Maybe<(
    { __typename?: 'PlaidInstitutionServiceStatus' }
    & Pick<PlaidInstitutionServiceStatus, 'status'>
  )>, auth?: Maybe<(
    { __typename?: 'PlaidInstitutionServiceStatus' }
    & Pick<PlaidInstitutionServiceStatus, 'status'>
  )>, balance?: Maybe<(
    { __typename?: 'PlaidInstitutionServiceStatus' }
    & Pick<PlaidInstitutionServiceStatus, 'status'>
  )>, identity?: Maybe<(
    { __typename?: 'PlaidInstitutionServiceStatus' }
    & Pick<PlaidInstitutionServiceStatus, 'status'>
  )> }
);

export type PlaidItemFragment = (
  { __typename?: 'PlaidItem' }
  & Pick<PlaidItem, 'available_products' | 'billed_products' | 'institution_id' | 'item_id' | 'webhook' | 'consent_expiration_time'>
  & { error?: Maybe<(
    { __typename?: 'PlaidError' }
    & Pick<PlaidError, 'error_type' | 'error_code' | 'error_message' | 'display_message'>
    & { causes?: Maybe<Array<Maybe<(
      { __typename?: 'Cause' }
      & Pick<Cause, 'error_type' | 'error_code' | 'error_message' | 'display_message' | 'item_id'>
    )>>> }
  )> }
);

export type UserSettingsFragment = (
  { __typename?: 'UserSettings' }
  & Pick<UserSettings, 'userId' | 'billing_status' | 'notifications_email' | 'notifications_push'>
  & { notifications_filter?: Maybe<(
    { __typename?: 'NotificationsFilter' }
    & Pick<NotificationsFilter, 'pending' | 'falsified' | 'undetermined' | 'verified'>
  )> }
);

export type PlaidTransactionFragment = (
  { __typename?: 'PlaidTransaction' }
  & Pick<PlaidTransaction, 'account_id' | 'account_owner' | 'amount' | 'iso_currency_code' | 'unofficial_currency_code' | 'category' | 'category_id' | 'date' | 'created_date' | 'name' | 'pending' | 'pending_transaction_id' | 'transaction_id' | 'transaction_type'>
  & { location?: Maybe<(
    { __typename?: 'PlaidTransactionLocation' }
    & Pick<PlaidTransactionLocation, 'address' | 'city' | 'lat' | 'lon' | 'region' | 'store_number' | 'postal_code' | 'country'>
  )>, payment_meta?: Maybe<(
    { __typename?: 'PlaidTransactionPaymentMeta' }
    & Pick<PlaidTransactionPaymentMeta, 'by_order_of' | 'payee' | 'payer' | 'payment_method' | 'payment_processor' | 'ppd_id' | 'reason' | 'reference_number'>
  )> }
);

export type TransactionActivityFragment = (
  { __typename?: 'TransactionActivity' }
  & Pick<TransactionActivity, '_id' | 'type' | 'message' | 'userId' | 'transaction_id' | 'created_by' | 'created_date'>
  & { pending_transaction_id?: Maybe<(
    { __typename?: 'StringUpdate' }
    & Pick<StringUpdate, 'previous' | 'current'>
  )>, verification_status?: Maybe<(
    { __typename?: 'StringUpdate' }
    & Pick<StringUpdate, 'previous' | 'current'>
  )>, verification_reason?: Maybe<(
    { __typename?: 'StringUpdate' }
    & Pick<StringUpdate, 'previous' | 'current'>
  )>, verification_by?: Maybe<(
    { __typename?: 'StringUpdate' }
    & Pick<StringUpdate, 'previous' | 'current'>
  )> }
);

export type CreatePublicTokenMutationVariables = Exact<{
  accessToken: Scalars['String'];
}>;


export type CreatePublicTokenMutation = (
  { __typename?: 'Mutation' }
  & { createPublicToken?: Maybe<(
    { __typename?: 'PlaidAccessToken' }
    & { item?: Maybe<(
      { __typename?: 'PlaidItem' }
      & PlaidItemFragment
    )>, institution?: Maybe<(
      { __typename?: 'PlaidInstitution' }
      & PlaidInstitutionFragment
    )> }
    & PlaidAccessTokenFragment
  )> }
);

export type GetOrCreateUserMutationVariables = Exact<{
  userId: Scalars['String'];
  userInfo?: Maybe<CardUserInfoInput>;
}>;


export type GetOrCreateUserMutation = (
  { __typename?: 'Mutation' }
  & { getOrCreateUser?: Maybe<(
    { __typename?: 'CardUserResult' }
    & Pick<CardUserResult, 'created'>
    & { cardUser?: Maybe<(
      { __typename?: 'CardUser' }
      & Pick<CardUser, 'email' | 'photoURL' | 'displayName' | 'userId'>
    )> }
  )> }
);

export type LocationPingMutationVariables = Exact<{
  locations: Array<BackgroundLocationInput>;
  userInfo?: Maybe<CardUserInfoInput>;
}>;


export type LocationPingMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'locationPing'>
);

export type RegionPingMutationVariables = Exact<{
  region: BackgroundRegionInput;
  location: BackgroundLocationInput;
  userInfo?: Maybe<CardUserInfoInput>;
}>;


export type RegionPingMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'regionPing'>
);

export type SavePurchaseErrorMutationVariables = Exact<{
  error: InAppSubscriptionErrorInput;
  userInfo?: Maybe<CardUserInfoInput>;
}>;


export type SavePurchaseErrorMutation = (
  { __typename?: 'Mutation' }
  & { savePurchaseError?: Maybe<(
    { __typename?: 'InAppSubscriptionError' }
    & Pick<InAppSubscriptionError, 'responseCode' | 'debugMessage' | 'code' | 'message'>
  )> }
);

export type SaveUpdatedPurchaseReceiptMutationVariables = Exact<{
  subscription: InAppSubscriptionInput;
  userInfo?: Maybe<CardUserInfoInput>;
}>;


export type SaveUpdatedPurchaseReceiptMutation = (
  { __typename?: 'Mutation' }
  & { saveUpdatedPurchaseReceipt?: Maybe<(
    { __typename?: 'InAppSubscription' }
    & Pick<InAppSubscription, 'productId'>
  )> }
);

export type SetAccessTokenMutationVariables = Exact<{
  publicToken: Scalars['String'];
}>;


export type SetAccessTokenMutation = (
  { __typename?: 'Mutation' }
  & { setAccessToken?: Maybe<(
    { __typename?: 'PlaidAccessToken' }
    & { item?: Maybe<(
      { __typename?: 'PlaidItem' }
      & PlaidItemFragment
    )>, institution?: Maybe<(
      { __typename?: 'PlaidInstitution' }
      & PlaidInstitutionFragment
    )> }
    & PlaidAccessTokenFragment
  )> }
);

export type SetAccountHiddenMutationVariables = Exact<{
  account_id: Scalars['String'];
  hidden: Scalars['Boolean'];
}>;


export type SetAccountHiddenMutation = (
  { __typename?: 'Mutation' }
  & { setAccountHidden?: Maybe<(
    { __typename?: 'PlaidAccount' }
    & PlaidAccountFragment
  )> }
);

export type SetDeviceHiddenMutationVariables = Exact<{
  id: Scalars['ObjectId'];
  hidden: Scalars['Boolean'];
}>;


export type SetDeviceHiddenMutation = (
  { __typename?: 'Mutation' }
  & { setDeviceHidden?: Maybe<(
    { __typename?: 'CardUserDevice' }
    & CardUserDeviceFragment
  )> }
);

export type SetTransactionVerificationStatusMutationVariables = Exact<{
  transaction_id: Scalars['String'];
  verification_status?: Maybe<TransactionVerificationStatus>;
}>;


export type SetTransactionVerificationStatusMutation = (
  { __typename?: 'Mutation' }
  & { setTransactionVerificationStatus?: Maybe<(
    { __typename?: 'PlaidTransaction' }
    & Pick<PlaidTransaction, 'verification_status' | 'verification_reason' | 'verification_date' | 'verification_by'>
    & PlaidTransactionFragment
  )> }
);

export type SubscribeToPushMutationVariables = Exact<{
  token: Scalars['String'];
  userInfo?: Maybe<CardUserInfoInput>;
}>;


export type SubscribeToPushMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'subscribeToPush'>
);

export type UpdateSettingsMutationVariables = Exact<{
  settings: UserSettingsInput;
}>;


export type UpdateSettingsMutation = (
  { __typename?: 'Mutation' }
  & { updateSettings?: Maybe<(
    { __typename?: 'UserSettings' }
    & UserSettingsFragment
  )> }
);

export type BackgroundLocationsQueryVariables = Exact<{
  filter?: Maybe<BackgroundLocationFilter>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
}>;


export type BackgroundLocationsQuery = (
  { __typename?: 'Query' }
  & { backgroundLocations?: Maybe<(
    { __typename?: 'BackgroundLocationPage' }
    & Pick<BackgroundLocationPage, 'total'>
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'BackgroundLocation' }
      & Pick<BackgroundLocation, '_id' | 'uid' | 'accuracy' | 'latitude' | 'longitude' | 'altitude' | 'altitudeAccuracy' | 'heading' | 'speed' | 'timestamp' | 'yyyymmddhh' | 'yyyymmdd' | 'platform' | 'date'>
    )>>> }
  )> }
);

export type BackgroundRegionsQueryVariables = Exact<{
  filter?: Maybe<BackgroundRegionFilter>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
}>;


export type BackgroundRegionsQuery = (
  { __typename?: 'Query' }
  & { backgroundRegions?: Maybe<(
    { __typename?: 'BackgroundRegionPage' }
    & Pick<BackgroundRegionPage, 'total'>
    & { data?: Maybe<Array<Maybe<(
      { __typename?: 'BackgroundRegion' }
      & Pick<BackgroundRegion, '_id' | 'uid' | 'accuracy' | 'latitude' | 'longitude' | 'altitude' | 'altitudeAccuracy' | 'heading' | 'speed' | 'regionIdentifier' | 'regionLatitude' | 'regionLongitude' | 'regionRadius' | 'regionState' | 'timestamp' | 'yyyymmddhh' | 'yyyymmdd' | 'date'>
    )>>> }
  )> }
);

export type CardUserQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
}>;


export type CardUserQuery = (
  { __typename?: 'Query' }
  & { cardUserById?: Maybe<(
    { __typename?: 'CardUser' }
    & Pick<CardUser, 'email' | 'userId' | 'photoURL' | 'displayName' | 'date'>
    & { config?: Maybe<(
      { __typename?: 'UserConfig' }
      & UserConfigFragment
    )>, settings?: Maybe<(
      { __typename?: 'UserSettings' }
      & UserSettingsFragment
    )>, getAccessTokens?: Maybe<Array<Maybe<(
      { __typename?: 'PlaidAccessToken' }
      & { item?: Maybe<(
        { __typename?: 'PlaidItem' }
        & PlaidItemFragment
      )>, institution?: Maybe<(
        { __typename?: 'PlaidInstitution' }
        & { status?: Maybe<(
          { __typename?: 'PlaidInstitutionStatus' }
          & PlaidInstitutionStatusFragment
        )> }
        & PlaidInstitutionFragment
      )> }
      & PlaidAccessTokenFragment
    )>>>, getCachedTransactions?: Maybe<(
      { __typename?: 'PlaidTransactionsResponse' }
      & Pick<PlaidTransactionsResponse, 'total_transactions'>
      & { accounts?: Maybe<Array<Maybe<(
        { __typename?: 'PlaidAccount' }
        & Pick<PlaidAccount, 'transactions_ready' | 'institution_id' | 'item_id'>
        & PlaidAccountFragment
      )>>>, transactions?: Maybe<Array<Maybe<(
        { __typename?: 'PlaidTransaction' }
        & PlaidTransactionFragment
      )>>> }
    )>, getSubscriptionHistory?: Maybe<(
      { __typename?: 'InAppSubscriptionPage' }
      & Pick<InAppSubscriptionPage, 'total'>
      & { data?: Maybe<Array<Maybe<(
        { __typename?: 'InAppSubscription' }
        & InAppSubscriptionFragment
      )>>> }
    )>, getSubscriptionErrorHistory?: Maybe<(
      { __typename?: 'InAppSubscriptionErrorPage' }
      & Pick<InAppSubscriptionErrorPage, 'total'>
      & { data?: Maybe<Array<Maybe<(
        { __typename?: 'InAppSubscriptionError' }
        & InAppSubscriptionErrorFragment
      )>>> }
    )>, devices?: Maybe<(
      { __typename?: 'CardUserDevicePage' }
      & Pick<CardUserDevicePage, 'total'>
      & { data?: Maybe<Array<Maybe<(
        { __typename?: 'CardUserDevice' }
        & CardUserDeviceFragment
      )>>> }
    )> }
  )> }
);

export type CardUserByDeviceIdQueryVariables = Exact<{
  deviceId: Scalars['String'];
}>;


export type CardUserByDeviceIdQuery = (
  { __typename?: 'Query' }
  & { cardUserByDeviceId?: Maybe<(
    { __typename?: 'CardUserDevice' }
    & Pick<CardUserDevice, 'email' | 'userId' | 'deviceId' | 'userAgent'>
  )> }
);

export type CardUserListQueryVariables = Exact<{
  searchText?: Maybe<Scalars['String']>;
  filter?: Maybe<CardUserFilter>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
}>;


export type CardUserListQuery = (
  { __typename?: 'Query' }
  & { cardUserList?: Maybe<(
    { __typename?: 'CardUserListResult' }
    & Pick<CardUserListResult, 'total'>
    & { data?: Maybe<Array<(
      { __typename?: 'CardUser' }
      & Pick<CardUser, 'email' | 'userId' | 'photoURL' | 'displayName' | 'date'>
    )>> }
  )> }
);

export type CardUserLocationsQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  filter?: Maybe<BackgroundLocationFilter>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
}>;


export type CardUserLocationsQuery = (
  { __typename?: 'Query' }
  & { cardUserById?: Maybe<(
    { __typename?: 'CardUser' }
    & { backgroundLocations?: Maybe<(
      { __typename?: 'BackgroundLocationPage' }
      & Pick<BackgroundLocationPage, 'total'>
      & { data?: Maybe<Array<Maybe<(
        { __typename?: 'BackgroundLocation' }
        & Pick<BackgroundLocation, '_id' | 'uid' | 'accuracy' | 'latitude' | 'longitude' | 'altitude' | 'altitudeAccuracy' | 'heading' | 'speed' | 'timestamp' | 'yyyymmddhh' | 'yyyymmdd' | 'platform' | 'date'>
      )>>> }
    )> }
  )> }
);

export type GetAccessTokenQueryVariables = Exact<{
  publicToken: Scalars['String'];
}>;


export type GetAccessTokenQuery = (
  { __typename?: 'Query' }
  & { getAccessToken?: Maybe<(
    { __typename?: 'PlaidAccessToken' }
    & PlaidAccessTokenFragment
  )> }
);

export type GetAccessTokensQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccessTokensQuery = (
  { __typename?: 'Query' }
  & { settings?: Maybe<(
    { __typename?: 'UserSettings' }
    & UserSettingsFragment
  )>, getAccessTokens?: Maybe<Array<Maybe<(
    { __typename?: 'PlaidAccessToken' }
    & { item?: Maybe<(
      { __typename?: 'PlaidItem' }
      & PlaidItemFragment
    )>, institution?: Maybe<(
      { __typename?: 'PlaidInstitution' }
      & PlaidInstitutionFragment
    )> }
    & PlaidAccessTokenFragment
  )>>> }
);

export type GetAccessTokensWithInstitutionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccessTokensWithInstitutionsQuery = (
  { __typename?: 'Query' }
  & { settings?: Maybe<(
    { __typename?: 'UserSettings' }
    & UserSettingsFragment
  )>, getAccessTokens?: Maybe<Array<Maybe<(
    { __typename?: 'PlaidAccessToken' }
    & { item?: Maybe<(
      { __typename?: 'PlaidItem' }
      & PlaidItemFragment
    )>, institution?: Maybe<(
      { __typename?: 'PlaidInstitution' }
      & PlaidInstitutionFragment
    )> }
    & PlaidAccessTokenFragment
  )>>> }
);

export type GetAccessTokensWithInstitutionStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccessTokensWithInstitutionStatusQuery = (
  { __typename?: 'Query' }
  & { settings?: Maybe<(
    { __typename?: 'UserSettings' }
    & UserSettingsFragment
  )>, getAccessTokens?: Maybe<Array<Maybe<(
    { __typename?: 'PlaidAccessToken' }
    & { item?: Maybe<(
      { __typename?: 'PlaidItem' }
      & PlaidItemFragment
    )>, institution?: Maybe<(
      { __typename?: 'PlaidInstitution' }
      & { status?: Maybe<(
        { __typename?: 'PlaidInstitutionStatus' }
        & PlaidInstitutionStatusFragment
      )> }
      & PlaidInstitutionFragment
    )> }
    & PlaidAccessTokenFragment
  )>>> }
);

export type GetCachedTransactionsQueryVariables = Exact<{
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
}>;


export type GetCachedTransactionsQuery = (
  { __typename?: 'Query' }
  & { settings?: Maybe<(
    { __typename?: 'UserSettings' }
    & UserSettingsFragment
  )>, getAccessTokens?: Maybe<Array<Maybe<(
    { __typename?: 'PlaidAccessToken' }
    & { item?: Maybe<(
      { __typename?: 'PlaidItem' }
      & PlaidItemFragment
    )>, institution?: Maybe<(
      { __typename?: 'PlaidInstitution' }
      & { status?: Maybe<(
        { __typename?: 'PlaidInstitutionStatus' }
        & PlaidInstitutionStatusFragment
      )> }
      & PlaidInstitutionFragment
    )> }
    & PlaidAccessTokenFragment
  )>>>, getCachedTransactions?: Maybe<(
    { __typename?: 'PlaidTransactionsResponse' }
    & Pick<PlaidTransactionsResponse, 'total_transactions'>
    & { accounts?: Maybe<Array<Maybe<(
      { __typename?: 'PlaidAccount' }
      & Pick<PlaidAccount, 'transactions_ready' | 'institution_id' | 'item_id'>
      & PlaidAccountFragment
    )>>>, transactions?: Maybe<Array<Maybe<(
      { __typename?: 'PlaidTransaction' }
      & PlaidTransactionFragment
    )>>> }
  )> }
);

export type GetIdentityQueryVariables = Exact<{
  accessToken: Scalars['String'];
}>;


export type GetIdentityQuery = (
  { __typename?: 'Query' }
  & { getIdentity?: Maybe<(
    { __typename?: 'PlaidIdentityResponse' }
    & { accounts?: Maybe<Array<Maybe<(
      { __typename?: 'PlaidAccountWithOwners' }
      & PlaidAccountWithOwnersFragment
    )>>>, item?: Maybe<(
      { __typename?: 'PlaidItem' }
      & PlaidItemFragment
    )> }
  )> }
);

export type GetSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingsQuery = (
  { __typename?: 'Query' }
  & { settings?: Maybe<(
    { __typename?: 'UserSettings' }
    & UserSettingsFragment
  )> }
);

export type GetTransactionsQueryVariables = Exact<{
  accessToken: Scalars['String'];
  startDate?: Maybe<Scalars['Date']>;
  endDate?: Maybe<Scalars['Date']>;
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
}>;


export type GetTransactionsQuery = (
  { __typename?: 'Query' }
  & { getTransactions?: Maybe<(
    { __typename?: 'PlaidTransactionsResponse' }
    & Pick<PlaidTransactionsResponse, 'total_transactions'>
    & { accounts?: Maybe<Array<Maybe<(
      { __typename?: 'PlaidAccount' }
      & PlaidAccountFragment
    )>>>, transactions?: Maybe<Array<Maybe<(
      { __typename?: 'PlaidTransaction' }
      & PlaidTransactionFragment
    )>>>, item?: Maybe<(
      { __typename?: 'PlaidItem' }
      & PlaidItemFragment
    )> }
  )> }
);

export type TransactionActivityQueryVariables = Exact<{
  transaction_id: Scalars['String'];
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
}>;


export type TransactionActivityQuery = (
  { __typename?: 'Query' }
  & { verifyTransactionLocation?: Maybe<(
    { __typename?: 'TransactionLocationVerification' }
    & { activity?: Maybe<(
      { __typename?: 'TransactionActivityPage' }
      & Pick<TransactionActivityPage, 'total'>
      & { data?: Maybe<Array<Maybe<(
        { __typename?: 'TransactionActivity' }
        & TransactionActivityFragment
      )>>> }
    )> }
  )> }
);

export type VerifiableTransactionsPageQueryVariables = Exact<{
  type?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
  filter?: Maybe<VerifiableTransactionsFilter>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
}>;


export type VerifiableTransactionsPageQuery = (
  { __typename?: 'Query' }
  & { verifiableTransactionsPage?: Maybe<(
    { __typename?: 'VerifiableTransactionsResponse' }
    & Pick<VerifiableTransactionsResponse, 'total_transactions'>
    & { accounts?: Maybe<Array<Maybe<(
      { __typename?: 'PlaidAccount' }
      & PlaidAccountFragment
    )>>>, transactions?: Maybe<Array<Maybe<(
      { __typename?: 'PlaidTransaction' }
      & Pick<PlaidTransaction, 'verification_status' | 'verification_reason' | 'verification_date' | 'verification_by'>
      & PlaidTransactionFragment
    )>>> }
  )> }
);

export type VerifiableTransactionsPageAdminQueryVariables = Exact<{
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  searchText?: Maybe<Scalars['String']>;
  filter?: Maybe<VerifiableTransactionsFilter>;
  pagination?: Maybe<Pagination>;
  sort?: Maybe<Sort>;
}>;


export type VerifiableTransactionsPageAdminQuery = (
  { __typename?: 'Query' }
  & { verifiableTransactionsPageAdmin?: Maybe<(
    { __typename?: 'VerifiableTransactionsResponseAdmin' }
    & Pick<VerifiableTransactionsResponseAdmin, 'total_transactions'>
    & { accounts?: Maybe<Array<Maybe<(
      { __typename?: 'PlaidAccount' }
      & Pick<PlaidAccount, 'userId' | 'institution_id'>
      & PlaidAccountFragment
    )>>>, transactions?: Maybe<Array<Maybe<(
      { __typename?: 'PlaidTransaction' }
      & Pick<PlaidTransaction, 'userId' | 'verification_status' | 'verification_reason' | 'verification_date' | 'verification_by'>
      & PlaidTransactionFragment
    )>>>, cardUsers?: Maybe<Array<Maybe<(
      { __typename?: 'CardUser' }
      & Pick<CardUser, 'userId' | 'photoURL' | 'displayName' | 'email'>
    )>>>, institutions?: Maybe<Array<Maybe<(
      { __typename?: 'PlaidInstitution' }
      & PlaidInstitutionFragment
    )>>> }
  )> }
);

export type VerifyTransactionLocationQueryVariables = Exact<{
  transaction_id: Scalars['String'];
}>;


export type VerifyTransactionLocationQuery = (
  { __typename?: 'Query' }
  & { verifyTransactionLocation?: Maybe<(
    { __typename?: 'TransactionLocationVerification' }
    & Pick<TransactionLocationVerification, 'transaction_id'>
    & { institution?: Maybe<(
      { __typename?: 'PlaidInstitution' }
      & PlaidInstitutionFragment
    )>, account?: Maybe<(
      { __typename?: 'PlaidAccount' }
      & PlaidAccountFragment
    )>, transaction?: Maybe<(
      { __typename?: 'PlaidTransaction' }
      & Pick<PlaidTransaction, 'verification_status' | 'verification_reason' | 'verification_date' | 'verification_by'>
      & PlaidTransactionFragment
    )>, during?: Maybe<(
      { __typename?: 'BackgroundLocationPage' }
      & Pick<BackgroundLocationPage, 'total'>
    )>, near?: Maybe<(
      { __typename?: 'BackgroundLocationPage' }
      & Pick<BackgroundLocationPage, 'total'>
    )> }
  )> }
);

export const PlaidAccessTokenFragmentDoc = gql`
    fragment PlaidAccessToken on PlaidAccessToken {
  publicToken
  accessToken
  itemId
  date
  env
}
    `;
export const PlaidAccountFragmentDoc = gql`
    fragment PlaidAccount on PlaidAccount {
  account_id
  mask
  name
  official_name
  subtype
  hidden
  type
  verification_status
  balances {
    available
    current
    limit
    iso_currency_code
    unofficial_currency_code
  }
}
    `;
export const AccountActivityFragmentDoc = gql`
    fragment AccountActivity on AccountActivity {
  _id
  type
  userId
  account_id
  created_by
  created_date
}
    `;
export const PlaidAccountWithOwnersFragmentDoc = gql`
    fragment PlaidAccountWithOwners on PlaidAccountWithOwners {
  account_id
  mask
  name
  official_name
  subtype
  type
  verification_status
  balances {
    available
    current
    limit
    iso_currency_code
    unofficial_currency_code
  }
  owners {
    addresses {
      data {
        city
        region
        postal_code
        street
        country
      }
      primary
    }
    emails {
      data
      primary
      type
    }
    names
    phone_numbers {
      data
      primary
      type
    }
  }
}
    `;
export const UserConfigFragmentDoc = gql`
    fragment UserConfig on UserConfig {
  plaidEnv
  activeSubscription
  activeSubscriptionInTrial
  plaidLinkUnavailable
  maxTrialInstitutions
  maxInstitutions
}
    `;
export const CardUserDeviceFragmentDoc = gql`
    fragment CardUserDevice on CardUserDevice {
  _id
  os
  device
  deviceId
  deviceType
  userAgent
  referrer
  ip
  host
  userId
  active
  hidden
  email
  date
}
    `;
export const InAppSubscriptionFragmentDoc = gql`
    fragment InAppSubscription on InAppSubscription {
  _id
  os
  device
  deviceId
  deviceType
  userAgent
  referrer
  ip
  host
  userId
  productId
  transactionId
  transactionDate
  transactionReceipt
  purchaseToken
  dataAndroid
  signatureAndroid
  autoRenewingAndroid
  purchaseStateAndroid
  originalTransactionDateIOS
  originalTransactionIdentifierIOS
  isAcknowledgedAndroid
  verified
  isTrialPeriod
}
    `;
export const InAppSubscriptionErrorFragmentDoc = gql`
    fragment InAppSubscriptionError on InAppSubscriptionError {
  _id
  os
  device
  deviceId
  deviceType
  userAgent
  referrer
  ip
  host
  responseCode
  debugMessage
  code
  message
}
    `;
export const PlaidInstitutionFragmentDoc = gql`
    fragment PlaidInstitution on PlaidInstitution {
  name
  institution_id
  primary_color
  url
  logo
}
    `;
export const PlaidInstitutionStatusFragmentDoc = gql`
    fragment PlaidInstitutionStatus on PlaidInstitutionStatus {
  item_logins {
    status
  }
  transactions_updates {
    status
  }
  auth {
    status
  }
  balance {
    status
  }
  identity {
    status
  }
}
    `;
export const PlaidItemFragmentDoc = gql`
    fragment PlaidItem on PlaidItem {
  available_products
  billed_products
  error {
    error_type
    error_code
    error_message
    display_message
    causes {
      error_type
      error_code
      error_message
      display_message
      item_id
    }
  }
  institution_id
  item_id
  webhook
  consent_expiration_time
}
    `;
export const UserSettingsFragmentDoc = gql`
    fragment UserSettings on UserSettings {
  userId
  billing_status
  notifications_email
  notifications_push
  notifications_filter {
    pending
    falsified
    undetermined
    verified
  }
}
    `;
export const PlaidTransactionFragmentDoc = gql`
    fragment PlaidTransaction on PlaidTransaction {
  account_id
  account_owner
  amount
  iso_currency_code
  unofficial_currency_code
  category
  category_id
  date
  created_date
  location {
    address
    city
    lat
    lon
    region
    store_number
    postal_code
    country
  }
  name
  payment_meta {
    by_order_of
    payee
    payer
    payment_method
    payment_processor
    ppd_id
    reason
    reference_number
  }
  pending
  pending_transaction_id
  transaction_id
  transaction_type
}
    `;
export const TransactionActivityFragmentDoc = gql`
    fragment TransactionActivity on TransactionActivity {
  _id
  type
  message
  userId
  transaction_id
  created_by
  created_date
  pending_transaction_id {
    previous
    current
  }
  verification_status {
    previous
    current
  }
  verification_reason {
    previous
    current
  }
  verification_by {
    previous
    current
  }
}
    `;
export const CreatePublicTokenDocument = gql`
    mutation CreatePublicToken($accessToken: String!) {
  createPublicToken(accessToken: $accessToken) {
    ...PlaidAccessToken
    item {
      ...PlaidItem
    }
    institution {
      ...PlaidInstitution
    }
  }
}
    ${PlaidAccessTokenFragmentDoc}
${PlaidItemFragmentDoc}
${PlaidInstitutionFragmentDoc}`;
export type CreatePublicTokenMutationFn = ApolloReactCommon.MutationFunction<CreatePublicTokenMutation, CreatePublicTokenMutationVariables>;
export type CreatePublicTokenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreatePublicTokenMutation, CreatePublicTokenMutationVariables>, 'mutation'>;

    export const CreatePublicTokenComponent = (props: CreatePublicTokenComponentProps) => (
      <ApolloReactComponents.Mutation<CreatePublicTokenMutation, CreatePublicTokenMutationVariables> mutation={CreatePublicTokenDocument} {...props} />
    );
    

/**
 * __useCreatePublicTokenMutation__
 *
 * To run a mutation, you first call `useCreatePublicTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePublicTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPublicTokenMutation, { data, loading, error }] = useCreatePublicTokenMutation({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *   },
 * });
 */
export function useCreatePublicTokenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePublicTokenMutation, CreatePublicTokenMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePublicTokenMutation, CreatePublicTokenMutationVariables>(CreatePublicTokenDocument, baseOptions);
      }
export type CreatePublicTokenMutationHookResult = ReturnType<typeof useCreatePublicTokenMutation>;
export type CreatePublicTokenMutationResult = ApolloReactCommon.MutationResult<CreatePublicTokenMutation>;
export type CreatePublicTokenMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePublicTokenMutation, CreatePublicTokenMutationVariables>;
export const GetOrCreateUserDocument = gql`
    mutation GetOrCreateUser($userId: String!, $userInfo: CardUserInfoInput) {
  getOrCreateUser(userId: $userId, userInfo: $userInfo) {
    created
    cardUser {
      email
      photoURL
      displayName
      userId
    }
  }
}
    `;
export type GetOrCreateUserMutationFn = ApolloReactCommon.MutationFunction<GetOrCreateUserMutation, GetOrCreateUserMutationVariables>;
export type GetOrCreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<GetOrCreateUserMutation, GetOrCreateUserMutationVariables>, 'mutation'>;

    export const GetOrCreateUserComponent = (props: GetOrCreateUserComponentProps) => (
      <ApolloReactComponents.Mutation<GetOrCreateUserMutation, GetOrCreateUserMutationVariables> mutation={GetOrCreateUserDocument} {...props} />
    );
    

/**
 * __useGetOrCreateUserMutation__
 *
 * To run a mutation, you first call `useGetOrCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetOrCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getOrCreateUserMutation, { data, loading, error }] = useGetOrCreateUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      userInfo: // value for 'userInfo'
 *   },
 * });
 */
export function useGetOrCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<GetOrCreateUserMutation, GetOrCreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<GetOrCreateUserMutation, GetOrCreateUserMutationVariables>(GetOrCreateUserDocument, baseOptions);
      }
export type GetOrCreateUserMutationHookResult = ReturnType<typeof useGetOrCreateUserMutation>;
export type GetOrCreateUserMutationResult = ApolloReactCommon.MutationResult<GetOrCreateUserMutation>;
export type GetOrCreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<GetOrCreateUserMutation, GetOrCreateUserMutationVariables>;
export const LocationPingDocument = gql`
    mutation LocationPing($locations: [BackgroundLocationInput!]!, $userInfo: CardUserInfoInput) {
  locationPing(locations: $locations)
}
    `;
export type LocationPingMutationFn = ApolloReactCommon.MutationFunction<LocationPingMutation, LocationPingMutationVariables>;
export type LocationPingComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LocationPingMutation, LocationPingMutationVariables>, 'mutation'>;

    export const LocationPingComponent = (props: LocationPingComponentProps) => (
      <ApolloReactComponents.Mutation<LocationPingMutation, LocationPingMutationVariables> mutation={LocationPingDocument} {...props} />
    );
    

/**
 * __useLocationPingMutation__
 *
 * To run a mutation, you first call `useLocationPingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLocationPingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [locationPingMutation, { data, loading, error }] = useLocationPingMutation({
 *   variables: {
 *      locations: // value for 'locations'
 *      userInfo: // value for 'userInfo'
 *   },
 * });
 */
export function useLocationPingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LocationPingMutation, LocationPingMutationVariables>) {
        return ApolloReactHooks.useMutation<LocationPingMutation, LocationPingMutationVariables>(LocationPingDocument, baseOptions);
      }
export type LocationPingMutationHookResult = ReturnType<typeof useLocationPingMutation>;
export type LocationPingMutationResult = ApolloReactCommon.MutationResult<LocationPingMutation>;
export type LocationPingMutationOptions = ApolloReactCommon.BaseMutationOptions<LocationPingMutation, LocationPingMutationVariables>;
export const RegionPingDocument = gql`
    mutation RegionPing($region: BackgroundRegionInput!, $location: BackgroundLocationInput!, $userInfo: CardUserInfoInput) {
  regionPing(region: $region, location: $location)
}
    `;
export type RegionPingMutationFn = ApolloReactCommon.MutationFunction<RegionPingMutation, RegionPingMutationVariables>;
export type RegionPingComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegionPingMutation, RegionPingMutationVariables>, 'mutation'>;

    export const RegionPingComponent = (props: RegionPingComponentProps) => (
      <ApolloReactComponents.Mutation<RegionPingMutation, RegionPingMutationVariables> mutation={RegionPingDocument} {...props} />
    );
    

/**
 * __useRegionPingMutation__
 *
 * To run a mutation, you first call `useRegionPingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegionPingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [regionPingMutation, { data, loading, error }] = useRegionPingMutation({
 *   variables: {
 *      region: // value for 'region'
 *      location: // value for 'location'
 *      userInfo: // value for 'userInfo'
 *   },
 * });
 */
export function useRegionPingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegionPingMutation, RegionPingMutationVariables>) {
        return ApolloReactHooks.useMutation<RegionPingMutation, RegionPingMutationVariables>(RegionPingDocument, baseOptions);
      }
export type RegionPingMutationHookResult = ReturnType<typeof useRegionPingMutation>;
export type RegionPingMutationResult = ApolloReactCommon.MutationResult<RegionPingMutation>;
export type RegionPingMutationOptions = ApolloReactCommon.BaseMutationOptions<RegionPingMutation, RegionPingMutationVariables>;
export const SavePurchaseErrorDocument = gql`
    mutation SavePurchaseError($error: InAppSubscriptionErrorInput!, $userInfo: CardUserInfoInput) {
  savePurchaseError(error: $error, userInfo: $userInfo) {
    responseCode
    debugMessage
    code
    message
  }
}
    `;
export type SavePurchaseErrorMutationFn = ApolloReactCommon.MutationFunction<SavePurchaseErrorMutation, SavePurchaseErrorMutationVariables>;
export type SavePurchaseErrorComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SavePurchaseErrorMutation, SavePurchaseErrorMutationVariables>, 'mutation'>;

    export const SavePurchaseErrorComponent = (props: SavePurchaseErrorComponentProps) => (
      <ApolloReactComponents.Mutation<SavePurchaseErrorMutation, SavePurchaseErrorMutationVariables> mutation={SavePurchaseErrorDocument} {...props} />
    );
    

/**
 * __useSavePurchaseErrorMutation__
 *
 * To run a mutation, you first call `useSavePurchaseErrorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSavePurchaseErrorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [savePurchaseErrorMutation, { data, loading, error }] = useSavePurchaseErrorMutation({
 *   variables: {
 *      error: // value for 'error'
 *      userInfo: // value for 'userInfo'
 *   },
 * });
 */
export function useSavePurchaseErrorMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SavePurchaseErrorMutation, SavePurchaseErrorMutationVariables>) {
        return ApolloReactHooks.useMutation<SavePurchaseErrorMutation, SavePurchaseErrorMutationVariables>(SavePurchaseErrorDocument, baseOptions);
      }
export type SavePurchaseErrorMutationHookResult = ReturnType<typeof useSavePurchaseErrorMutation>;
export type SavePurchaseErrorMutationResult = ApolloReactCommon.MutationResult<SavePurchaseErrorMutation>;
export type SavePurchaseErrorMutationOptions = ApolloReactCommon.BaseMutationOptions<SavePurchaseErrorMutation, SavePurchaseErrorMutationVariables>;
export const SaveUpdatedPurchaseReceiptDocument = gql`
    mutation SaveUpdatedPurchaseReceipt($subscription: InAppSubscriptionInput!, $userInfo: CardUserInfoInput) {
  saveUpdatedPurchaseReceipt(subscription: $subscription, userInfo: $userInfo) {
    productId
  }
}
    `;
export type SaveUpdatedPurchaseReceiptMutationFn = ApolloReactCommon.MutationFunction<SaveUpdatedPurchaseReceiptMutation, SaveUpdatedPurchaseReceiptMutationVariables>;
export type SaveUpdatedPurchaseReceiptComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SaveUpdatedPurchaseReceiptMutation, SaveUpdatedPurchaseReceiptMutationVariables>, 'mutation'>;

    export const SaveUpdatedPurchaseReceiptComponent = (props: SaveUpdatedPurchaseReceiptComponentProps) => (
      <ApolloReactComponents.Mutation<SaveUpdatedPurchaseReceiptMutation, SaveUpdatedPurchaseReceiptMutationVariables> mutation={SaveUpdatedPurchaseReceiptDocument} {...props} />
    );
    

/**
 * __useSaveUpdatedPurchaseReceiptMutation__
 *
 * To run a mutation, you first call `useSaveUpdatedPurchaseReceiptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveUpdatedPurchaseReceiptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveUpdatedPurchaseReceiptMutation, { data, loading, error }] = useSaveUpdatedPurchaseReceiptMutation({
 *   variables: {
 *      subscription: // value for 'subscription'
 *      userInfo: // value for 'userInfo'
 *   },
 * });
 */
export function useSaveUpdatedPurchaseReceiptMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SaveUpdatedPurchaseReceiptMutation, SaveUpdatedPurchaseReceiptMutationVariables>) {
        return ApolloReactHooks.useMutation<SaveUpdatedPurchaseReceiptMutation, SaveUpdatedPurchaseReceiptMutationVariables>(SaveUpdatedPurchaseReceiptDocument, baseOptions);
      }
export type SaveUpdatedPurchaseReceiptMutationHookResult = ReturnType<typeof useSaveUpdatedPurchaseReceiptMutation>;
export type SaveUpdatedPurchaseReceiptMutationResult = ApolloReactCommon.MutationResult<SaveUpdatedPurchaseReceiptMutation>;
export type SaveUpdatedPurchaseReceiptMutationOptions = ApolloReactCommon.BaseMutationOptions<SaveUpdatedPurchaseReceiptMutation, SaveUpdatedPurchaseReceiptMutationVariables>;
export const SetAccessTokenDocument = gql`
    mutation SetAccessToken($publicToken: String!) {
  setAccessToken(publicToken: $publicToken) {
    ...PlaidAccessToken
    item {
      ...PlaidItem
    }
    institution {
      ...PlaidInstitution
    }
  }
}
    ${PlaidAccessTokenFragmentDoc}
${PlaidItemFragmentDoc}
${PlaidInstitutionFragmentDoc}`;
export type SetAccessTokenMutationFn = ApolloReactCommon.MutationFunction<SetAccessTokenMutation, SetAccessTokenMutationVariables>;
export type SetAccessTokenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SetAccessTokenMutation, SetAccessTokenMutationVariables>, 'mutation'>;

    export const SetAccessTokenComponent = (props: SetAccessTokenComponentProps) => (
      <ApolloReactComponents.Mutation<SetAccessTokenMutation, SetAccessTokenMutationVariables> mutation={SetAccessTokenDocument} {...props} />
    );
    

/**
 * __useSetAccessTokenMutation__
 *
 * To run a mutation, you first call `useSetAccessTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetAccessTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setAccessTokenMutation, { data, loading, error }] = useSetAccessTokenMutation({
 *   variables: {
 *      publicToken: // value for 'publicToken'
 *   },
 * });
 */
export function useSetAccessTokenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetAccessTokenMutation, SetAccessTokenMutationVariables>) {
        return ApolloReactHooks.useMutation<SetAccessTokenMutation, SetAccessTokenMutationVariables>(SetAccessTokenDocument, baseOptions);
      }
export type SetAccessTokenMutationHookResult = ReturnType<typeof useSetAccessTokenMutation>;
export type SetAccessTokenMutationResult = ApolloReactCommon.MutationResult<SetAccessTokenMutation>;
export type SetAccessTokenMutationOptions = ApolloReactCommon.BaseMutationOptions<SetAccessTokenMutation, SetAccessTokenMutationVariables>;
export const SetAccountHiddenDocument = gql`
    mutation SetAccountHidden($account_id: String!, $hidden: Boolean!) {
  setAccountHidden(account_id: $account_id, hidden: $hidden) {
    ...PlaidAccount
  }
}
    ${PlaidAccountFragmentDoc}`;
export type SetAccountHiddenMutationFn = ApolloReactCommon.MutationFunction<SetAccountHiddenMutation, SetAccountHiddenMutationVariables>;
export type SetAccountHiddenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SetAccountHiddenMutation, SetAccountHiddenMutationVariables>, 'mutation'>;

    export const SetAccountHiddenComponent = (props: SetAccountHiddenComponentProps) => (
      <ApolloReactComponents.Mutation<SetAccountHiddenMutation, SetAccountHiddenMutationVariables> mutation={SetAccountHiddenDocument} {...props} />
    );
    

/**
 * __useSetAccountHiddenMutation__
 *
 * To run a mutation, you first call `useSetAccountHiddenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetAccountHiddenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setAccountHiddenMutation, { data, loading, error }] = useSetAccountHiddenMutation({
 *   variables: {
 *      account_id: // value for 'account_id'
 *      hidden: // value for 'hidden'
 *   },
 * });
 */
export function useSetAccountHiddenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetAccountHiddenMutation, SetAccountHiddenMutationVariables>) {
        return ApolloReactHooks.useMutation<SetAccountHiddenMutation, SetAccountHiddenMutationVariables>(SetAccountHiddenDocument, baseOptions);
      }
export type SetAccountHiddenMutationHookResult = ReturnType<typeof useSetAccountHiddenMutation>;
export type SetAccountHiddenMutationResult = ApolloReactCommon.MutationResult<SetAccountHiddenMutation>;
export type SetAccountHiddenMutationOptions = ApolloReactCommon.BaseMutationOptions<SetAccountHiddenMutation, SetAccountHiddenMutationVariables>;
export const SetDeviceHiddenDocument = gql`
    mutation SetDeviceHidden($id: ObjectId!, $hidden: Boolean!) {
  setDeviceHidden(id: $id, hidden: $hidden) {
    ...CardUserDevice
  }
}
    ${CardUserDeviceFragmentDoc}`;
export type SetDeviceHiddenMutationFn = ApolloReactCommon.MutationFunction<SetDeviceHiddenMutation, SetDeviceHiddenMutationVariables>;
export type SetDeviceHiddenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SetDeviceHiddenMutation, SetDeviceHiddenMutationVariables>, 'mutation'>;

    export const SetDeviceHiddenComponent = (props: SetDeviceHiddenComponentProps) => (
      <ApolloReactComponents.Mutation<SetDeviceHiddenMutation, SetDeviceHiddenMutationVariables> mutation={SetDeviceHiddenDocument} {...props} />
    );
    

/**
 * __useSetDeviceHiddenMutation__
 *
 * To run a mutation, you first call `useSetDeviceHiddenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetDeviceHiddenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setDeviceHiddenMutation, { data, loading, error }] = useSetDeviceHiddenMutation({
 *   variables: {
 *      id: // value for 'id'
 *      hidden: // value for 'hidden'
 *   },
 * });
 */
export function useSetDeviceHiddenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetDeviceHiddenMutation, SetDeviceHiddenMutationVariables>) {
        return ApolloReactHooks.useMutation<SetDeviceHiddenMutation, SetDeviceHiddenMutationVariables>(SetDeviceHiddenDocument, baseOptions);
      }
export type SetDeviceHiddenMutationHookResult = ReturnType<typeof useSetDeviceHiddenMutation>;
export type SetDeviceHiddenMutationResult = ApolloReactCommon.MutationResult<SetDeviceHiddenMutation>;
export type SetDeviceHiddenMutationOptions = ApolloReactCommon.BaseMutationOptions<SetDeviceHiddenMutation, SetDeviceHiddenMutationVariables>;
export const SetTransactionVerificationStatusDocument = gql`
    mutation SetTransactionVerificationStatus($transaction_id: String!, $verification_status: TransactionVerificationStatus) {
  setTransactionVerificationStatus(transaction_id: $transaction_id, verification_status: $verification_status) {
    ...PlaidTransaction
    verification_status
    verification_reason
    verification_date
    verification_by
  }
}
    ${PlaidTransactionFragmentDoc}`;
export type SetTransactionVerificationStatusMutationFn = ApolloReactCommon.MutationFunction<SetTransactionVerificationStatusMutation, SetTransactionVerificationStatusMutationVariables>;
export type SetTransactionVerificationStatusComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SetTransactionVerificationStatusMutation, SetTransactionVerificationStatusMutationVariables>, 'mutation'>;

    export const SetTransactionVerificationStatusComponent = (props: SetTransactionVerificationStatusComponentProps) => (
      <ApolloReactComponents.Mutation<SetTransactionVerificationStatusMutation, SetTransactionVerificationStatusMutationVariables> mutation={SetTransactionVerificationStatusDocument} {...props} />
    );
    

/**
 * __useSetTransactionVerificationStatusMutation__
 *
 * To run a mutation, you first call `useSetTransactionVerificationStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetTransactionVerificationStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setTransactionVerificationStatusMutation, { data, loading, error }] = useSetTransactionVerificationStatusMutation({
 *   variables: {
 *      transaction_id: // value for 'transaction_id'
 *      verification_status: // value for 'verification_status'
 *   },
 * });
 */
export function useSetTransactionVerificationStatusMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetTransactionVerificationStatusMutation, SetTransactionVerificationStatusMutationVariables>) {
        return ApolloReactHooks.useMutation<SetTransactionVerificationStatusMutation, SetTransactionVerificationStatusMutationVariables>(SetTransactionVerificationStatusDocument, baseOptions);
      }
export type SetTransactionVerificationStatusMutationHookResult = ReturnType<typeof useSetTransactionVerificationStatusMutation>;
export type SetTransactionVerificationStatusMutationResult = ApolloReactCommon.MutationResult<SetTransactionVerificationStatusMutation>;
export type SetTransactionVerificationStatusMutationOptions = ApolloReactCommon.BaseMutationOptions<SetTransactionVerificationStatusMutation, SetTransactionVerificationStatusMutationVariables>;
export const SubscribeToPushDocument = gql`
    mutation SubscribeToPush($token: String!, $userInfo: CardUserInfoInput) {
  subscribeToPush(token: $token, userInfo: $userInfo)
}
    `;
export type SubscribeToPushMutationFn = ApolloReactCommon.MutationFunction<SubscribeToPushMutation, SubscribeToPushMutationVariables>;
export type SubscribeToPushComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SubscribeToPushMutation, SubscribeToPushMutationVariables>, 'mutation'>;

    export const SubscribeToPushComponent = (props: SubscribeToPushComponentProps) => (
      <ApolloReactComponents.Mutation<SubscribeToPushMutation, SubscribeToPushMutationVariables> mutation={SubscribeToPushDocument} {...props} />
    );
    

/**
 * __useSubscribeToPushMutation__
 *
 * To run a mutation, you first call `useSubscribeToPushMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToPushMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeToPushMutation, { data, loading, error }] = useSubscribeToPushMutation({
 *   variables: {
 *      token: // value for 'token'
 *      userInfo: // value for 'userInfo'
 *   },
 * });
 */
export function useSubscribeToPushMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SubscribeToPushMutation, SubscribeToPushMutationVariables>) {
        return ApolloReactHooks.useMutation<SubscribeToPushMutation, SubscribeToPushMutationVariables>(SubscribeToPushDocument, baseOptions);
      }
export type SubscribeToPushMutationHookResult = ReturnType<typeof useSubscribeToPushMutation>;
export type SubscribeToPushMutationResult = ApolloReactCommon.MutationResult<SubscribeToPushMutation>;
export type SubscribeToPushMutationOptions = ApolloReactCommon.BaseMutationOptions<SubscribeToPushMutation, SubscribeToPushMutationVariables>;
export const UpdateSettingsDocument = gql`
    mutation UpdateSettings($settings: UserSettingsInput!) {
  updateSettings(settings: $settings) {
    ...UserSettings
  }
}
    ${UserSettingsFragmentDoc}`;
export type UpdateSettingsMutationFn = ApolloReactCommon.MutationFunction<UpdateSettingsMutation, UpdateSettingsMutationVariables>;
export type UpdateSettingsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateSettingsMutation, UpdateSettingsMutationVariables>, 'mutation'>;

    export const UpdateSettingsComponent = (props: UpdateSettingsComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateSettingsMutation, UpdateSettingsMutationVariables> mutation={UpdateSettingsDocument} {...props} />
    );
    

/**
 * __useUpdateSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSettingsMutation, { data, loading, error }] = useUpdateSettingsMutation({
 *   variables: {
 *      settings: // value for 'settings'
 *   },
 * });
 */
export function useUpdateSettingsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateSettingsMutation, UpdateSettingsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateSettingsMutation, UpdateSettingsMutationVariables>(UpdateSettingsDocument, baseOptions);
      }
export type UpdateSettingsMutationHookResult = ReturnType<typeof useUpdateSettingsMutation>;
export type UpdateSettingsMutationResult = ApolloReactCommon.MutationResult<UpdateSettingsMutation>;
export type UpdateSettingsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateSettingsMutation, UpdateSettingsMutationVariables>;
export const BackgroundLocationsDocument = gql`
    query BackgroundLocations($filter: BackgroundLocationFilter, $pagination: Pagination, $sort: Sort) {
  backgroundLocations(filter: $filter, pagination: $pagination, sort: $sort) {
    total
    data {
      _id
      uid
      accuracy
      latitude
      longitude
      altitude
      altitudeAccuracy
      heading
      speed
      timestamp
      yyyymmddhh
      yyyymmdd
      platform
      date
    }
  }
}
    `;
export type BackgroundLocationsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<BackgroundLocationsQuery, BackgroundLocationsQueryVariables>, 'query'>;

    export const BackgroundLocationsComponent = (props: BackgroundLocationsComponentProps) => (
      <ApolloReactComponents.Query<BackgroundLocationsQuery, BackgroundLocationsQueryVariables> query={BackgroundLocationsDocument} {...props} />
    );
    

/**
 * __useBackgroundLocationsQuery__
 *
 * To run a query within a React component, call `useBackgroundLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBackgroundLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBackgroundLocationsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useBackgroundLocationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BackgroundLocationsQuery, BackgroundLocationsQueryVariables>) {
        return ApolloReactHooks.useQuery<BackgroundLocationsQuery, BackgroundLocationsQueryVariables>(BackgroundLocationsDocument, baseOptions);
      }
export function useBackgroundLocationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BackgroundLocationsQuery, BackgroundLocationsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BackgroundLocationsQuery, BackgroundLocationsQueryVariables>(BackgroundLocationsDocument, baseOptions);
        }
export type BackgroundLocationsQueryHookResult = ReturnType<typeof useBackgroundLocationsQuery>;
export type BackgroundLocationsLazyQueryHookResult = ReturnType<typeof useBackgroundLocationsLazyQuery>;
export type BackgroundLocationsQueryResult = ApolloReactCommon.QueryResult<BackgroundLocationsQuery, BackgroundLocationsQueryVariables>;
export const BackgroundRegionsDocument = gql`
    query BackgroundRegions($filter: BackgroundRegionFilter, $pagination: Pagination, $sort: Sort) {
  backgroundRegions(filter: $filter, pagination: $pagination, sort: $sort) {
    total
    data {
      _id
      uid
      accuracy
      latitude
      longitude
      altitude
      altitudeAccuracy
      heading
      speed
      regionIdentifier
      regionLatitude
      regionLongitude
      regionRadius
      regionState
      timestamp
      yyyymmddhh
      yyyymmdd
      date
    }
  }
}
    `;
export type BackgroundRegionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<BackgroundRegionsQuery, BackgroundRegionsQueryVariables>, 'query'>;

    export const BackgroundRegionsComponent = (props: BackgroundRegionsComponentProps) => (
      <ApolloReactComponents.Query<BackgroundRegionsQuery, BackgroundRegionsQueryVariables> query={BackgroundRegionsDocument} {...props} />
    );
    

/**
 * __useBackgroundRegionsQuery__
 *
 * To run a query within a React component, call `useBackgroundRegionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBackgroundRegionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBackgroundRegionsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useBackgroundRegionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BackgroundRegionsQuery, BackgroundRegionsQueryVariables>) {
        return ApolloReactHooks.useQuery<BackgroundRegionsQuery, BackgroundRegionsQueryVariables>(BackgroundRegionsDocument, baseOptions);
      }
export function useBackgroundRegionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BackgroundRegionsQuery, BackgroundRegionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BackgroundRegionsQuery, BackgroundRegionsQueryVariables>(BackgroundRegionsDocument, baseOptions);
        }
export type BackgroundRegionsQueryHookResult = ReturnType<typeof useBackgroundRegionsQuery>;
export type BackgroundRegionsLazyQueryHookResult = ReturnType<typeof useBackgroundRegionsLazyQuery>;
export type BackgroundRegionsQueryResult = ApolloReactCommon.QueryResult<BackgroundRegionsQuery, BackgroundRegionsQueryVariables>;
export const CardUserDocument = gql`
    query CardUser($userId: String, $startDate: Date, $endDate: Date, $page: Int, $perPage: Int) {
  cardUserById(userId: $userId) {
    email
    userId
    photoURL
    displayName
    date
    config {
      ...UserConfig
    }
    settings {
      ...UserSettings
    }
    getAccessTokens {
      ...PlaidAccessToken
      item {
        ...PlaidItem
      }
      institution {
        ...PlaidInstitution
        status {
          ...PlaidInstitutionStatus
        }
      }
    }
    getCachedTransactions(startDate: $startDate, endDate: $endDate, page: $page, perPage: $perPage) {
      total_transactions
      accounts {
        ...PlaidAccount
        transactions_ready
        institution_id
        item_id
      }
      transactions {
        ...PlaidTransaction
      }
    }
    getSubscriptionHistory {
      total
      data {
        ...InAppSubscription
      }
    }
    getSubscriptionErrorHistory {
      total
      data {
        ...InAppSubscriptionError
      }
    }
    devices {
      total
      data {
        ...CardUserDevice
      }
    }
  }
}
    ${UserConfigFragmentDoc}
${UserSettingsFragmentDoc}
${PlaidAccessTokenFragmentDoc}
${PlaidItemFragmentDoc}
${PlaidInstitutionFragmentDoc}
${PlaidInstitutionStatusFragmentDoc}
${PlaidAccountFragmentDoc}
${PlaidTransactionFragmentDoc}
${InAppSubscriptionFragmentDoc}
${InAppSubscriptionErrorFragmentDoc}
${CardUserDeviceFragmentDoc}`;
export type CardUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CardUserQuery, CardUserQueryVariables>, 'query'>;

    export const CardUserComponent = (props: CardUserComponentProps) => (
      <ApolloReactComponents.Query<CardUserQuery, CardUserQueryVariables> query={CardUserDocument} {...props} />
    );
    

/**
 * __useCardUserQuery__
 *
 * To run a query within a React component, call `useCardUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useCardUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CardUserQuery, CardUserQueryVariables>) {
        return ApolloReactHooks.useQuery<CardUserQuery, CardUserQueryVariables>(CardUserDocument, baseOptions);
      }
export function useCardUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CardUserQuery, CardUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CardUserQuery, CardUserQueryVariables>(CardUserDocument, baseOptions);
        }
export type CardUserQueryHookResult = ReturnType<typeof useCardUserQuery>;
export type CardUserLazyQueryHookResult = ReturnType<typeof useCardUserLazyQuery>;
export type CardUserQueryResult = ApolloReactCommon.QueryResult<CardUserQuery, CardUserQueryVariables>;
export const CardUserByDeviceIdDocument = gql`
    query CardUserByDeviceId($deviceId: String!) {
  cardUserByDeviceId(deviceId: $deviceId) {
    email
    userId
    deviceId
    userAgent
    userId
  }
}
    `;
export type CardUserByDeviceIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CardUserByDeviceIdQuery, CardUserByDeviceIdQueryVariables>, 'query'> & ({ variables: CardUserByDeviceIdQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CardUserByDeviceIdComponent = (props: CardUserByDeviceIdComponentProps) => (
      <ApolloReactComponents.Query<CardUserByDeviceIdQuery, CardUserByDeviceIdQueryVariables> query={CardUserByDeviceIdDocument} {...props} />
    );
    

/**
 * __useCardUserByDeviceIdQuery__
 *
 * To run a query within a React component, call `useCardUserByDeviceIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardUserByDeviceIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardUserByDeviceIdQuery({
 *   variables: {
 *      deviceId: // value for 'deviceId'
 *   },
 * });
 */
export function useCardUserByDeviceIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CardUserByDeviceIdQuery, CardUserByDeviceIdQueryVariables>) {
        return ApolloReactHooks.useQuery<CardUserByDeviceIdQuery, CardUserByDeviceIdQueryVariables>(CardUserByDeviceIdDocument, baseOptions);
      }
export function useCardUserByDeviceIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CardUserByDeviceIdQuery, CardUserByDeviceIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CardUserByDeviceIdQuery, CardUserByDeviceIdQueryVariables>(CardUserByDeviceIdDocument, baseOptions);
        }
export type CardUserByDeviceIdQueryHookResult = ReturnType<typeof useCardUserByDeviceIdQuery>;
export type CardUserByDeviceIdLazyQueryHookResult = ReturnType<typeof useCardUserByDeviceIdLazyQuery>;
export type CardUserByDeviceIdQueryResult = ApolloReactCommon.QueryResult<CardUserByDeviceIdQuery, CardUserByDeviceIdQueryVariables>;
export const CardUserListDocument = gql`
    query CardUserList($searchText: String, $filter: CardUserFilter, $pagination: Pagination, $sort: Sort) {
  cardUserList(searchText: $searchText, filter: $filter, pagination: $pagination, sort: $sort) {
    total
    data {
      email
      userId
      photoURL
      displayName
      date
    }
  }
}
    `;
export type CardUserListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CardUserListQuery, CardUserListQueryVariables>, 'query'>;

    export const CardUserListComponent = (props: CardUserListComponentProps) => (
      <ApolloReactComponents.Query<CardUserListQuery, CardUserListQueryVariables> query={CardUserListDocument} {...props} />
    );
    

/**
 * __useCardUserListQuery__
 *
 * To run a query within a React component, call `useCardUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardUserListQuery({
 *   variables: {
 *      searchText: // value for 'searchText'
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useCardUserListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CardUserListQuery, CardUserListQueryVariables>) {
        return ApolloReactHooks.useQuery<CardUserListQuery, CardUserListQueryVariables>(CardUserListDocument, baseOptions);
      }
export function useCardUserListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CardUserListQuery, CardUserListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CardUserListQuery, CardUserListQueryVariables>(CardUserListDocument, baseOptions);
        }
export type CardUserListQueryHookResult = ReturnType<typeof useCardUserListQuery>;
export type CardUserListLazyQueryHookResult = ReturnType<typeof useCardUserListLazyQuery>;
export type CardUserListQueryResult = ApolloReactCommon.QueryResult<CardUserListQuery, CardUserListQueryVariables>;
export const CardUserLocationsDocument = gql`
    query CardUserLocations($userId: String, $filter: BackgroundLocationFilter, $pagination: Pagination, $sort: Sort) {
  cardUserById(userId: $userId) {
    backgroundLocations(filter: $filter, pagination: $pagination, sort: $sort) {
      total
      data {
        _id
        uid
        accuracy
        latitude
        longitude
        altitude
        altitudeAccuracy
        heading
        speed
        timestamp
        yyyymmddhh
        yyyymmdd
        platform
        date
      }
    }
  }
}
    `;
export type CardUserLocationsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CardUserLocationsQuery, CardUserLocationsQueryVariables>, 'query'>;

    export const CardUserLocationsComponent = (props: CardUserLocationsComponentProps) => (
      <ApolloReactComponents.Query<CardUserLocationsQuery, CardUserLocationsQueryVariables> query={CardUserLocationsDocument} {...props} />
    );
    

/**
 * __useCardUserLocationsQuery__
 *
 * To run a query within a React component, call `useCardUserLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardUserLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardUserLocationsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useCardUserLocationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CardUserLocationsQuery, CardUserLocationsQueryVariables>) {
        return ApolloReactHooks.useQuery<CardUserLocationsQuery, CardUserLocationsQueryVariables>(CardUserLocationsDocument, baseOptions);
      }
export function useCardUserLocationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CardUserLocationsQuery, CardUserLocationsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CardUserLocationsQuery, CardUserLocationsQueryVariables>(CardUserLocationsDocument, baseOptions);
        }
export type CardUserLocationsQueryHookResult = ReturnType<typeof useCardUserLocationsQuery>;
export type CardUserLocationsLazyQueryHookResult = ReturnType<typeof useCardUserLocationsLazyQuery>;
export type CardUserLocationsQueryResult = ApolloReactCommon.QueryResult<CardUserLocationsQuery, CardUserLocationsQueryVariables>;
export const GetAccessTokenDocument = gql`
    query GetAccessToken($publicToken: String!) {
  getAccessToken(publicToken: $publicToken) {
    ...PlaidAccessToken
  }
}
    ${PlaidAccessTokenFragmentDoc}`;
export type GetAccessTokenComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAccessTokenQuery, GetAccessTokenQueryVariables>, 'query'> & ({ variables: GetAccessTokenQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetAccessTokenComponent = (props: GetAccessTokenComponentProps) => (
      <ApolloReactComponents.Query<GetAccessTokenQuery, GetAccessTokenQueryVariables> query={GetAccessTokenDocument} {...props} />
    );
    

/**
 * __useGetAccessTokenQuery__
 *
 * To run a query within a React component, call `useGetAccessTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccessTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccessTokenQuery({
 *   variables: {
 *      publicToken: // value for 'publicToken'
 *   },
 * });
 */
export function useGetAccessTokenQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAccessTokenQuery, GetAccessTokenQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAccessTokenQuery, GetAccessTokenQueryVariables>(GetAccessTokenDocument, baseOptions);
      }
export function useGetAccessTokenLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAccessTokenQuery, GetAccessTokenQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAccessTokenQuery, GetAccessTokenQueryVariables>(GetAccessTokenDocument, baseOptions);
        }
export type GetAccessTokenQueryHookResult = ReturnType<typeof useGetAccessTokenQuery>;
export type GetAccessTokenLazyQueryHookResult = ReturnType<typeof useGetAccessTokenLazyQuery>;
export type GetAccessTokenQueryResult = ApolloReactCommon.QueryResult<GetAccessTokenQuery, GetAccessTokenQueryVariables>;
export const GetAccessTokensDocument = gql`
    query GetAccessTokens {
  settings {
    ...UserSettings
  }
  getAccessTokens {
    ...PlaidAccessToken
    item {
      ...PlaidItem
    }
    institution {
      ...PlaidInstitution
    }
  }
}
    ${UserSettingsFragmentDoc}
${PlaidAccessTokenFragmentDoc}
${PlaidItemFragmentDoc}
${PlaidInstitutionFragmentDoc}`;
export type GetAccessTokensComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAccessTokensQuery, GetAccessTokensQueryVariables>, 'query'>;

    export const GetAccessTokensComponent = (props: GetAccessTokensComponentProps) => (
      <ApolloReactComponents.Query<GetAccessTokensQuery, GetAccessTokensQueryVariables> query={GetAccessTokensDocument} {...props} />
    );
    

/**
 * __useGetAccessTokensQuery__
 *
 * To run a query within a React component, call `useGetAccessTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccessTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccessTokensQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccessTokensQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAccessTokensQuery, GetAccessTokensQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAccessTokensQuery, GetAccessTokensQueryVariables>(GetAccessTokensDocument, baseOptions);
      }
export function useGetAccessTokensLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAccessTokensQuery, GetAccessTokensQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAccessTokensQuery, GetAccessTokensQueryVariables>(GetAccessTokensDocument, baseOptions);
        }
export type GetAccessTokensQueryHookResult = ReturnType<typeof useGetAccessTokensQuery>;
export type GetAccessTokensLazyQueryHookResult = ReturnType<typeof useGetAccessTokensLazyQuery>;
export type GetAccessTokensQueryResult = ApolloReactCommon.QueryResult<GetAccessTokensQuery, GetAccessTokensQueryVariables>;
export const GetAccessTokensWithInstitutionsDocument = gql`
    query GetAccessTokensWithInstitutions {
  settings {
    ...UserSettings
  }
  getAccessTokens {
    ...PlaidAccessToken
    item {
      ...PlaidItem
    }
    institution {
      ...PlaidInstitution
    }
  }
}
    ${UserSettingsFragmentDoc}
${PlaidAccessTokenFragmentDoc}
${PlaidItemFragmentDoc}
${PlaidInstitutionFragmentDoc}`;
export type GetAccessTokensWithInstitutionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAccessTokensWithInstitutionsQuery, GetAccessTokensWithInstitutionsQueryVariables>, 'query'>;

    export const GetAccessTokensWithInstitutionsComponent = (props: GetAccessTokensWithInstitutionsComponentProps) => (
      <ApolloReactComponents.Query<GetAccessTokensWithInstitutionsQuery, GetAccessTokensWithInstitutionsQueryVariables> query={GetAccessTokensWithInstitutionsDocument} {...props} />
    );
    

/**
 * __useGetAccessTokensWithInstitutionsQuery__
 *
 * To run a query within a React component, call `useGetAccessTokensWithInstitutionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccessTokensWithInstitutionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccessTokensWithInstitutionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccessTokensWithInstitutionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAccessTokensWithInstitutionsQuery, GetAccessTokensWithInstitutionsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAccessTokensWithInstitutionsQuery, GetAccessTokensWithInstitutionsQueryVariables>(GetAccessTokensWithInstitutionsDocument, baseOptions);
      }
export function useGetAccessTokensWithInstitutionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAccessTokensWithInstitutionsQuery, GetAccessTokensWithInstitutionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAccessTokensWithInstitutionsQuery, GetAccessTokensWithInstitutionsQueryVariables>(GetAccessTokensWithInstitutionsDocument, baseOptions);
        }
export type GetAccessTokensWithInstitutionsQueryHookResult = ReturnType<typeof useGetAccessTokensWithInstitutionsQuery>;
export type GetAccessTokensWithInstitutionsLazyQueryHookResult = ReturnType<typeof useGetAccessTokensWithInstitutionsLazyQuery>;
export type GetAccessTokensWithInstitutionsQueryResult = ApolloReactCommon.QueryResult<GetAccessTokensWithInstitutionsQuery, GetAccessTokensWithInstitutionsQueryVariables>;
export const GetAccessTokensWithInstitutionStatusDocument = gql`
    query GetAccessTokensWithInstitutionStatus {
  settings {
    ...UserSettings
  }
  getAccessTokens {
    ...PlaidAccessToken
    item {
      ...PlaidItem
    }
    institution {
      ...PlaidInstitution
      status {
        ...PlaidInstitutionStatus
      }
    }
  }
}
    ${UserSettingsFragmentDoc}
${PlaidAccessTokenFragmentDoc}
${PlaidItemFragmentDoc}
${PlaidInstitutionFragmentDoc}
${PlaidInstitutionStatusFragmentDoc}`;
export type GetAccessTokensWithInstitutionStatusComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetAccessTokensWithInstitutionStatusQuery, GetAccessTokensWithInstitutionStatusQueryVariables>, 'query'>;

    export const GetAccessTokensWithInstitutionStatusComponent = (props: GetAccessTokensWithInstitutionStatusComponentProps) => (
      <ApolloReactComponents.Query<GetAccessTokensWithInstitutionStatusQuery, GetAccessTokensWithInstitutionStatusQueryVariables> query={GetAccessTokensWithInstitutionStatusDocument} {...props} />
    );
    

/**
 * __useGetAccessTokensWithInstitutionStatusQuery__
 *
 * To run a query within a React component, call `useGetAccessTokensWithInstitutionStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccessTokensWithInstitutionStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccessTokensWithInstitutionStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccessTokensWithInstitutionStatusQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAccessTokensWithInstitutionStatusQuery, GetAccessTokensWithInstitutionStatusQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAccessTokensWithInstitutionStatusQuery, GetAccessTokensWithInstitutionStatusQueryVariables>(GetAccessTokensWithInstitutionStatusDocument, baseOptions);
      }
export function useGetAccessTokensWithInstitutionStatusLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAccessTokensWithInstitutionStatusQuery, GetAccessTokensWithInstitutionStatusQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAccessTokensWithInstitutionStatusQuery, GetAccessTokensWithInstitutionStatusQueryVariables>(GetAccessTokensWithInstitutionStatusDocument, baseOptions);
        }
export type GetAccessTokensWithInstitutionStatusQueryHookResult = ReturnType<typeof useGetAccessTokensWithInstitutionStatusQuery>;
export type GetAccessTokensWithInstitutionStatusLazyQueryHookResult = ReturnType<typeof useGetAccessTokensWithInstitutionStatusLazyQuery>;
export type GetAccessTokensWithInstitutionStatusQueryResult = ApolloReactCommon.QueryResult<GetAccessTokensWithInstitutionStatusQuery, GetAccessTokensWithInstitutionStatusQueryVariables>;
export const GetCachedTransactionsDocument = gql`
    query GetCachedTransactions($startDate: Date, $endDate: Date, $page: Int, $perPage: Int) {
  settings {
    ...UserSettings
  }
  getAccessTokens {
    ...PlaidAccessToken
    item {
      ...PlaidItem
    }
    institution {
      ...PlaidInstitution
      status {
        ...PlaidInstitutionStatus
      }
    }
  }
  getCachedTransactions(startDate: $startDate, endDate: $endDate, page: $page, perPage: $perPage) {
    total_transactions
    accounts {
      ...PlaidAccount
      transactions_ready
      institution_id
      item_id
    }
    transactions {
      ...PlaidTransaction
    }
  }
}
    ${UserSettingsFragmentDoc}
${PlaidAccessTokenFragmentDoc}
${PlaidItemFragmentDoc}
${PlaidInstitutionFragmentDoc}
${PlaidInstitutionStatusFragmentDoc}
${PlaidAccountFragmentDoc}
${PlaidTransactionFragmentDoc}`;
export type GetCachedTransactionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCachedTransactionsQuery, GetCachedTransactionsQueryVariables>, 'query'>;

    export const GetCachedTransactionsComponent = (props: GetCachedTransactionsComponentProps) => (
      <ApolloReactComponents.Query<GetCachedTransactionsQuery, GetCachedTransactionsQueryVariables> query={GetCachedTransactionsDocument} {...props} />
    );
    

/**
 * __useGetCachedTransactionsQuery__
 *
 * To run a query within a React component, call `useGetCachedTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCachedTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCachedTransactionsQuery({
 *   variables: {
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetCachedTransactionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCachedTransactionsQuery, GetCachedTransactionsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCachedTransactionsQuery, GetCachedTransactionsQueryVariables>(GetCachedTransactionsDocument, baseOptions);
      }
export function useGetCachedTransactionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCachedTransactionsQuery, GetCachedTransactionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCachedTransactionsQuery, GetCachedTransactionsQueryVariables>(GetCachedTransactionsDocument, baseOptions);
        }
export type GetCachedTransactionsQueryHookResult = ReturnType<typeof useGetCachedTransactionsQuery>;
export type GetCachedTransactionsLazyQueryHookResult = ReturnType<typeof useGetCachedTransactionsLazyQuery>;
export type GetCachedTransactionsQueryResult = ApolloReactCommon.QueryResult<GetCachedTransactionsQuery, GetCachedTransactionsQueryVariables>;
export const GetIdentityDocument = gql`
    query GetIdentity($accessToken: String!) {
  getIdentity(accessToken: $accessToken) {
    accounts {
      ...PlaidAccountWithOwners
    }
    item {
      ...PlaidItem
    }
  }
}
    ${PlaidAccountWithOwnersFragmentDoc}
${PlaidItemFragmentDoc}`;
export type GetIdentityComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetIdentityQuery, GetIdentityQueryVariables>, 'query'> & ({ variables: GetIdentityQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetIdentityComponent = (props: GetIdentityComponentProps) => (
      <ApolloReactComponents.Query<GetIdentityQuery, GetIdentityQueryVariables> query={GetIdentityDocument} {...props} />
    );
    

/**
 * __useGetIdentityQuery__
 *
 * To run a query within a React component, call `useGetIdentityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIdentityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIdentityQuery({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *   },
 * });
 */
export function useGetIdentityQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetIdentityQuery, GetIdentityQueryVariables>) {
        return ApolloReactHooks.useQuery<GetIdentityQuery, GetIdentityQueryVariables>(GetIdentityDocument, baseOptions);
      }
export function useGetIdentityLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetIdentityQuery, GetIdentityQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetIdentityQuery, GetIdentityQueryVariables>(GetIdentityDocument, baseOptions);
        }
export type GetIdentityQueryHookResult = ReturnType<typeof useGetIdentityQuery>;
export type GetIdentityLazyQueryHookResult = ReturnType<typeof useGetIdentityLazyQuery>;
export type GetIdentityQueryResult = ApolloReactCommon.QueryResult<GetIdentityQuery, GetIdentityQueryVariables>;
export const GetSettingsDocument = gql`
    query GetSettings {
  settings {
    ...UserSettings
  }
}
    ${UserSettingsFragmentDoc}`;
export type GetSettingsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetSettingsQuery, GetSettingsQueryVariables>, 'query'>;

    export const GetSettingsComponent = (props: GetSettingsComponentProps) => (
      <ApolloReactComponents.Query<GetSettingsQuery, GetSettingsQueryVariables> query={GetSettingsDocument} {...props} />
    );
    

/**
 * __useGetSettingsQuery__
 *
 * To run a query within a React component, call `useGetSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSettingsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetSettingsQuery, GetSettingsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetSettingsQuery, GetSettingsQueryVariables>(GetSettingsDocument, baseOptions);
      }
export function useGetSettingsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetSettingsQuery, GetSettingsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetSettingsQuery, GetSettingsQueryVariables>(GetSettingsDocument, baseOptions);
        }
export type GetSettingsQueryHookResult = ReturnType<typeof useGetSettingsQuery>;
export type GetSettingsLazyQueryHookResult = ReturnType<typeof useGetSettingsLazyQuery>;
export type GetSettingsQueryResult = ApolloReactCommon.QueryResult<GetSettingsQuery, GetSettingsQueryVariables>;
export const GetTransactionsDocument = gql`
    query GetTransactions($accessToken: String!, $startDate: Date, $endDate: Date, $page: Int, $perPage: Int) {
  getTransactions(accessToken: $accessToken, startDate: $startDate, endDate: $endDate, page: $page, perPage: $perPage) {
    total_transactions
    accounts {
      ...PlaidAccount
    }
    transactions {
      ...PlaidTransaction
    }
    item {
      ...PlaidItem
    }
  }
}
    ${PlaidAccountFragmentDoc}
${PlaidTransactionFragmentDoc}
${PlaidItemFragmentDoc}`;
export type GetTransactionsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTransactionsQuery, GetTransactionsQueryVariables>, 'query'> & ({ variables: GetTransactionsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetTransactionsComponent = (props: GetTransactionsComponentProps) => (
      <ApolloReactComponents.Query<GetTransactionsQuery, GetTransactionsQueryVariables> query={GetTransactionsDocument} {...props} />
    );
    

/**
 * __useGetTransactionsQuery__
 *
 * To run a query within a React component, call `useGetTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionsQuery({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetTransactionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTransactionsQuery, GetTransactionsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(GetTransactionsDocument, baseOptions);
      }
export function useGetTransactionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTransactionsQuery, GetTransactionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(GetTransactionsDocument, baseOptions);
        }
export type GetTransactionsQueryHookResult = ReturnType<typeof useGetTransactionsQuery>;
export type GetTransactionsLazyQueryHookResult = ReturnType<typeof useGetTransactionsLazyQuery>;
export type GetTransactionsQueryResult = ApolloReactCommon.QueryResult<GetTransactionsQuery, GetTransactionsQueryVariables>;
export const TransactionActivityDocument = gql`
    query TransactionActivity($transaction_id: String!, $pagination: Pagination, $sort: Sort) {
  verifyTransactionLocation(transaction_id: $transaction_id) {
    activity(pagination: $pagination, sort: $sort) {
      total
      data {
        ...TransactionActivity
      }
    }
  }
}
    ${TransactionActivityFragmentDoc}`;
export type TransactionActivityComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TransactionActivityQuery, TransactionActivityQueryVariables>, 'query'> & ({ variables: TransactionActivityQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TransactionActivityComponent = (props: TransactionActivityComponentProps) => (
      <ApolloReactComponents.Query<TransactionActivityQuery, TransactionActivityQueryVariables> query={TransactionActivityDocument} {...props} />
    );
    

/**
 * __useTransactionActivityQuery__
 *
 * To run a query within a React component, call `useTransactionActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useTransactionActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTransactionActivityQuery({
 *   variables: {
 *      transaction_id: // value for 'transaction_id'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useTransactionActivityQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TransactionActivityQuery, TransactionActivityQueryVariables>) {
        return ApolloReactHooks.useQuery<TransactionActivityQuery, TransactionActivityQueryVariables>(TransactionActivityDocument, baseOptions);
      }
export function useTransactionActivityLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TransactionActivityQuery, TransactionActivityQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TransactionActivityQuery, TransactionActivityQueryVariables>(TransactionActivityDocument, baseOptions);
        }
export type TransactionActivityQueryHookResult = ReturnType<typeof useTransactionActivityQuery>;
export type TransactionActivityLazyQueryHookResult = ReturnType<typeof useTransactionActivityLazyQuery>;
export type TransactionActivityQueryResult = ApolloReactCommon.QueryResult<TransactionActivityQuery, TransactionActivityQueryVariables>;
export const VerifiableTransactionsPageDocument = gql`
    query VerifiableTransactionsPage($type: String, $searchText: String, $filter: VerifiableTransactionsFilter, $pagination: Pagination, $sort: Sort) {
  verifiableTransactionsPage(type: $type, searchText: $searchText, filter: $filter, pagination: $pagination, sort: $sort) {
    total_transactions
    accounts {
      ...PlaidAccount
    }
    transactions {
      ...PlaidTransaction
      verification_status
      verification_reason
      verification_date
      verification_by
    }
  }
}
    ${PlaidAccountFragmentDoc}
${PlaidTransactionFragmentDoc}`;
export type VerifiableTransactionsPageComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<VerifiableTransactionsPageQuery, VerifiableTransactionsPageQueryVariables>, 'query'>;

    export const VerifiableTransactionsPageComponent = (props: VerifiableTransactionsPageComponentProps) => (
      <ApolloReactComponents.Query<VerifiableTransactionsPageQuery, VerifiableTransactionsPageQueryVariables> query={VerifiableTransactionsPageDocument} {...props} />
    );
    

/**
 * __useVerifiableTransactionsPageQuery__
 *
 * To run a query within a React component, call `useVerifiableTransactionsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifiableTransactionsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifiableTransactionsPageQuery({
 *   variables: {
 *      type: // value for 'type'
 *      searchText: // value for 'searchText'
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useVerifiableTransactionsPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<VerifiableTransactionsPageQuery, VerifiableTransactionsPageQueryVariables>) {
        return ApolloReactHooks.useQuery<VerifiableTransactionsPageQuery, VerifiableTransactionsPageQueryVariables>(VerifiableTransactionsPageDocument, baseOptions);
      }
export function useVerifiableTransactionsPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<VerifiableTransactionsPageQuery, VerifiableTransactionsPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<VerifiableTransactionsPageQuery, VerifiableTransactionsPageQueryVariables>(VerifiableTransactionsPageDocument, baseOptions);
        }
export type VerifiableTransactionsPageQueryHookResult = ReturnType<typeof useVerifiableTransactionsPageQuery>;
export type VerifiableTransactionsPageLazyQueryHookResult = ReturnType<typeof useVerifiableTransactionsPageLazyQuery>;
export type VerifiableTransactionsPageQueryResult = ApolloReactCommon.QueryResult<VerifiableTransactionsPageQuery, VerifiableTransactionsPageQueryVariables>;
export const VerifiableTransactionsPageAdminDocument = gql`
    query VerifiableTransactionsPageAdmin($type: String, $userId: String, $searchText: String, $filter: VerifiableTransactionsFilter, $pagination: Pagination, $sort: Sort) {
  verifiableTransactionsPageAdmin(type: $type, userId: $userId, searchText: $searchText, filter: $filter, pagination: $pagination, sort: $sort) {
    total_transactions
    accounts {
      ...PlaidAccount
      userId
      institution_id
    }
    transactions {
      ...PlaidTransaction
      userId
      verification_status
      verification_reason
      verification_date
      verification_by
    }
    cardUsers {
      userId
      photoURL
      displayName
      email
    }
    institutions {
      ...PlaidInstitution
    }
  }
}
    ${PlaidAccountFragmentDoc}
${PlaidTransactionFragmentDoc}
${PlaidInstitutionFragmentDoc}`;
export type VerifiableTransactionsPageAdminComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<VerifiableTransactionsPageAdminQuery, VerifiableTransactionsPageAdminQueryVariables>, 'query'>;

    export const VerifiableTransactionsPageAdminComponent = (props: VerifiableTransactionsPageAdminComponentProps) => (
      <ApolloReactComponents.Query<VerifiableTransactionsPageAdminQuery, VerifiableTransactionsPageAdminQueryVariables> query={VerifiableTransactionsPageAdminDocument} {...props} />
    );
    

/**
 * __useVerifiableTransactionsPageAdminQuery__
 *
 * To run a query within a React component, call `useVerifiableTransactionsPageAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifiableTransactionsPageAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifiableTransactionsPageAdminQuery({
 *   variables: {
 *      type: // value for 'type'
 *      userId: // value for 'userId'
 *      searchText: // value for 'searchText'
 *      filter: // value for 'filter'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useVerifiableTransactionsPageAdminQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<VerifiableTransactionsPageAdminQuery, VerifiableTransactionsPageAdminQueryVariables>) {
        return ApolloReactHooks.useQuery<VerifiableTransactionsPageAdminQuery, VerifiableTransactionsPageAdminQueryVariables>(VerifiableTransactionsPageAdminDocument, baseOptions);
      }
export function useVerifiableTransactionsPageAdminLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<VerifiableTransactionsPageAdminQuery, VerifiableTransactionsPageAdminQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<VerifiableTransactionsPageAdminQuery, VerifiableTransactionsPageAdminQueryVariables>(VerifiableTransactionsPageAdminDocument, baseOptions);
        }
export type VerifiableTransactionsPageAdminQueryHookResult = ReturnType<typeof useVerifiableTransactionsPageAdminQuery>;
export type VerifiableTransactionsPageAdminLazyQueryHookResult = ReturnType<typeof useVerifiableTransactionsPageAdminLazyQuery>;
export type VerifiableTransactionsPageAdminQueryResult = ApolloReactCommon.QueryResult<VerifiableTransactionsPageAdminQuery, VerifiableTransactionsPageAdminQueryVariables>;
export const VerifyTransactionLocationDocument = gql`
    query VerifyTransactionLocation($transaction_id: String!) {
  verifyTransactionLocation(transaction_id: $transaction_id) {
    transaction_id
    institution {
      ...PlaidInstitution
    }
    account {
      ...PlaidAccount
    }
    transaction {
      ...PlaidTransaction
      verification_status
      verification_reason
      verification_date
      verification_by
    }
    during {
      total
    }
    near {
      total
    }
  }
}
    ${PlaidInstitutionFragmentDoc}
${PlaidAccountFragmentDoc}
${PlaidTransactionFragmentDoc}`;
export type VerifyTransactionLocationComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<VerifyTransactionLocationQuery, VerifyTransactionLocationQueryVariables>, 'query'> & ({ variables: VerifyTransactionLocationQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const VerifyTransactionLocationComponent = (props: VerifyTransactionLocationComponentProps) => (
      <ApolloReactComponents.Query<VerifyTransactionLocationQuery, VerifyTransactionLocationQueryVariables> query={VerifyTransactionLocationDocument} {...props} />
    );
    

/**
 * __useVerifyTransactionLocationQuery__
 *
 * To run a query within a React component, call `useVerifyTransactionLocationQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyTransactionLocationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyTransactionLocationQuery({
 *   variables: {
 *      transaction_id: // value for 'transaction_id'
 *   },
 * });
 */
export function useVerifyTransactionLocationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<VerifyTransactionLocationQuery, VerifyTransactionLocationQueryVariables>) {
        return ApolloReactHooks.useQuery<VerifyTransactionLocationQuery, VerifyTransactionLocationQueryVariables>(VerifyTransactionLocationDocument, baseOptions);
      }
export function useVerifyTransactionLocationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<VerifyTransactionLocationQuery, VerifyTransactionLocationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<VerifyTransactionLocationQuery, VerifyTransactionLocationQueryVariables>(VerifyTransactionLocationDocument, baseOptions);
        }
export type VerifyTransactionLocationQueryHookResult = ReturnType<typeof useVerifyTransactionLocationQuery>;
export type VerifyTransactionLocationLazyQueryHookResult = ReturnType<typeof useVerifyTransactionLocationLazyQuery>;
export type VerifyTransactionLocationQueryResult = ApolloReactCommon.QueryResult<VerifyTransactionLocationQuery, VerifyTransactionLocationQueryVariables>;