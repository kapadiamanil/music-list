// Controller to return the response JSON when the route is called
import { response } from "../response";

export const getMusicList = (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    next(error);
  }
};
