import Comic from "../models/comic.model.js";

export const getComics = async (req, res) => {
  const comics = await Comic.find({
    user: req.user.id
  }).papulate('user')
  res.json(comics);
};

export const getAllUserComics = async (req, res) => {
  const comics = await Comic.find();
  res.json(comics);
};


export const createComic = async (req, res) => {
  const { title, description, date } = req.body;

  const newComic = new Comic({
    title,
    description,
    date,
    user: req.user.id
  });
  const savedComic = await newComic.save();
  res.json(savedComic);
};

export const getComic = async (req, res) => {
  const comic = await Comic.findById(req.params.id).populate('user');
  if (!comic) return res.status(404).json({ message: "comic not found" });
  res.json(comic);
};

export const deleteComic = async (req, res) => {
  const comic = await Comic.findByIdAndDelete(req.params.id);
  if (!comic) return res.status(404).json({ message: "comic not found" });
  return res.sendStatus(204);
};

export const updateComic = async (req, res) => {
  const comic = await Comic.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!comic) return res.status(404).json({ message: "comic not found" });
  res.json(comic);
};
