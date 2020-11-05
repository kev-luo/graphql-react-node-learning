const graphql = require('graphql');
const _ = require('lodash');
const Project = require('../models/project');
const Skill = require('../models/skill');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull } = graphql;

const SkillType = new GraphQLObjectType({ 
  name: 'Skill',
  fields: () => ({ 
    id: { type: GraphQLID }, 
    name: { type: GraphQLString },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) { 
        return Project.find({ skillIds: parent.id });
      }
    }
  })
});

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    skillIds: { type: new GraphQLList(GraphQLID)},
    skills: {
      type: new GraphQLList(SkillType),
      resolve(parent, args) {
        return Skill.find( {_id : { $in : parent.skillIds }})
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: { 
    skill: {
      type: SkillType,
      args: {
        id: { type: GraphQLID }
      }, 
      resolve(parent, args) {
        return Skill.findById(args.id);
      }
    },
    skills: {
      type: new GraphQLList(SkillType),
      resolve(parent, args) {
        return Skill.find({});
      }
    },
    project: {
      type: ProjectType,
      args: {
        id: { type: GraphQLID }
      },
      resolve(parent, args) {
        return Project.findById(args.id);
      }
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutate',
  fields: {
    addProject: {
      type: ProjectType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        skillIds: { type: new GraphQLNonNull(new GraphQLList(GraphQLID))}
      },
      resolve(parent, args) {
        let project = new Project({
          name: args.name,
          description: args.description,
          skillIds: args.skillIds
        })
        return project.save();
      }
    },
    addSkill: {
      type: SkillType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        return Skill(args).save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});