"server-only";
import type { Locale } from "@/i18n.config";

// const dictionaries = {
//   en: async () => ({
//     ...(await import(`@/dictionaries/en/common.json`)).default,
//     ...(await import(`@/dictionaries/en/meta.json`)).default,
//     ...(await import(`@/dictionaries/en/dashboard.json`)).default,
//     ...(await import(`@/dictionaries/en/dashboard_about.json`)).default,
//     ...(await import(`@/dictionaries/en/dashboard_rule.json`)).default,
//     ...(await import(`@/dictionaries/en/dashboard_contacts.json`)).default,
//     ...(await import(`@/dictionaries/en/dashboard_tabs.json`)).default,
//     ...(await import(`@/dictionaries/en/dashboard_tickets.json`)).default,
//     ...(await import(`@/dictionaries/en/dashboard_rent.json`)).default,
//     ...(await import(`@/dictionaries/en/dashboard_city.json`)).default,
//     ...(await import(`@/dictionaries/en/dashboard_bus.json`)).default,
//     ...(await import(`@/dictionaries/en/dashboard_rout.json`)).default,
//     ...(await import(`@/dictionaries/en/dashboard_parcels.json`)).default,
//     ...(await import(`@/dictionaries/en/dashboard_journey.json`)).default,
//     ...(await import(`@/dictionaries/en/footer.json`)).default,
//     ...(await import(`@/dictionaries/en/header.json`)).default,
//     ...(await import(`@/dictionaries/en/infobuy.json`)).default,
//     ...(await import(`@/dictionaries/en/login.json`)).default,
//     ...(await import(`@/dictionaries/en/main.json`)).default,
//     ...(await import(`@/dictionaries/en/popular.json`)).default,
//     ...(await import(`@/dictionaries/en/registration.json`)).default,
//     ...(await import(`@/dictionaries/en/content.json`)).default,
//     ...(await import(`@/dictionaries/en/contact.json`)).default,
//     ...(await import(`@/dictionaries/en/about.json`)).default,
//     ...(await import(`@/dictionaries/en/rule.json`)).default,
//     ...(await import(`@/dictionaries/en/parcels.json`)).default,
//     ...(await import(`@/dictionaries/en/bus_rent.json`)).default,
//     ...(await import(`@/dictionaries/en/profile.json`)).default,
//     ...(await import(`@/dictionaries/en/order.json`)).default,
//   }),

//   uk: async () => ({
//     ...(await import(`@/dictionaries/uk/common.json`)).default,
//     ...(await import(`@/dictionaries/uk/meta.json`)).default,
//     ...(await import(`@/dictionaries/uk/dashboard.json`)).default,
//     ...(await import(`@/dictionaries/uk/dashboard_about.json`)).default,
//     ...(await import(`@/dictionaries/uk/dashboard_rule.json`)).default,
//     ...(await import(`@/dictionaries/uk/dashboard_bus.json`)).default,
//     ...(await import(`@/dictionaries/uk/dashboard_contacts.json`)).default,
//     ...(await import(`@/dictionaries/uk/dashboard_rout.json`)).default,
//     ...(await import(`@/dictionaries/uk/dashboard_tabs.json`)).default,
//     ...(await import(`@/dictionaries/uk/dashboard_city.json`)).default,
//     ...(await import(`@/dictionaries/uk/dashboard_tickets.json`)).default,
//     ...(await import(`@/dictionaries/uk/dashboard_parcels.json`)).default,
//     ...(await import(`@/dictionaries/uk/dashboard_journey.json`)).default,
//     ...(await import(`@/dictionaries/uk/dashboard_rent.json`)).default,
//     ...(await import(`@/dictionaries/uk/footer.json`)).default,
//     ...(await import(`@/dictionaries/uk/header.json`)).default,
//     ...(await import(`@/dictionaries/uk/infobuy.json`)).default,
//     ...(await import(`@/dictionaries/uk/login.json`)).default,
//     ...(await import(`@/dictionaries/uk/main.json`)).default,
//     ...(await import(`@/dictionaries/uk/popular.json`)).default,
//     ...(await import(`@/dictionaries/uk/registration.json`)).default,
//     ...(await import(`@/dictionaries/uk/content.json`)).default,
//     ...(await import(`@/dictionaries/uk/contact.json`)).default,
//     ...(await import(`@/dictionaries/uk/about.json`)).default,
//     ...(await import(`@/dictionaries/uk/rule.json`)).default,
//     ...(await import(`@/dictionaries/uk/parcels.json`)).default,
//     ...(await import(`@/dictionaries/uk/bus_rent.json`)).default,
//     ...(await import(`@/dictionaries/uk/profile.json`)).default,
//     ...(await import(`@/dictionaries/uk/order.json`)).default,
//   }),

