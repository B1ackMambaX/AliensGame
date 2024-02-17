import MainMenu from "../mainMenu/MainMenu";
import "./app.scss";

import { useSelector } from "react-redux";
import { rootState } from "../../store/store";
import GameState from "../../types/gameState";
import Tutorial from "../tutorial/Tutorial";

const App = () => {
	const gameState = useSelector((state: rootState) => state.gameState);
	const chooseScreen = () => {
		switch (gameState) {
			case GameState.MAIN_MENU:
				return <MainMenu />;
			case GameState.TUTORIAL:
				return <Tutorial />;
		}
	};
	return (
		<div className="container">
			{chooseScreen()}
		</div>
	);
};

export default App;
