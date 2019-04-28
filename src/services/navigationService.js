let navigation = null;

export const setNavigation = navigationData => {
  navigation = navigationData;
};

export const goToPage = (pageName) => {
    navigation.push(pageName);
};

export const goBack = () => {
  if(navigation.location.pathname !== '/') navigation.goBack(null);
};
