interface TrackModel {
  id: string;
  name: string;
  album: {
    images: {
      url: string;
    }[];
  };
  artists: {
    name: string;
  }[];
  popularity: number;
}

export interface PlaylistTrackItemModel {
  track: TrackModel;
}

interface PlaylistTrackModel {
  items: PlaylistTrackItemModel[];
}

export interface PlaylistModel {
  id: string;
  tracks: PlaylistTrackModel;
}
