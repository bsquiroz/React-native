import { Router } from "express";
import {
    getTasks,
    getTask,
    getTaskCount,
    createTasks,
    deleteTasks,
    updateTasks,
} from "../controllers/task.controller";

const router = Router();

/**
 *  @swagger
 *  /tasks:
 *   get:
 *     description: Obtiene todas las tareas!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/tasks", getTasks);

/**
 * @swagger
 *  /tasks/count:
 *  get:
 *      sumary: Obtiene la cantidad de tareas
 */
router.get("/tasks/count", getTaskCount);

/**
 * @swagger
 *  /tasks/id:
 *  get:
 *      sumary: obtiene una tarea segun el id
 */
router.get("/tasks/:id", getTask);

/**
 * @swagger
 *  /tasks:
 *  post:
 *      sumary: creamos una nueva tarea
 */
router.post("/tasks", createTasks);

/**
 * @swagger
 *  /tasks/id:
 *  delete:
 *      sumary: eliminamos una tarea segun el id
 */
router.delete("/tasks/:id", deleteTasks);

/**
 * @swagger
 *  /tasks/id:
 *  put:
 *      sumary: Modificamos una tarea segun el id
 */
router.put("/tasks/:id", updateTasks);

export default router;
