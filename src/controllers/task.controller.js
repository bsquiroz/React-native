import { connect } from "../db";

const getTasks = async (req, res) => {
    try {
        const connection = await connect();
        const [rows] = await connection.query("SELECT * FROM tasks");
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ msgError: error });
    }
};

const getTask = async (req, res) => {
    try {
        const id = req.params.id;
        const connection = await connect();
        const [rows] = await connection.query(
            `SELECT * FROM tasks WHERE id = ${id}`
        );
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ msgError: error });
    }
};

const getTaskCount = async (req, res) => {
    try {
        const connection = await connect();
        const [rows] = await connection.query("SELECT COUNT(*) FROM tasks");
        res.status(200).json(rows[0]["COUNT(*)"]);
    } catch (error) {
        res.status(500).json({ msgError: error });
    }
};

const createTasks = async (req, res) => {
    try {
        const { title, description } = req.body;
        const connection = await connect();
        const [results] = await connection.query(
            `INSERT INTO tasks(title, description) VALUES ("${title}", "${description}")`
        );
        res.status(200).json({
            id: results.insertId,
            title,
            description,
        });
    } catch (error) {
        res.status(500).json({ msgError: error });
    }
};

const deleteTasks = async (req, res) => {
    try {
        const id = req.params.id;
        const connection = await connect();
        await connection.query(`DELETE FROM tasks WHERE id = ${id}`);
        res.status(200).json({
            msgSucess: `Tarea con el id ${id} fue eliminada correctamente`,
        });
    } catch (error) {
        res.status(500).json({ msgError: error });
    }
};

const updateTasks = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description } = req.body;
        const data = { title, description };
        const connection = await connect();
        await connection.query(`UPDATE tasks SET ? WHERE id = ${id}`, [data]);
        res.status(200).json({
            msgSucess: `Tarea con el id ${id} se ha ACTUALIZADO correctamente`,
        });
    } catch (error) {
        res.status(500).json({ msgError: error });
    }
};

module.exports = {
    getTasks,
    getTask,
    getTaskCount,
    createTasks,
    deleteTasks,
    updateTasks,
};
