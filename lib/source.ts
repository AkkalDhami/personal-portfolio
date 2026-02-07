import { IPlaybook } from "@/types/app.types";
import { PLAYBOOK_DATA } from "@/data/playbook";

export const RESTRICTED_FOLDER_STRUCTURE_PAGES = [
  "installation",
  "introduction",
  "project-structure"
];

export const findNeighbour = (
  slug: string
): { prev: IPlaybook | undefined; next: IPlaybook | undefined } => {
  const currentItem = PLAYBOOK_DATA.find(item => item.slug === slug);

  if (!currentItem) {
    return {
      prev: undefined,
      next: undefined
    };
  }

  // const sameTypeItems = PLAYBOOK_DATA
  //   .sort((a, b) => a.title.localeCompare(b.title));

  const index = PLAYBOOK_DATA.findIndex(item => item.slug === slug);

  return {
    prev: index > 0 ? PLAYBOOK_DATA[index - 1] : undefined,
    next:
      index < PLAYBOOK_DATA.length - 1 ? PLAYBOOK_DATA[index + 1] : undefined
  };
};
