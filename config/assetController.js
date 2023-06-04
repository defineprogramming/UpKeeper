const Asset = require(‘…/database/models/Asset’);

exports.getAssets = async (req, res) => {
  try {
    const assets = await Asset.findAll({ where: { userId: req.user.id } });
    res.status(200).json({ assets });
  } catch (error) {
    res.status(500).json({ message: ‘Error fetching assets’, error });
  }
};

exports.createAsset = async (req, res) => {
  try {
    const { name, url } = req.body;
    const asset = await Asset.create({ name, url, userId: req.user.id });
    res.status(201).json({ message: ‘Asset created’, asset });
  } catch (error) {
    res.status(500).json({ message: ‘Error creating asset’, error });
  }
};

exports.updateAsset = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, url } = req.body;
    const asset = await Asset.update({ name, url }, { where: { id, userId: req.user.id } });
    res.status(200).json({ message: ‘Asset updated’, asset });
  } catch (error) {
    res.status(500).json({ message: ‘Error updating asset’, error });
  }
};

exports.deleteAsset = async (req, res) => {
  try {
    const { id } = req.params;
    await Asset.destroy({ where: { id, userId: req.user.id } });
    res.status(200).json({ message: ‘Asset deleted’ });
  } catch (error) {
    res.status(500).json({ message: ‘Error deleting asset’, error });
  }
};
