const Status = require(‘…/database/models/Status’);
const Asset = require(‘…/database/models/Asset’);

exports.getStatuses = async (req, res) => {
  try {
    const statuses = await Status.findAll({
      where: { userId: req.user.id },
      include: [{ model: Asset, as: ‘asset’ }],
    });
    res.status(200).json({ statuses });
  } catch (error) {
    res.status(500).json({ message: ‘Error fetching statuses’, error });
  }
};

exports.createStatus = async (req, res) => {
  try {
    const { assetId, status, responseTime } = req.body;
    const newStatus = await Status.create({
      assetId,
      status,
      responseTime,
      userId: req.user.id,
    });
    res.status(201).json({ message: ‘Status created’, status: newStatus });
  } catch (error) {
    res.status(500).json({ message: ‘Error creating status’, error });
  }
};

exports.deleteStatus = async (req, res) => {
  try {
    const { id } = req.params;
    await Status.destroy({ where: { id, userId: req.user.id } });
    res.status(200).json({ message: ‘Status deleted’ });
  } catch (error) {
    res.status(500).json({ message: ‘Error deleting status’, error });
  }
};
