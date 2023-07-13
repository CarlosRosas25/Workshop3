import { coursesModel } from "../models/courses.js";

export default class CourseServiceDao {
  constructor() {
    console.log("Working courses with Database persistence in mongodb");
  }

  getAll = async () => {
    let courses = await coursesModel.find().lean().populate("students");
    return courses;
  };

  saveCourse = async (course) => {
    let result = await coursesModel.create(course);
    return result;
  };
}
