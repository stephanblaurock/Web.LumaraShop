import {JsonCommand} from '../utils/json/json-command';
import {Gastgeber} from '../models/gastgeber';
import {Fachberater} from '../models/fachberater';

export class LumaraServiceCommands {

  public static GetUserAccessRights(): JsonCommand {
    const cmd = new JsonCommand();
    cmd.ModuleName = 'Modules.Lumara.Base.Service.BaseService';
    cmd.CommandName = 'GetUserAccessRights';
    // cmd.addParameter('user_id', user_id);
    return cmd;
  }

  public static GetMitarbeiterList(): JsonCommand {
    const cmd = new JsonCommand();
    cmd.ModuleName = 'Modules.Lumara.Base.Service.MitarbeiterService';
    cmd.CommandName = 'GetMitarbeiterList';
    // cmd.addParameter('user_id', user_id);
    return cmd;
  }


  /***** Blogging *****/
  public static GetBlogPosts(archiveID: number, publishedFilter: number, pageNr: number, itemsPerPage: number): JsonCommand {
    const cmd = new JsonCommand();
    cmd.ModuleName = 'Modules.Blogging.Service.BlogService';
    cmd.CommandName = 'GetBlogPosts';
    cmd.addParameter('ArchiveID', archiveID);
    cmd.addParameter('PublishedFilter', publishedFilter);
    cmd.addParameter('PageNr', pageNr);
    cmd.addParameter('ItemsPerPage', itemsPerPage);
    return cmd;
  }

  /***** Fachberater *****/
  public static GetFachberater(): JsonCommand {
    const cmd = new JsonCommand();
    cmd.ModuleName = 'Modules.Lumara.Base.Service.BaseService';
    cmd.CommandName = 'GetFachberater';
    return cmd;
  }
  public static UpdateFachberater(fb: Fachberater): JsonCommand {
    const cmd = new JsonCommand();
    cmd.ModuleName = 'Modules.Lumara.Base.Service.BaseService';
    cmd.CommandName = 'UpdateFachberater';
    cmd.addParameter('Fachberater', fb);
    return cmd;
  }

  /***** Gastgeber *****/
  public static GetGastgeberlist(pageNr: number, itemsPerPage: number): JsonCommand {
    const cmd = new JsonCommand();
    cmd.ModuleName = 'Modules.Lumara.Base.Service.BaseService';
    cmd.CommandName = 'GetGastgeberlist';
    cmd.addParameter('PageNr', pageNr);
    cmd.addParameter('ItemsPerPage', itemsPerPage);
    return cmd;
  }

  public static UpdateGastgeber(gg: Gastgeber): JsonCommand {
    const cmd = new JsonCommand();
    cmd.ModuleName = 'Modules.Lumara.Base.Service.BaseService';
    cmd.CommandName = 'UpdateGastgeber';
    cmd.addParameter('Gastgeber', gg);
    return cmd;
  }
}
