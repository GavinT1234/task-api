import prisma from '../config/db.js';

export async function findAll() {
  return prisma.task.findMany();
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}

export async function getTaskById(id) {
  const parsedId = parseInt(id, 10);
  if (isNaN(parsedId)) return null;
  return taskRepository.findById(parsedId);
}

