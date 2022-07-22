import { useReducer } from "react";

const Navbar = ({currentPage, setCurrentPage}) => {
const initialState = { page: 'home'};

    const reducer = (state, action) => {
      switch (action.type) {
        case "messages":
            return { page: 'messages' };
        case "home":
          return { page: 'home' };
        case "newPost":
          return { page:'newPost' };
        case "discover":
          return { page: 'discover'};
        case "notifications":
          return { page: "notifications" };
        case "profile":
          return { page: 'profile' };
        default:
          throw new Error('My special error');
      }
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);

return (
  <nav>
    <div id="logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
        alt=""
        id="logo-img"
      />
    </div>
    <input type="text" placeholder="Search" id="home-searchbar" />
    <ul id="icons-list">
      <li onClick={(e) => dispatch({ type: e.target.id })}>
        <ion-icon
          name={`home${state.page == "home" ? "" : "-outline"}`}
          id="home"
        ></ion-icon>
      </li>
      <li onClick={(e) => dispatch({ type: e.target.id })}>
        <ion-icon
          name={`chatbubble${state.page == "messages" ? "" : "-outline"}`}
          id="messages"
        ></ion-icon>
      </li>
      <li onClick={(e) => dispatch({ type: e.target.id })}>
        <ion-icon
          name={`add-circle${state.page == "newPost" ? "" : "-outline"}`}
          id="newPost"
        ></ion-icon>
      </li>
      <li onClick={(e) => dispatch({ type: e.target.id })}>
        <ion-icon
          name={`compass${state.page == "discover" ? "" : "-outline"}`}
          id="discover"
        ></ion-icon>
      </li>
      <li onClick={(e) => dispatch({ type: e.target.id })}>
        <ion-icon
          name={`heart${state.page == "notifications" ? "" : "-outline"}`}
          id="notifications"
        ></ion-icon>
      </li>
      <li onClick={(e) => dispatch({ type: e.target.id })}>
        <ion-icon name="person-circle-outline" id="profile"></ion-icon>
      </li>
    </ul>
  </nav>
);
}

export default Navbar