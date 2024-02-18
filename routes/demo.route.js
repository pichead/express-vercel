const { Router } = require("express");
const { SuccessResponseObject } = require("../common/http");

// const { PrismaClient } = require('@prisma/client')
const { PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient()

const r = Router();

r.get("/", async (req, res) => {

  const findAdmin = await prisma.admin.findMany()

  res.json(findAdmin);
});

module.exports = r;
