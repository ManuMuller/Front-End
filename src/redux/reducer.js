import * as actions from "./Actions/actionTypes";

const initialState = {
  pets: [],
  users: [],
  userDetail: [], //detail route
  petDetail: {}, //detail route
  switchRender: [], //switch
  token: null,
  userProfile: [], //usuario loggeado
  payment: {},
  tradePet: [], //mascota que se vá
  notification: [], //campanita
  conversations: [],
  messages: [],
  notViewedNotification: [], //no vistas
  viewedNotification: [], //vistas
  reportedPets: [],
  reportedUsers: [],
  deletedPets: [],
  deletedUsers: [],
  deletedUserReports: [],
  products: [],
  productDetail: [],
  query: "",
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    //SWITCHRENDER
    case actions.SWITCH_RENDER:
      return {
        ...state,
        switchRender: payload,
      };

    //GET ALL
    case actions.GET_ALL_PETS:
      return {
        ...state,
        pets: payload,
      };
    case actions.GET_ALL_USERS:
      return {
        ...state,
        users: payload,
      };
    case actions.GET_ALL_PRODUCTS:
      return {
        ...state,
        products: payload,
      }

    //GET BY NAME
    case actions.GET_USER_BY_NAME:
      return {
        ...state,
        users: payload,
      };
    case actions.GET_PET_BY_NAME:
      return {
        ...state,
        pets: payload,
      };
    //CHAT
    case actions.GET_CONVERSATIONS:
      return {
        ...state,
        conversations: payload,
      };
    case actions.GET_MESSAGES:
      return {
        ...state,
        messages: payload,
      };
    case actions.SEND_MESSAGE:
      return {
        ...state,
      };
    case actions.CHAT_WITH_USER:
      return {
        ...state,
      };

    //GET DETAIL
    case actions.GET_USER_DETAIL:
      return {
        ...state,
        userDetail: payload,
      };
    case actions.GET_PET_DETAIL:
      return {
        ...state,
        petDetail: payload,
      };
    case actions.GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: payload
      }

    //POSTS
    case actions.POST_PET:
      return {
        ...state,
      };
    case actions.CREATE_PRODUCT:
      return {
        ...state,
      }
    case actions.POST_USER:
      return {
        ...state,
      };
    case actions.POST_IMAGE:
      return {
        ...state,
      };
    //CLEAR
    case actions.CLEAR_STATE:
      return {
        ...state,
        userDetail: {}, //seteas a 0 el estado de nuevo para una nueva peticion
      };
    case actions.CLEAR_STATE_PET:
      return {
        ...state,
        petDetail: {}, //seteas a 0 el estado de nuevo para una nueva peticion
      };
    //UDPDATE
    case actions.PATCH_USER:
      return {
        ...state,
        userDetail: payload,
      };
    case actions.PATCH_PET:
      return {
        ...state,
        petDetail: payload,
      };
    //FILTROS
    case actions.FILTER_BY_QUERY:
      if (payload.length === 0) {
        return {
          ...state,
          query: "empty",
        };
      }
      return {
        ...state,
        pets: payload,
        query: "",
      };
    //LOGIN
    case actions.USER_LOGIN:
      return {
        ...state,
      };
    case actions.USER_LOGIN_GOOGLE:
      return {
        ...state,
      };
    case actions.GET_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
      };
    //ADOPT
    case actions.ADOPT:
      return {
        ...state,
        tradePet: payload,
      };
    case actions.ADOPT_EMAIL:
      return {
        ...state,
      };

    case actions.PAYMENT_MP:
      return {
        ...state,
        payment: payload,
      };
    case actions.INTERESTED_USERS:
      return {
        ...state,
        userDetail: payload,
      };
    case actions.NOT_VIEWED_NOTIFICATION:
      return {
        ...state,
        notViewedNotification: payload,
      };
    case actions.VIEWED_NOTIFICATION:
      return {
        ...state,
        viewedNotification: payload,
      };

    case actions.VIEWING_NOTIFICATION:
      return {
        ...state,
      };

    case actions.FORGOT_PASSWORD:
      return {
        ...state,
      };
    case actions.RESET_PASSWORD:
      return {
        ...state,
      };

    case actions.LIKE_PET:
      return {
        ...state,
      };
    case actions.REPORT_PET:
      return {
        ...state,
      };
    case actions.REPORT_USER:
      return {
        ...state,
      };
    case actions.GET_REPORTED_PETS:
      return {
        ...state,
        reportedPets: payload,
      };
    case actions.GET_REPORTED_USERS:
      return {
        ...state,
        reportedUsers: payload,
      };
    case actions.HANDLE_PET:
      return {
        ...state,
        pets: payload,
      };
    case actions.HANDLE_USER:
      return {
        ...state,
        users: payload,
      };
    case actions.HANDLE_PET_REPORT:
      return {
        ...state,
        reportedPets: payload,
      };
    case actions.HANDLE_USER_REPORT:
      return {
        ...state,
        reportedUsers: payload,
      };
    case actions.HANDLE_ADMIN:
      return {
        ...state,
        //userDetail: payload,
      };
    case actions.GET_DELETED_PETS:
      return {
        ...state,
        deletedPets: payload,
      };
    case actions.GET_DELETED_USERS:
      return {
        ...state,
        deletedUsers: payload,
      };
    case actions.HANDLE_USER_RESTORE:
      return {
        ...state,
        deletedUsers: payload,
      };
    case actions.HANDLE_USER_REPORT_RESTORE:
      return {
        ...state,
        deletedUserReports: payload,
      };
    case actions.GET_USER_REPORTS_SOLVED:
      return {
        ...state,
        deletedUserReports: payload,
      };
    default:
      return state;
  }
}