// };

const commonDictionaries = {
  en: async () => (await import(`@/dictionaries/en/common.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/common.json`)).default,
};

const metaDictionaries = {
  en: async () => (await import(`@/dictionaries/en/meta.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/meta.json`)).default,
};

const aboutDictionaries = {
  en: async () => (await import(`@/dictionaries/en/about.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/about.json`)).default,
};

const dashboardDictionaries = {
  en: async () => (await import(`@/dictionaries/en/dashboard.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/dashboard.json`)).default,
};

const dashboardAboutDictionaries = {
  en: async () =>
    (await import(`@/dictionaries/en/dashboard_about.json`)).default,
  uk: async () =>
    (await import(`@/dictionaries/uk/dashboard_about.json`)).default,
};

const dashboardContactsDictionaries = {
  en: async () =>
    (await import(`@/dictionaries/en/dashboard_contacts.json`)).default,
  uk: async () =>
    (await import(`@/dictionaries/uk/dashboard_contacts.json`)).default,
};

const dashboardParcelsDictionaries = {
  en: async () =>
    (await import(`@/dictionaries/en/dashboard_parcels.json`)).default,
  uk: async () =>
    (await import(`@/dictionaries/uk/dashboard_parcels.json`)).default,
};

const dashboardRuleDictionaries = {
  en: async () =>
    (await import(`@/dictionaries/en/dashboard_rule.json`)).default,
  uk: async () =>
    (await import(`@/dictionaries/uk/dashboard_rule.json`)).default,
};

const footerDictionaries = {
  en: async () => (await import(`@/dictionaries/en/footer.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/footer.json`)).default,
};

const headerDictionaries = {
  en: async () => (await import(`@/dictionaries/en/header.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/header.json`)).default,
};

const infobuyDictionaries = {
  en: async () => (await import(`@/dictionaries/en/infobuy.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/infobuy.json`)).default,
};

const loginDictionaries = {
  en: async () => (await import(`@/dictionaries/en/login.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/login.json`)).default,
};

const mainDictionaries = {
  en: async () => (await import(`@/dictionaries/en/main.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/main.json`)).default,
};

const popularDictionaries = {
  en: async () => (await import(`@/dictionaries/en/popular.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/popular.json`)).default,
};

const registrationDictionaries = {
  en: async () => (await import(`@/dictionaries/en/registration.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/registration.json`)).default,
};

const contentDictionaries = {
  en: async () => (await import(`@/dictionaries/en/content.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/content.json`)).default,
};

const contactDictionaries = {
  en: async () => (await import(`@/dictionaries/en/contact.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/contact.json`)).default,
};

const ruleDictionaries = {
  en: async () => (await import(`@/dictionaries/en/rule.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/rule.json`)).default,
};

const parcelsDictionaries = {
  en: async () => (await import(`@/dictionaries/en/parcels.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/parcels.json`)).default,
};

const busRentDictionaries = {
  en: async () => (await import(`@/dictionaries/en/bus_rent.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/bus_rent.json`)).default,
};

const profileDictionaries = {
  en: async () => (await import(`@/dictionaries/en/profile.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/profile.json`)).default,
};

const orderDictionaries = {
  en: async () => (await import(`@/dictionaries/en/order.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/order.json`)).default,
};

const dashboardTubsDictionaries = {
  en: async () =>
    (await import(`@/dictionaries/en/dashboard_tabs.json`)).default,
  uk: async () =>
    (await import(`@/dictionaries/uk/dashboard_tabs.json`)).default,
};

const dashboardRentDictionaries = {
  en: async () =>
    (await import(`@/dictionaries/en/dashboard_rent.json`)).default,
  uk: async () =>
    (await import(`@/dictionaries/uk/dashboard_rent.json`)).default,
};

