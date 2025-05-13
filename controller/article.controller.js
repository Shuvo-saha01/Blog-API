import articles from "../model/article.model.js";

export const getAllArticles = async (req, res, next) => {
  try {
    if (req.query) {
      const { tags } = req.query;

      const article = await articles.find({ tags: tags });

      if (!article) {
        res.status(404).json({ error: "articles doesnot exist" });
      }

      res.status(201).json({ article });
    }

    const data = await articles.find();
    res.status(201).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getArticle = async (req, res, next) => {
  try {
    const id = req.params.id;

    const data = await articles.findById(id);

    res.status(201).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const postArticle = async (req, res, next) => {
  try {
    const { title, description, tags, image } = req.body;

    const article = await new articles({
      title,
      description,
      tags,
      image,
    });

    await article.save();

    res.status(201).json({
      article,
    });
  } catch (error) {
    next(error);
  }
};

export const updateArticle = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(404).json({ error: "article do not exist" });
    }

    const updatedArticle = await articles.findByIdAndUpdate(id, req.body);

    if (!updateArticle) {
      res.status(404).json({ error: "article do not exist" });
    }

    res.status(200).json({
      success: true,
      message: "The article is successfully updated",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteArticle = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!id) res.status(404).json({ error: "article not found" });

    await articles.findByIdAndDelete(id);

    res.status(201).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
