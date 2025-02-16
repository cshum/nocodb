let t0 = require("./explicitLogin");
let t01 = require("../common/00_pre_configurations");
let t6b = require("../common/6b_downloadCsv");
let t6c = require("../common/6c_swagger_api");
let t6e = require("../common/6e_project_operations");
let t6f = require("../common/6f_attachments");
let t6g = require("../common/6g_base_share");
let t6h = require("../common/6h_change_password");
let t7a = require("../common/7a_create_project_from_excel");
let t8a = require("../common/8a_webhook");
let t9b = require("../common/9b_ERD");
const {
  setCurrentMode,
} = require("../../support/page_objects/projectConstants");

const nocoTestSuite = (apiType, dbType) => {
  setCurrentMode(apiType, dbType);

  // Sakila Ext DB project creation
  t01.genTest(apiType, dbType);

  // Download CSV
  t6b.genTest(apiType, dbType);

  // // i18n
  // t6d.genTest(apiType, dbType);

  // Swagger API
  // exclude@ncv2 t6c.genTest(apiType, dbType);

  // Attachment cell
  t6f.genTest(apiType, dbType);

  // ERD
  t9b.genTest(apiType, dbType);

  // Webhook tests
  t8a.genTest(apiType, dbType);

  // Base share (viewer, editor), iFrame tests
  t6g.genTest(apiType, dbType);

  // Project operations: Delete
  t6e.genTest(apiType, dbType);

  // Create project from Excel
  t7a.genTest(apiType, dbType);

  // Change password
  t6h.genTest(apiType, dbType);
};

nocoTestSuite("rest", "mysql");


