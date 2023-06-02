// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Projects } = initSchema(schema);

export {
  Projects
};