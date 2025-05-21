import { MediaItem } from '../api/jellyfin'
import { useJellyfinContext } from '../context/JellyfinContext/JellyfinContext'
import { usePatchQueries } from './usePatchQueries'

export const useFavorites = () => {
    const api = useJellyfinContext()
    const { patchMediaItem, prependItemToQueryData, removeItemFromQueryData } = usePatchQueries()

    return {
        addToFavorites: async (item: MediaItem) => {
            const res = await api.addToFavorites(item.Id)

            prependItemToQueryData(['favorites', item.Type || ''], item)

            patchMediaItem(item.Id, item => {
                return { ...item, UserData: res.data }
            })
        },
        removeFromFavorites: async (item: MediaItem) => {
            const res = await api.removeFromFavorites(item.Id)

            removeItemFromQueryData(['favorites', item.Type || ''], item.Id)

            patchMediaItem(item.Id, item => {
                return { ...item, UserData: res.data }
            })
        },
    }
}
