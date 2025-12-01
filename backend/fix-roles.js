const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function fixRoles() {
    try {
        // Update all users with role 'user' to 'player'
        const result = await prisma.user.updateMany({
            where: {
                role: 'user'
            },
            data: {
                role: 'player'
            }
        });

        console.log(`Updated ${result.count} users from 'user' to 'player'`);

        // Show all users
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                role: true
            }
        });

        console.log('\nCurrent users:');
        console.table(users);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await prisma.$disconnect();
    }
}

fixRoles();
