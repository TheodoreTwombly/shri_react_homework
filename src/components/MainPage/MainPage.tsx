import { MoviesList } from "../MoviesList/MoviesList";
import { Filters } from "../Filters/Filters";

import mainPage from "./mainPage.module.css";

export const MainPage = () => {
  return (
    <main className={mainPage.wrapper}>
      <Filters />
      <MoviesList />
    </main>
  );
};
