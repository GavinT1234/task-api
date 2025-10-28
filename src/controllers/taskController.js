import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}

export async function getTaskById(req, res, next) {
  const { id } = req.params;
  const task = await taskService.getTaskById(id);

  if (!task) {
    if (isNaN(parseInt(id, 10))) {
      return res.status(400).json({ error: 'Invalid task ID' });
    }
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
}