import { Router } from "express";
import { authenticateToken } from "../middlewares/auth";
import Event from "../models/Event";

const router = Router();

router.get("/", authenticateToken, async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

router.post("/", authenticateToken, async (req, res) => {
  const { type, deviceId, timestamp, details } = req.body;
  const event = new Event({ type, deviceId, timestamp, details });
  await event.save();
  res.status(201).json(event);
});

router.put("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedEvent);
});

router.delete("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  await Event.findByIdAndDelete(id);
  res.status(204).send();
});

export default router;
