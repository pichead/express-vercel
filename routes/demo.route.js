const { Router } = require("express");
const { SuccessResponseObject } = require("../common/http");

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const r = Router();

r.get("/", (req, res) => {
  res.json(new SuccessResponseObject("demo path live 🚀"));
});

module.exports = r;
