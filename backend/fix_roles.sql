-- Update existing users with role 'user' to 'player'
UPDATE "User" SET role = 'player' WHERE role = 'user';

-- Verify the update
SELECT id, email, role FROM "User";
