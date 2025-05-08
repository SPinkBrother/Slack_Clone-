import { v } from "convex/values"
import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";


const schema = defineSchema({
    ...authTables,
    workspaces: defineTable({
        name:  v.string(),
        userId: v.id("users"),
        joinCode: v.string(),
    }),
    members: defineTable({
        userId: v.id("users"),
        workspaceId: v.id("workspaces"),
        role: v.union(v.literal("admin"), v.literal("member")),
    }),
});
 
export default schema;