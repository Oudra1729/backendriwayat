// get novels
// get novels
const Novel = require('../models/novel.model');

exports.getNovels = async (req, res) => {
  try {
    const novels = await Novel.find();
    res.status(200).json(novels);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des romans', error });
  }
};

// create novel

// update novel

//

// create novel

// update novel

// delete novel