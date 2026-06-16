-- Sanitized example schema for BrainMaster.
-- This file contains fake data only. Do not commit real users, emails, hashes, or logs.

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nick VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  age INT NOT NULL,
  created_at DATETIME NULL,
  hash VARCHAR(255) NULL,
  state TINYINT NOT NULL DEFAULT 0
);

INSERT INTO users (nick, password, email, age, created_at, hash, state) VALUES
('demo_user', 'replace-with-password_hash-output', 'demo@example.test', 30, NULL, 'demo-activation-token', 1);