const dashboardBusDictionaries = {
  en: async () =>
    (await import(`@/dictionaries/en/dashboard_bus.json`)).default,
  uk: async () =>
    (await import(`@/dictionaries/uk/dashboard_bus.json`)).default,
};
const dashboardTicketsDictionaries = {
  en: async () =>
    (await import(`@/dictionaries/en/dashboard_tickets.json`)).default,
  uk: async () =>
    (await import(`@/dictionaries/uk/dashboard_tickets.json`)).default,
};

const dashboardRoutDictionaries = {
  en: async () =>
    (await import(`@/dictionaries/en/dashboard_rout.json`)).default,
  uk: async () =>
    (await import(`@/dictionaries/uk/dashboard_rout.json`)).default,
};

const dashboardCityDictionaries = {
  en: async () =>
    (await import(`@/dictionaries/en/dashboard_city.json`)).default,
  uk: async () =>
    (await import(`@/dictionaries/uk/dashboard_city.json`)).default,
};

const dashboardJourneyDictionaries = {
  en: async () =>
    (await import(`@/dictionaries/en/dashboard_journey.json`)).default,
  uk: async () =>
    (await import(`@/dictionaries/uk/dashboard_journey.json`)).default,
};
// export const getDictionary = async (lang: Locale) => dictionaries[lang]();

export const getDashboardDictionaries = async (lang: Locale) =>
  dashboardDictionaries[lang]();

export const getDashboardAboutDictionaries = async (lang: Locale) =>
  dashboardAboutDictionaries[lang]();

export const getDashboardParcelstDictionaries = async (lang: Locale) =>
  dashboardParcelsDictionaries[lang]();

export const getDashboardRuleDictionaries = async (lang: Locale) =>
  dashboardRuleDictionaries[lang]();

export const getFooterDictionaries = async (lang: Locale) =>
  footerDictionaries[lang]();

export const getHeaderDictionaries = async (lang: Locale) =>
  headerDictionaries[lang]();

export const getInfobuyDictionaries = async (lang: Locale) =>
  infobuyDictionaries[lang]();

export const getLoginDictionaries = async (lang: Locale) =>
  loginDictionaries[lang]();

export const getMainDictionaries = async (lang: Locale) =>
  mainDictionaries[lang]();

export const getPopularDictionaries = async (lang: Locale) =>
  popularDictionaries[lang]();

export const getRegistrationDictionaries = async (lang: Locale) =>
  registrationDictionaries[lang]();

export const getContentDictionaries = async (lang: Locale) =>
  contentDictionaries[lang]();

export const getContactDictionaries = async (lang: Locale) =>
  contactDictionaries[lang]();

export const getCommonDictionaries = async (lang: Locale) =>
  commonDictionaries[lang]();
export const getMetaDictionaries = async (lang: Locale) =>
  metaDictionaries[lang]();

export const getAboutDictionaries = async (lang: Locale) =>
  aboutDictionaries[lang]();

export const getRuleDictionaries = async (lang: Locale) =>
  ruleDictionaries[lang]();

export const getParcelsDictionaries = async (lang: Locale) =>
  parcelsDictionaries[lang]();

export const getBusRentDictionaries = async (lang: Locale) =>
  busRentDictionaries[lang]();

export const getProfileDictionaries = async (lang: Locale) =>
  profileDictionaries[lang]();

export const getOrderDictionaries = async (lang: Locale) =>
  orderDictionaries[lang]();

export const getDashboardTubsDictionaries = async (lang: Locale) =>
  dashboardTubsDictionaries[lang]();

export const getDashboardRentsDictionaries = async (lang: Locale) =>
  dashboardRentDictionaries[lang]();

export const getDashboardBusDictionaries = async (lang: Locale) =>
  dashboardBusDictionaries[lang]();

export const getDashboardContactsDictionaries = async (lang: Locale) =>
  dashboardContactsDictionaries[lang]();

export const getDashboardTicketsDictionaries = async (lang: Locale) =>
  dashboardTicketsDictionaries[lang]();

export const getDashboardRoutDictionaries = async (lang: Locale) =>
  dashboardRoutDictionaries[lang]();

export const getDashboardCityDictionaries = async (lang: Locale) =>
  dashboardCityDictionaries[lang]();

export const getDashboardJourneyDictionaries = async (lang: Locale) =>
  dashboardJourneyDictionaries[lang]();
