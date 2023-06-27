export const genres: Record<string, string> = {
  action: "Боевик",
  comedy: "Комедия",
  fantasy: "Фэнтези",
  horror: "Ужасы",
};

export const selectItemsGenre = Object.entries(genres).map(([id, name]) => ({
  id,
  name,
}));
