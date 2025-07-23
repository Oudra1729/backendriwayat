const Novel = require("../models/novel.model");

exports.getNovels = async (req, res) => {
  try {
    const novels = await Novel.find();
    res.status(200).json(novels);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des romans", error });
  }
};
exports.createNovel = async (req, res) => {
  try {
    const novel = new Novel(req.body);
    await novel.save();
    res.status(201).json(novel);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création du roman", error });
  }
};
exports.updateNovel = async (req, res) => {
  try {
    const { id } = req.params;
    const novel = await Novel.findByIdAndUpdate(id, req.body, { new: true });
    if (!novel) {
      return res.status(404).json({ message: "Roman non trouvé" });
    }
    res.status(200).json(novel);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour du roman", error });
  }
};
exports.deleteNovel = async (req, res) => {
  try {
    const { id } = req.params;
    const novel = await Novel.findByIdAndDelete(id);
    if (!novel) {
      return res.status(404).json({ message: "Roman non trouvé" });
    }
    res.status(200).json({ message: "Roman supprimé avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression du roman", error });
  }
};

exports.getNovelById = async (req, res) => {
  try {
    const { id } = req.params;
    const novel = await Novel.findById(id).populate('author', 'username');
    if (!novel) {
      return res.status(404).json({ message: "Roman non trouvé" });
    }       
    res.status(200).json(novel);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération du roman", error });
  }
}
