import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerProjects = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Projects, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectCategory?: string | null;
  readonly customer?: string | null;
  readonly cicTeam?: string | null;
  readonly projectName?: string | null;
  readonly projectType?: string | null;
  readonly awsService?: string | null;
  readonly img_Url?: string | null;
  readonly demo_Url?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjects = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Projects, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly projectCategory?: string | null;
  readonly customer?: string | null;
  readonly cicTeam?: string | null;
  readonly projectName?: string | null;
  readonly projectType?: string | null;
  readonly awsService?: string | null;
  readonly img_Url?: string | null;
  readonly demo_Url?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Projects = LazyLoading extends LazyLoadingDisabled ? EagerProjects : LazyProjects

export declare const Projects: (new (init: ModelInit<Projects>) => Projects) & {
  copyOf(source: Projects, mutator: (draft: MutableModel<Projects>) => MutableModel<Projects> | void): Projects;
}