//Initial State for active menu
export const getActiveMenuItemState = (data, initialActiveItem) => {
    let activeMenuItemObject = {};
  
    data.items
      //get title
      .map((item) => item.title)
      //loop through each title &
      //return {title: boolean}
      .forEach((title, index) => {
  
        activeMenuItemObject = {
          ...activeMenuItemObject,
          [title]: title === initialActiveItem ? true : false,
        };
  
      });
  
    /*
      activeMenuItem: {
        about: true;
        contact: false;
        home: false;
        projects: false;
        resume: false;
        skills;
      }
    */
    return activeMenuItemObject;
  };
  
  //updated State for active menu
  export const getUpdatedActiveMenuItemState = (prevState, currentTitle) => {
    let state = {};
  
    //set active item to true & others false
    for (const key in prevState) {
      if (key === currentTitle) state = { ...state, [key]: true };
      else state = { ...state, [key]: false };
    }
  
    return state;
  };
  